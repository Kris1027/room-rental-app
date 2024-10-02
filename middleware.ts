import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

export const middleware = async (request: NextRequest) => {
   const session = await auth();

   const isAdminRoute = request.nextUrl.pathname.startsWith('/admin-dashboard');

   if (!session?.user) {
      return NextResponse.redirect(new URL('/login', request.url));
   }

   if (isAdminRoute && !session.user.isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
   }

   return NextResponse.next();
};

export const config = {
   matcher: ['/account', '/admin-dashboard/:path*'],
};
