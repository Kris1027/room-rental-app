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

export async function getMessages() {
   const { data: messages, error } = await supabase
      .from('messages')
      .select('*');

   if (error) {
      console.error('Error fetching messages:', error);
      return null;
   }

   return messages;
}
