'use client';

import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { createReservationAction } from '@/app/_lib/actions/reservations-action';
import { createReservationSchema } from '@/app/_schemas/reservations-zod';
import type { roomsProps, usersProps } from '@/app/types/data-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type FormFields = z.infer<typeof createReservationSchema>;

export function CreateReservationForm({
   users,
   rooms,
   onCancel,
}: {
   users: usersProps[];
   rooms: roomsProps[];
   onCancel: () => void;
}) {
   const [selectedRoom, setSelectedRoom] = useState<roomsProps | null>(null);
   const [formattedTotalPrice, setFormattedTotalPrice] = useState(0);
   const [maxCapacity, setMaxCapacity] = useState<number>(1);

   const defaultEndDate = new Date();
   defaultEndDate.setDate(defaultEndDate.getDate() + 2);

   const generateGuestOptions = () => {
      return Array.from({ length: maxCapacity }, (_, i) => i + 1);
   };

   const {
      control,
      register,
      handleSubmit,
      reset,
      setError,
      watch,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(createReservationSchema),
      defaultValues: {
         start_date: new Date(),
         end_date: defaultEndDate,
         num_nights: 2,
         num_guests: 1,
         total_price: 0,
      },
   });

   const startDate = watch('start_date');
   const endDate = watch('end_date');
   const numGuests = watch('num_guests');

   useEffect(() => {
      if (startDate && endDate) {
         const nights = Math.ceil(
            (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
         );
         setValue('num_nights', nights);

         if (selectedRoom) {
            const price =
               nights * (selectedRoom.regular_price - selectedRoom.discount);
            setValue('total_price', price);
            setFormattedTotalPrice(price);
         }
      }
   }, [startDate, endDate, numGuests, selectedRoom, setValue]);

   useEffect(() => {
      if (selectedRoom) {
         setMaxCapacity(selectedRoom.max_capacity);
         setValue('num_guests', 1);
      }
   }, [selectedRoom, setValue]);

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         if (value instanceof Date) {
            formData.append(key, value.toISOString());
         } else {
            formData.append(key, value.toString());
         }
      });

      try {
         const result = await createReservationAction(formData);
         if (result === true) {
            reset();
            onCancel();
         } else {
            setError('root', {
               type: 'manual',
               message:
                  'Reservation already exists or there was an error creating the reservation.',
            });
         }
      } catch (error) {
         console.error('Error creating reservation:', error);
         setError('root', {
            type: 'manual',
            message:
               error instanceof Error
                  ? error.message
                  : 'An unexpected error occurred. Please try again.',
         });
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4 mb-4'
      >
         <div className='flex flex-col'>
            <label
               htmlFor='user_id'
               className='text-sm font-medium text-gray-700'
            >
               User
            </label>
            <select
               {...register('user_id', { required: true, valueAsNumber: true })}
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
               id='user_id'
            >
               <option value=''>Select a user</option>
               {users.map((user) => (
                  <option key={user.id} value={user.id}>
                     ID: {user.id} Name: {user.full_name}
                  </option>
               ))}
            </select>
            {errors.user_id && <ErrorForm>{errors.user_id.message}</ErrorForm>}
         </div>

         <div className='flex flex-col'>
            <label
               htmlFor='room_id'
               className='text-sm font-medium text-gray-700'
            >
               Room
            </label>
            <select
               {...register('room_id', {
                  required: true,
                  valueAsNumber: true,
                  onChange: (e) => {
                     const room = rooms.find(
                        (r) => r.id === Number(e.target.value)
                     );
                     setSelectedRoom(room || null);
                  },
               })}
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
               id='room_id'
            >
               <option value=''>Select a room</option>
               {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                     {room.name} - ${room.regular_price - room.discount}/night
                  </option>
               ))}
            </select>
            {errors.room_id && <ErrorForm>{errors.room_id.message}</ErrorForm>}
         </div>

         <div className='flex flex-col'>
            <label
               htmlFor='num_guests'
               className='text-sm font-medium text-gray-700'
            >
               Number of Guests
            </label>
            <select
               {...register('num_guests', {
                  required: true,
                  valueAsNumber: true,
               })}
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
               id='num_guests'
            >
               <option value=''>Select number of Guests</option>
               {generateGuestOptions().map((num) => (
                  <option key={num} value={num}>
                     {num}
                  </option>
               ))}
            </select>
            {errors.num_guests && (
               <ErrorForm>{errors.num_guests.message}</ErrorForm>
            )}
         </div>

         <div className='flex flex-col'>
            <label
               htmlFor='start_date'
               className='text-sm font-medium text-gray-700'
            >
               Start date
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
                           newEndDate.setDate(newEndDate.getDate() + 2);
                           setValue('end_date', newEndDate);
                        }
                     }}
                     selected={field.value}
                     selectsStart
                     startDate={field.value}
                     endDate={watch('end_date')}
                     minDate={new Date()}
                     className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                     id='start_date'
                  />
               )}
            />
            {errors.start_date && (
               <ErrorForm>{errors.start_date.message}</ErrorForm>
            )}
         </div>

         <div className='flex flex-col'>
            <label
               htmlFor='end_date'
               className='text-sm font-medium text-gray-700'
            >
               End date
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
                     className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                     id='end_date'
                  />
               )}
            />
            {errors.end_date && (
               <ErrorForm>{errors.end_date.message}</ErrorForm>
            )}
         </div>

         <div className='flex flex-col'>
            <label
               htmlFor='num_nights'
               className='text-sm font-medium text-gray-700'
            >
               Number of Nights
            </label>
            <input
               {...register('num_nights', { valueAsNumber: true })}
               className='mt-1 px-3 py-2 outline-none w-full cursor-default text-xl'
               id='num_nights'
               readOnly
            />
            {errors.num_nights && (
               <ErrorForm>{errors.num_nights.message}</ErrorForm>
            )}
         </div>

         <div className='flex flex-col'>
            <label
               htmlFor='total_price'
               className='text-sm font-medium text-gray-700'
            >
               Total Price
            </label>
            <input
               {...register('total_price', { valueAsNumber: true })}
               className='mt-1 px-3 py-2 outline-none w-full cursor-default text-3xl'
               id='total_price'
               readOnly
               value={`$${formattedTotalPrice.toFixed(2)}`}
            />
            {errors.total_price && (
               <ErrorForm>{errors.total_price.message}</ErrorForm>
            )}
         </div>

         <Button type='submit' disabled={isSubmitting} fullWidth>
            {isSubmitting ? 'Submitting...' : 'Add New Reservation'}
         </Button>
         <Button variant='danger' fullWidth onClick={onCancel}>
            Cancel
         </Button>
         {errors.root && <ErrorForm>{errors.root.message}</ErrorForm>}
      </form>
   );
}
