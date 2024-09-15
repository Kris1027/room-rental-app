'use server';

import { createMessage } from '@/app/_lib/messages';
import { supabase } from '@/app/_lib/supabase';
import { revalidatePath } from 'next/cache';

export async function sendMessageAction(formData: FormData) {
   const user_id = formData.get('user_id') as string;
   const message = formData.get('message') as string;
   const user_email = formData.get('user_email') as string;

   const newMessage = {
      user_id: Number(user_id),
      message,
      user_email,
   };

   try {
      if (user_id && message) {
         await createMessage(newMessage);
      } else {
         console.error('Missing required fields');
         return false;
      }

      revalidatePath('/admin-dashboard/messages');
      return true;
   } catch (error) {
      console.error('Error creating message:', error);
      return false;
   }
}

export async function deleteMessageAction(messageId: number) {
   const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', messageId);

   if (error) throw new Error('Message could not be deleted');

   revalidatePath('/admin-dashboard/messages');
}
