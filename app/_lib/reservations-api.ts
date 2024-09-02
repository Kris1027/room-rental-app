import { supabase } from '@/app/_lib/supabase';

export async function getReservations() {
   const { data: reservations, error } = await supabase
      .from('reservations')
      .select('*');

   if (error) {
      console.error('Error fetching users:', error);
      return null;
   }

   return reservations;
}
