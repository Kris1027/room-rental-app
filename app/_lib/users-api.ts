import { supabase } from '@/app/_lib/supabase';

export async function GetUsers() {
   const { data: users, error } = await supabase.from('users').select('*');

   if (error) {
      console.error('Error fetching users:', error);
      return null;
   }

   return users;
}

export async function getUser(email: string) {
   const { data } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
   return data;
}

export async function createUser(newUser: {
   email: string;
   full_name: string;
}) {
   {
      const { data, error } = await supabase.from('users').insert([newUser]);

      if (error) {
         console.error(error);
         throw new Error('User could not be created');
      }

      return data;
   }
}
