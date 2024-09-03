import { createUser, getUser } from '@/app/_lib/users-api';
import NextAuth, { Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import Google from 'next-auth/providers/google';

const authConfig = {
   providers: [
      Google({
         clientId: process.env.AUTH_GOOGLE_ID,
         clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
   ],
   callbacks: {
      authorized({ auth }: { auth: Session | null }) {
         return !!auth?.user;
      },
      async signIn({ user }: { user: User | AdapterUser }) {
         try {
            if (user.email) {
               const existingUser = await getUser(user.email);

               if (!existingUser && user.name) {
                  await createUser({ email: user.email, full_name: user.name });
               }
            }
            return true;
         } catch {
            return false;
         }
      },
      async session({ session }: { session: Session }) {
         if (session.user) {
            const guest = await getUser(session.user.email ?? '');
            session.user.userId = guest.id;
            session.user.isAdmin = guest.is_admin;
         }
         return session;
      },
   },
   pages: {
      signIn: '/login',
   },
};

export const {
   auth,
   signIn,
   signOut,
   handlers: { GET, POST },
} = NextAuth(authConfig);
