import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

// 需要认证的路径
const authRequiredPaths = [
  '/profile',
  '/jobs/create',
  '/jobs/edit',
  '/jobs/delete',
  '/candidates/create',
  '/candidates/edit',
  '/candidates/delete',
];

// 需要特定用户类型的路径
const userTypeRequiredPaths = {
  '/jobs/create': ['headhunter'],
  '/jobs/edit': ['headhunter'],
  '/jobs/delete': ['headhunter'],
  '/candidates/create': ['candidate'],
  '/candidates/edit': ['candidate'],
  '/candidates/delete': ['candidate'],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检查是否需要认证
  if (authRequiredPaths.some(path => pathname.startsWith(path))) {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      // 重定向到登录页面
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      // 令牌无效，重定向到登录页面
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // 检查用户类型权限
    const requiredUserTypes = Object.entries(userTypeRequiredPaths).find(([path]) =>
      pathname.startsWith(path)
    )?.[1];

    if (requiredUserTypes && !requiredUserTypes.includes(decoded.userType)) {
      // 用户类型不匹配，重定向到首页
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 已登录用户不能访问登录和注册页面
  if (pathname === '/login' || pathname === '/signup') {
    const token = request.cookies.get('auth_token')?.value;

    if (token) {
      const decoded = verifyToken(token);

      if (decoded) {
        // 已登录用户重定向到首页
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了:
     * - api (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (浏览器图标)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 