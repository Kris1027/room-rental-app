'use server';

import { revalidatePath } from 'next/cache';
import { createReservation } from '../reservations-api';

export async function adminCreateReservationAction(formData: FormData) {
   const user_id = formData.get('user_id') as string;
   const room_id = formData.get('room_id') as string;
   const start_date = formData.get('start_date') as string;
   const end_date = formData.get('end_date') as string;

   const newReservation = {
      user_id: Number(user_id),
      room_id: Number(room_id),
      start_date,
      end_date,
   };

   try {
      if (user_id && room_id && start_date && end_date) {
         await createReservation(newReservation);
      } else {
         console.error('Missing required fields');
         return false;
      }

      revalidatePath('/admin-dashboard/reservations');
      return true;
   } catch (error) {
      console.error('Error creating reservation:', error);
      return false;
   }
}
