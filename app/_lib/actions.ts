'use server';

import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { createUser, getUser } from './users-api';

export async function signInAction() {
   await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
   await signOut({ redirectTo: '/' });
}

export async function adminCreateUserAction(formData: FormData) {
   const full_name = formData.get('full_name') as string;
   const email = formData.get('email') as string;

   try {
      if (email) {
         const existingUser = await getUser(email);

         if (!existingUser && full_name) {
            await createUser({ email, full_name });
         } else {
            console.error('User already exists or full name is missing.');
            return false;
         }
      }

      revalidatePath('/admin-dashboard/users');

      return true;
   } catch (error) {
      console.error('Error creating user:', error);
      return false;
   }
}
