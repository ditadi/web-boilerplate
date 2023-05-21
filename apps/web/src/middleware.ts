import { authMiddleware } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/sign-in', '/sign-up'];

export default authMiddleware({
  beforeAuth: (req: NextRequest) => {
    if (req.nextUrl.pathname === '/') {
      const dashboardURL = new URL('/dashboard', req.url);
      return NextResponse.redirect(dashboardURL);
    }
  },
  publicRoutes,
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
