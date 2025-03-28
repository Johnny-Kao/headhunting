import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import type { LoginCredentials } from '@/types/auth';
import { prisma } from '@/lib/prisma';
import { generateToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    const body: LoginCredentials = await request.json();
    const { email, password, rememberMe } = body;

    console.log('登录请求:', { email, rememberMe });

    // 查找用户
    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log('查找用户结果:', user ? '用户存在' : '用户不存在');

    if (!user) {
      return NextResponse.json(
        { message: '用户不存在' },
        { status: 401 }
      );
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log('密码验证结果:', isValidPassword ? '密码正确' : '密码错误');

    if (!isValidPassword) {
      return NextResponse.json(
        { message: '密码错误' },
        { status: 401 }
      );
    }

    // 生成 JWT 令牌
    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType as 'headhunter' | 'candidate',
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });

    console.log('生成令牌成功');

    // 创建响应
    const response = NextResponse.json(
      {
        message: '登录成功',
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
      maxAge: rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60, // 30天或1天
    });

    console.log('设置 cookie 成功');

    return response;
  } catch (error) {
    console.error('登录失败:', error);
    return NextResponse.json(
      { message: '登录失败' },
      { status: 500 }
    );
  }
} 