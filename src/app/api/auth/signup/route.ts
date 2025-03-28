import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import type { SignupData } from '@/types/auth';
import { prisma } from '@/lib/prisma';
import { generateToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    const body: SignupData = await request.json();
    const { name, email, password, userType, agreeToTerms } = body;

    console.log('注册请求:', { name, email, userType, agreeToTerms });

    if (!agreeToTerms) {
      return NextResponse.json(
        { message: '请同意服务条款' },
        { status: 400 }
      );
    }

    // 检查邮箱是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    console.log('检查邮箱结果:', existingUser ? '邮箱已存在' : '邮箱可用');

    if (existingUser) {
      return NextResponse.json(
        { message: '该邮箱已被注册' },
        { status: 400 }
      );
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('密码加密完成');

    // 创建用户
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        userType,
      },
    });

    console.log('用户创建成功:', user.id);

    // 生成 JWT 令牌
    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType as 'headhunter' | 'candidate',
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    });

    console.log('生成令牌成功');

    // 创建响应
    const response = NextResponse.json(
      {
        message: '注册成功',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          userType: user.userType,
        },
      },
      { status: 200 }
    );

    // 设置认证 cookie
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 1天
    });

    console.log('设置 cookie 成功');

    return response;
  } catch (error) {
    console.error('注册失败:', error);
    return NextResponse.json(
      { message: '注册失败' },
      { status: 500 }
    );
  }
} 