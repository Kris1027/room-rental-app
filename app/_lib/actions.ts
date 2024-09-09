'use server';

import { supabase } from '@/app/_lib/supabase';
import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { createUser, getUser } from '@/app/_lib/users-api';

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

export async function adminDeleteUserAction(userId: number) {
   const { error } = await supabase.from('users').delete().eq('id', userId);

   if (error) throw new Error('User could not be deleted');

   revalidatePath('/admin-dashboard/users');
}

export async function adminUpdateUserAction(formData: FormData) {
   const id = formData.get('id') as string;
   const email = formData.get('email') as string;
   const full_name = formData.get('full_name') as string;

   const updatedFields = {
      id: Number(id),
      email,
      full_name,
   };

   const { error } = await supabase
      .from('users')
      .update(updatedFields)
      .eq('id', id);

   if (error) throw new Error('User could not be updated');
}
