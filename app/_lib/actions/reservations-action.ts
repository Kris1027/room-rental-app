'use server';

import { createReservation } from '@/app/_lib/reservations-api';
import { supabase } from '@/app/_lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function adminDeleteReservationAction(reservationId: number) {
   const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', reservationId);

   if (error) throw new Error('Reservation could not be deleted');

   revalidatePath('/admin-dashboard/reservations');
}

export async function adminUpdateReservationAction(formData: FormData) {
   const id = formData.get('id') as string;
   const created_at = formData.get('created_at') as string;
   const user_id = formData.get('user_id') as string;
   const room_id = formData.get('room_id') as string;
   const start_date = formData.get('start_date') as string;
   const end_date = formData.get('end_date') as string;
   const num_nights = formData.get('num_nights') as string;
   const num_guests = formData.get('num_guests') as string;
   const total_price = formData.get('total_price') as string;
   const status = formData.get('status') as string;
   const is_paid = formData.get('is_paid') as string;

   const updatedFields = {
      id: Number(id),
      created_at,
      user_id: Number(user_id),
      room_id: Number(room_id),
      start_date,
      end_date,
      num_nights: Number(num_nights),
      num_guests: Number(num_guests),
      total_price: Number(total_price),
      status,
      is_paid: Boolean(is_paid),
   };

   const { error } = await supabase
      .from('reservations')
      .update(updatedFields)
      .eq('id', id);

   if (error) throw new Error('Reservation could not be updated');

   revalidatePath('/admin-dashboard/reservations/' + id);
   redirect('/admin-dashboard/reservations');
}

export async function userCreateReservationAction(formData: FormData) {
   const user_id = formData.get('user_id') as string;
   const room_id = formData.get('room_id') as string;
   const start_date = formData.get('start_date') as string;
   const end_date = formData.get('end_date') as string;
   const num_guests = formData.get('num_guests') as string;
   const price = formData.get('total_price') as string;

   const parsedStartDate = new Date(start_date);
   const parsedEndDate = new Date(end_date);

   const num_nights = Math.ceil(
      (parsedEndDate.getTime() - parsedStartDate.getTime()) /
         (1000 * 60 * 60 * 24)
   );

   const total_price = num_nights * Number(price);

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
