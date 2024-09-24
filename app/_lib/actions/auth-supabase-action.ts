'use server';

import { supabase } from '@/app/_lib/supabase';

export async function supabaseLoginAction(formData: FormData) {
   const email = formData.get('email') as string;
   const password = formData.get('password') as string;

   const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
   });

   if (error) {
      throw new Error(error.message);
   }

   console.log(data);
   return data;
}
