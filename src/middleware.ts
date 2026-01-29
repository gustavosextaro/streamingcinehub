import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('firebase-session');
  const url = request.nextUrl;

  // Redirect to login if not authenticated and not on the login page
  // if (!session && url.pathname !== '/login') {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  // If authenticated and on the login page, redirect to home
  if (session && url.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
