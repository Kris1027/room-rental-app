'use client';

import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { userCreateReservationAction } from '@/app/_lib/actions/reservations-action';
import { createReservationSchema } from '@/app/_schemas/reservations-zod';
import { formatPrice } from '@/app/_utils/format-price';
import type { roomsProps } from '@/app/types/data-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { FaBook, FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import { z } from 'zod';

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
   defaultEndDate.setDate(defaultEndDate.getDate() + 2);

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
         num_nights: 2,
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
      } catch (error) {
         console.error('Error creating reservation:', error);
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className='bg-white shadow-lg rounded-lg p-6 space-y-6'
      >
         <input
            type='hidden'
            {...register('user_id', { valueAsNumber: true })}
         />
         <input
            type='hidden'
            {...register('room_id', { valueAsNumber: true })}
         />

         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
               <label
                  htmlFor='start_date'
                  className='block text-sm font-medium text-gray-700'
               >
                  Check-in Date
               </label>
               <div className='relative'>
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
                           className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
                        />
                     )}
                  />
                  <FaCalendarAlt className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
               </div>
               {errors.start_date && (
                  <p className='mt-1 text-sm text-red-600'>
                     {errors.start_date.message}
                  </p>
               )}
            </div>

            <div className='space-y-2'>
               <label
                  htmlFor='end_date'
                  className='block text-sm font-medium text-gray-700'
               >
                  Check-out Date
               </label>
               <div className='relative'>
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
                           className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
                        />
                     )}
                  />
                  <FaCalendarAlt className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
               </div>
               {errors.end_date && (
                  <p className='mt-1 text-sm text-red-600'>
                     {errors.end_date.message}
                  </p>
               )}
            </div>
         </div>

         <div className='space-y-2'>
            <label
               htmlFor='num_guests'
               className='block text-sm font-medium text-gray-700'
            >
               Number of Guests
            </label>
            <div className='relative'>
               <select
                  {...register('num_guests', { valueAsNumber: true })}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary appearance-none'
               >
                  {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
                     (num) => (
                        <option key={num} value={num}>
                           {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                     )
                  )}
               </select>
               <FaUsers className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>
            {errors.num_guests && (
               <p className='mt-1 text-sm text-red-600'>
                  {errors.num_guests.message}
               </p>
            )}
         </div>

         <div className='space-y-2'>
            <label
               htmlFor='total_price'
               className='block text-sm font-medium text-gray-700'
            >
               Total Price
            </label>
            <div className='relative'>
               <input
                  {...register('total_price', { valueAsNumber: true })}
                  className='px-3 py-2 outline-none w-full cursor-default text-3xl'
                  readOnly
                  value={formatPrice(totalPrice)}
               />
            </div>
            {errors.total_price && (
               <p className='mt-1 text-sm text-red-600'>
                  {errors.total_price.message}
               </p>
            )}
         </div>

         <Button fullWidth type='submit' disabled={isSubmitting}>
            <FaBook size={24} />
            {isSubmitting ? 'Booking...' : 'Book Now'}
         </Button>
      </form>
   );
}
