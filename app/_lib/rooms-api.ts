import { supabase } from '@/app/_lib/supabase';

export async function GetRooms() {
   const { data: rooms, error } = await supabase.from('rooms').select('*');

   if (error) {
      console.error('Error fetching rooms:', error);
      return null;
   }

   return rooms;
}
