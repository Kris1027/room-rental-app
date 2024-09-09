'use server';

import { createRoom } from '@/app/_lib/rooms-api';
import { supabase } from '@/app/_lib/supabase';
import { createUser, getUser } from '@/app/_lib/users-api';
import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function adminCreateRoomAction(formData: FormData) {
   const image_url = formData.get('image_url') as string;
   const name = formData.get('name') as string;
   const description = formData.get('description') as string;
   const regular_price = formData.get('regular_price') as string;
   const max_capacity = formData.get('max_capacity') as string;
   const discount = formData.get('discount') as string;

   try {
      if (name) {
         const existingRoom = await getUser(name);

         if (!existingRoom && image_url) {
            await createRoom({
               image_url,
               name,
               description,
               regular_price: Number(regular_price),
               max_capacity: Number(max_capacity),
               discount: Number(discount),
            });
         } else {
            console.error('Room already exists or image url is missing.');
            return false;
         }
      }

      revalidatePath('/admin-dashboard/rooms');
      revalidatePath('/rooms');

      return true;
   } catch (error) {
      console.error('Error creating room:', error);
      return false;
   }
}

export async function adminDeleteRoomAction(roomId: number) {
   const { error } = await supabase.from('rooms').delete().eq('id', roomId);

   if (error) throw new Error('Room could not be deleted');

   revalidatePath('/admin-dashboard/rooms');
   revalidatePath('/rooms');
}
