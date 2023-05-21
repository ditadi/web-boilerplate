import { authMiddleware } from '@clerk/nextjs';

const publicRoutes = ["/sign-in", "/sign-up"]

export default authMiddleware({
	publicRoutes
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
