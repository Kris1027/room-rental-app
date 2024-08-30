import { supabase } from '@/app/_lib/supabase';
import { usersProps } from '@/app/types/data-types';

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

export async function createUser(newUser: usersProps) {
   {
      const { data, error } = await supabase.from('users').insert([newUser]);

      if (error) {
         console.error(error);
         throw new Error('User could not be created');
      }

      return data;
   }
}
