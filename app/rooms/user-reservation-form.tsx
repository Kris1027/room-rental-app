'use client';

import { useState, useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { userCreateReservationAction } from '@/app/_lib/actions/reservations-action';
import { formatPrice } from '@/app/_utils/format-price';
import { FaUsers, FaCalendarAlt, FaBook } from 'react-icons/fa';
import type { roomsProps } from '@/app/types/data-types';

const createReservationSchema = z.object({
   user_id: z.number(),
   room_id: z.number(),
   start_date: z.date(),
   end_date: z.date(),
   num_nights: z.number().min(1),
   num_guests: z.number().min(1),
   total_price: z.number().min(0),
});

type FormFields = z.infer<typeof createReservationSchema>;

export function UserReservationForm({
   room,
   userId,
}: {
   room: roomsProps;
   userId: number;
}) {
   const [maxCapacity, setMaxCapacity] = useState<number>(room.max_capacity);

   const defaultEndDate = new Date();
   defaultEndDate.setDate(defaultEndDate.getDate() + 1);

   const {
      control,
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(createReservationSchema),
      defaultValues: {
         user_id: userId,
         room_id: room.id,
         start_date: new Date(),
         end_date: defaultEndDate,
         num_nights: 1,
         num_guests: 1,
         total_price: room.regular_price - room.discount,
      },
   });

   const startDate = watch('start_date');
   const endDate = watch('end_date');
   const numGuests = watch('num_guests');
   const totalPrice = watch('total_price');

   const calculatePrice = useCallback(() => {
      if (startDate && endDate) {
         const nights = Math.ceil(
            (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
         );
         setValue('num_nights', nights);
         const price = nights * (room.regular_price - room.discount);
         setValue('total_price', price);
      }
   }, [startDate, endDate, room.regular_price, room.discount, setValue]);

   useEffect(() => {
      calculatePrice();
   }, [calculatePrice, numGuests]);

   const onSubmit = async (data: FormFields) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         if (value instanceof Date) {
            formData.append(key, value.toISOString());
         } else {
            formData.append(key, value.toString());
         }
      });

      try {
         await userCreateReservationAction(formData);
         // Handle successful submission (e.g., show a success message, redirect, etc.)
      } catch (error) {
         console.error('Error creating reservation:', error);
         // Handle error (e.g., show an error message)
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className='flex flex-col justify-center gap-4'
      >
         <input type='hidden' {...register('user_id')} />
         <input type='hidden' {...register('room_id')} />

         <div className='flex items-center space-x-3'>
            <FaCalendarAlt size={24} />
            <div className='flex-grow'>
               <label
                  htmlFor='start_date'
                  className='text-sm font-semibold text-gray-600'
               >
                  Check-in Date
               </label>
               <Controller
                  name='start_date'
                  control={control}
                  render={({ field }) => (
                     <DatePicker
                        onChange={(date) => {
                           field.onChange(date);
                           if (date) {
                              const newEndDate = new Date(date);
                              newEndDate.setDate(newEndDate.getDate() + 1);
                              setValue('end_date', newEndDate);
                           }
                        }}
                        selected={field.value}
                        selectsStart
                        startDate={field.value}
                        endDate={watch('end_date')}
                        minDate={new Date()}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primaryHover'
                     />
                  )}
               />
               {errors.start_date && (
                  <ErrorForm>{errors.start_date.message}</ErrorForm>
               )}
            </div>
         </div>

         <div className='flex items-center space-x-3'>
            <FaCalendarAlt size={24} />
            <div className='flex-grow'>
               <label
                  htmlFor='end_date'
                  className='text-sm font-semibold text-gray-600'
               >
                  Check-out Date
               </label>
               <Controller
                  name='end_date'
                  control={control}
                  render={({ field }) => (
                     <DatePicker
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        selectsEnd
                        startDate={watch('start_date')}
                        endDate={field.value}
                        minDate={watch('start_date')}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primaryHover'
                     />
                  )}
               />
               {errors.end_date && (
                  <ErrorForm>{errors.end_date.message}</ErrorForm>
               )}
            </div>
         </div>

         <div className='flex items-center space-x-3'>
            <FaUsers size={24} />
            <div className='flex-grow'>
               <label
                  htmlFor='num_guests'
                  className='text-sm font-semibold text-gray-600'
               >
                  Number of Guests
               </label>
               <select
                  {...register('num_guests', { valueAsNumber: true })}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primaryHover'
               >
                  {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
                     (num) => (
                        <option key={num} value={num}>
                           {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                     )
                  )}
               </select>
               {errors.num_guests && (
                  <ErrorForm>{errors.num_guests.message}</ErrorForm>
               )}
            </div>
         </div>

         <div className='flex items-center space-x-3'>
            <div className='flex-grow'>
               <label
                  htmlFor='total_price'
                  className='text-sm font-semibold text-gray-600'
               >
                  Total Price
               </label>
               <input
                  {...register('total_price', { valueAsNumber: true })}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primaryHover'
                  readOnly
                  value={formatPrice(totalPrice)}
               />
               {errors.total_price && (
                  <ErrorForm>{errors.total_price.message}</ErrorForm>
               )}
            </div>
         </div>

         <Button fullWidth type='submit' disabled={isSubmitting}>
            <FaBook size={24} />
            {isSubmitting ? 'Booking...' : 'Book Now'}
         </Button>
      </form>
   );
}
