// types.d.ts

import NextAuth from 'next-auth';

declare module 'next-auth' {
   interface User {
      userId?: string;
      is_admin?: boolean;
   }

   interface Session {
      user: User;
   }
}
