'use server';

import { revalidatePath } from 'next/cache';
import { createReservation } from '../reservations-api';

export async function adminCreateReservationAction(formData: FormData) {
   const user_id = formData.get('user_id') as string;
   const room_id = formData.get('room_id') as string;
   const start_date = formData.get('start_date') as string;
   const end_date = formData.get('end_date') as string;
   const num_nights = formData.get('num_nights') as string;
   const num_guests = formData.get('num_guests') as string;
   const total_price = formData.get('total_price') as string;

   const newReservation = {
      user_id: Number(user_id),
      room_id: Number(room_id),
      start_date,
      end_date,
      num_nights: Number(num_nights),
      num_guests: Number(num_guests),
      total_price: Number(total_price),
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
