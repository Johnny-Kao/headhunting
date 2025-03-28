import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: '登出成功' },
      { status: 200 }
    );

    // 清除认证 cookie
    response.cookies.delete('auth_token');

    return response;
  } catch (error) {
    console.error('登出失败:', error);
    return NextResponse.json(
      { message: '登出失败' },
      { status: 500 }
    );
  }
} 