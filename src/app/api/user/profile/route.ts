import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';
import type { UpdateProfileData } from '@/types/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: '未授权' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { message: '无效的令牌' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        userType: true,
        createdAt: true,
        updatedAt: true,
        avatar: true,
        phone: true,
        location: true,
        bio: true,
        company: true,
        position: true,
        experience: true,
        specialties: true,
        achievements: true,
        education: true,
        skills: true,
        workHistory: true,
        expectedSalary: true,
        jobPreferences: true,
        wechat: true,
        linkedin: true,
        website: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: '用户不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('获取用户资料失败:', error);
    return NextResponse.json(
      { message: '获取用户资料失败' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: '未授权' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { message: '无效的令牌' },
        { status: 401 }
      );
    }

    const body: UpdateProfileData = await request.json();

    const user = await prisma.user.update({
      where: { id: decoded.id },
      data: body,
      select: {
        id: true,
        name: true,
        email: true,
        userType: true,
        createdAt: true,
        updatedAt: true,
        avatar: true,
        phone: true,
        location: true,
        bio: true,
        company: true,
        position: true,
        experience: true,
        specialties: true,
        achievements: true,
        education: true,
        skills: true,
        workHistory: true,
        expectedSalary: true,
        jobPreferences: true,
        wechat: true,
        linkedin: true,
        website: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('更新用户资料失败:', error);
    return NextResponse.json(
      { message: '更新用户资料失败' },
      { status: 500 }
    );
  }
} 