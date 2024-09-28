'use server';

import { supabase } from '@/app/_lib/supabase';
import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signInAction() {
   await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
   await signOut({ redirectTo: '/' });
}

export async function adminUpdateUserAction(formData: FormData) {
   const id = formData.get('id') as string;
   const email = formData.get('email') as string;
   const full_name = formData.get('full_name') as string;
   const is_admin = formData.get('is_admin') as string;

   const updatedFields = {
      email,
      full_name,
      is_admin,
   };

   const { error } = await supabase
      .from('users')
      .update(updatedFields)
      .eq('id', id);

   if (error) throw new Error('User could not be updated');

   revalidatePath('/admin-dashboard/users/' + id);
   redirect('/admin-dashboard/users');
}
