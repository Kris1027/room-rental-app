import { supabase } from '@/app/_lib/supabase';

export async function createMessage(newMessage: {
   user_id: number;
   message: string;
}) {
   const { data, error } = await supabase.from('messages').insert([newMessage]);

   if (error) {
      console.error(error);
      throw new Error('Message could not be created');
   }

   return data;
}
