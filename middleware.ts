import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/sign-in', '/sign-up' ,'/about']);

export default clerkMiddleware((auth, req) => {
    //restrict all other routes that aren't public
    if (!isPublicRoute(req)) auth.protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};