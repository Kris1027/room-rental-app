'use server';

import { supabase } from '@/app/_lib/supabase';
import { createUser, getUser } from '@/app/_lib/users-api';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUserAction(formData: FormData) {
   const full_name = formData.get('full_name') as string;
   const email = formData.get('email') as string;

   const newUser = {
      email,
      full_name,
   };

   try {
      if (email) {
         const existingUser = await getUser(email);

         if (!existingUser && full_name) {
            await supabase.from('users').insert([newUser]);
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

export async function updateUserAction(formData: FormData) {
   const id = formData.get('id') as string;
   const email = formData.get('email') as string;
   const full_name = formData.get('full_name') as string;

   const updatedFields = {
      email,
      full_name,
   };

   const { error } = await supabase
      .from('users')
      .update(updatedFields)
      .eq('id', id);

   if (error) throw new Error('User could not be updated');

   revalidatePath('/account');
   redirect('/account');
}

export async function deleteUserAction(userId: number) {
   const { error } = await supabase.from('users').delete().eq('id', userId);

   if (error) throw new Error('User could not be deleted');

   revalidatePath('/admin-dashboard/users');
}
