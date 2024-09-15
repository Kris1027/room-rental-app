'use server';

import { revalidatePath } from 'next/cache';
import { createMessage } from '@/app/_lib/messages';

export async function sendMessageAction(formData: FormData) {
   console.log(formData);
   const user_id = formData.get('user_id') as string;
   const message = formData.get('message') as string;

   const newMessage = {
      user_id: Number(user_id),
      message,
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
