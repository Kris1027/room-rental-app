'use server';

import { supabase } from '@/app/_lib/supabase';
import { redirect } from 'next/navigation';

export async function supabaseLoginAction(formData: FormData) {
   const email = formData.get('email') as string;
   const password = formData.get('password') as string;

   const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
   });

   if (error) {
      throw new Error(error.message);
   }

   redirect('/');
}

export async function supabaseLogoutAction() {
   const { error } = await supabase.auth.signOut();

   if (error) {
      throw new Error(error.message);
   }

   redirect('/login');
}
