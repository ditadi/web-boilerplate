import { authMiddleware } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export default authMiddleware({
	beforeAuth: (req: NextRequest) => {
		if (req.nextUrl.pathname === '/') {
			const dashboardURL = new URL('/dashboard', req.url);
			return NextResponse.redirect(dashboardURL);
		} else {
			return NextResponse.next();
		}
	},
	debug: true,
});
