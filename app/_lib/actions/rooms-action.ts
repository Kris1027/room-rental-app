'use server';

import { supabase } from '@/app/_lib/supabase';
import { getRoomByName } from '@/app/_lib/rooms-api';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createRoomAction(formData: FormData) {
   const image_url = formData.get('image_url') as string;
   const name = formData.get('name') as string;
   const description = formData.get('description') as string;
   const regular_price = formData.get('regular_price') as string;
   const max_capacity = formData.get('max_capacity') as string;
   const discount = formData.get('discount') as string;

   const newRoom = {
      image_url,
      name,
      description,
      regular_price: Number(regular_price),
      max_capacity: Number(max_capacity),
      discount: Number(discount),
   };

   try {
      if (name) {
         const existingRoom = await getRoomByName(name);

         if (!existingRoom) {
            await supabase.from('rooms').insert([newRoom]);
         } else {
            console.error('Room already exists');
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

export async function deleteRoomAction(roomId: number) {
   const { error } = await supabase.from('rooms').delete().eq('id', roomId);

   if (error) throw new Error('Room could not be deleted');

   revalidatePath('/admin-dashboard/rooms');
   revalidatePath('/rooms');
}

export async function updateRoomAction(formData: FormData) {
   const id = formData.get('id') as string;
   const image_url = formData.get('image_url') as string;
   const name = formData.get('name') as string;
   const description = formData.get('description') as string;
   const regular_price = formData.get('regular_price') as string;
   const max_capacity = formData.get('max_capacity') as string;
   const discount = formData.get('discount') as string;

   const updatedFields = {
      image_url,
      name,
      description,
      regular_price: Number(regular_price),
      max_capacity: Number(max_capacity),
      discount: Number(discount),
   };

   const { error } = await supabase
      .from('rooms')
      .update(updatedFields)
      .eq('id', id);

   if (error) throw new Error('Room could not be updated');

   revalidatePath('/admin-dashboard/rooms/' + id);
   revalidatePath('/rooms');
   redirect('/admin-dashboard/rooms');
}
