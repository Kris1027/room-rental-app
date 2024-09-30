import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { updateReservationAction } from '@/app/_lib/actions/reservations-action';
import { updateReservationSchema } from '@/app/_schemas/reservations-zod';
import { reservationsProps, roomsProps } from '@/app/types/data-types';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { z } from 'zod';

type FormFields = z.infer<typeof updateReservationSchema>;

export function UpdateReservationForm({
   setIsEditing,
   reservation,
   rooms,
}: {
   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
   reservation: reservationsProps;
   rooms: roomsProps[];
}) {
   const [selectedRoom, setSelectedRoom] = useState<roomsProps | null>(null);
   const [maxCapacity, setMaxCapacity] = useState<number>(1);

   const {
      control,
      register,
      handleSubmit,
      watch,
      setValue,
      setError,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(updateReservationSchema),
      defaultValues: {
         id: reservation.id,
         created_at: new Date(reservation.created_at),
         user_id: reservation.user_id,
         room_id: reservation.room_id,
         start_date: new Date(reservation.start_date),
         end_date: new Date(reservation.end_date),
         num_nights: reservation.num_nights,
         num_guests: reservation.num_guests,
         total_price: reservation.total_price,
         status: reservation.status,
         is_paid: reservation.is_paid ? 'Yes' : 'No',
      },
   });

   const startDate = watch('start_date');
   const endDate = watch('end_date');
   const numGuests = watch('num_guests');
   const totalPrice = watch('total_price');

   const calculatePrice = useCallback(() => {
      if (startDate && endDate && selectedRoom) {
         const nights = Math.ceil(
            (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
         );
         setValue('num_nights', nights);

         const price =
            nights * (selectedRoom.regular_price - selectedRoom.discount);
         setValue('total_price', price);
      }
   }, [startDate, endDate, selectedRoom, setValue]);

   useEffect(() => {
      calculatePrice();
   }, [calculatePrice, numGuests]);

   useEffect(() => {
      if (selectedRoom) {
         setMaxCapacity(selectedRoom.max_capacity);
         setValue('num_guests', Math.min(numGuests, selectedRoom.max_capacity));
      }
   }, [selectedRoom, setValue, numGuests]);

   useEffect(() => {
      const room = rooms.find((r) => r.id === reservation.room_id);
      setSelectedRoom(room || null);
   }, [reservation.room_id, rooms]);

   const generateGuestOptions = () => {
      return Array.from({ length: maxCapacity }, (_, i) => i + 1);
   };

   const formatPrice = (price: number) => {
      return `$${price.toFixed(2)}`;
   };

   const handleCancel = () => {
      setIsEditing(false);
   };

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
         await updateReservationAction(formData);
         setIsEditing(false);
      } catch (error) {
         console.error('Error updating reservation:', error);
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
         className='max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden p-4 sm:p-6'
      >
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='id'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  ID
               </label>
               <div className='w-full sm:w-2/3'>
                  <input
                     {...register('id')}
                     readOnly
                     id='id'
                     className='mt-1 px-3 py-2 outline-none cursor-default text-xl w-full'
                  />
                  {errors.id && <ErrorForm>{errors.id.message}</ErrorForm>}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='created_at'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Created At
               </label>
               <div className='w-full sm:w-2/3'>
                  <Controller
                     name='created_at'
                     control={control}
                     render={({ field }) => (
                        <DatePicker
                           onChange={(date) => field.onChange(date)}
                           selected={field.value}
                           dateFormat='yyyy-MM-dd HH:mm'
                           showTimeSelect
                           timeFormat='HH:mm'
                           timeIntervals={15}
                           className='mt-1 px-3 py-2 outline-none cursor-default text-xl w-full'
                           readOnly
                        />
                     )}
                  />
                  {errors.created_at && (
                     <ErrorForm>{errors.created_at.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='user_id'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  User ID
               </label>
               <div className='w-full sm:w-2/3'>
                  <input
                     {...register('user_id')}
                     readOnly
                     id='user_id'
                     className='mt-1 px-3 py-2 outline-none cursor-default text-xl w-full'
                  />
                  {errors.user_id && (
                     <ErrorForm>{errors.user_id.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='room_id'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Room ID
               </label>
               <div className='w-full sm:w-2/3'>
                  <select
                     {...register('room_id', {
                        valueAsNumber: true,
                        onChange: (e) => {
                           const room = rooms.find(
                              (r) => r.id === Number(e.target.value)
                           );
                           setSelectedRoom(room || null);
                        },
                     })}
                     className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none w-full'
                     id='room_id'
                  >
                     {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                           {room.name} - ${room.regular_price - room.discount}
                           /night
                        </option>
                     ))}
                  </select>
                  {errors.room_id && (
                     <ErrorForm>{errors.room_id.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='start_date'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Start Date
               </label>
               <div className='w-full sm:w-2/3'>
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
                           className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none w-full'
                        />
                     )}
                  />
                  {errors.start_date && (
                     <ErrorForm>{errors.start_date.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='end_date'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  End Date
               </label>
               <div className='w-full sm:w-2/3'>
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
                           className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none w-full'
                        />
                     )}
                  />
                  {errors.end_date && (
                     <ErrorForm>{errors.end_date.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='num_nights'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Nights
               </label>
               <div className='w-full sm:w-2/3'>
                  <input
                     {...register('num_nights')}
                     id='num_nights'
                     className='mt-1 px-3 py-2 outline-none cursor-default text-xl w-full'
                     readOnly
                  />
                  {errors.num_nights && (
                     <ErrorForm>{errors.num_nights.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='num_guests'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Guests
               </label>
               <div className='w-full sm:w-2/3'>
                  <select
                     {...register('num_guests', { valueAsNumber: true })}
                     className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none w-full'
                     id='num_guests'
                  >
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
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='total_price'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Total Price
               </label>
               <div className='w-full sm:w-2/3'>
                  <input
                     {...register('total_price')}
                     id='total_price'
                     className='mt-1 px-3 py-2 outline-none cursor-default text-3xl w-full'
                     readOnly
                     value={formatPrice(totalPrice)}
                  />
                  {errors.total_price && (
                     <ErrorForm>{errors.total_price.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='status'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Status
               </label>
               <div className='w-full sm:w-2/3'>
                  <select
                     {...register('status')}
                     id='status'
                     className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none w-full'
                  >
                     <option value='confirmed'>Confirmed</option>
                     <option value='unconfirmed'>Unconfirmed</option>
                     <option value='canceled'>Canceled</option>
                     <option value='old'>Old</option>
                  </select>
                  {errors.status && (
                     <ErrorForm>{errors.status.message}</ErrorForm>
                  )}
               </div>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='is_paid'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Is Paid
               </label>
               <div className='w-full sm:w-2/3'>
                  <select
                     {...register('is_paid')}
                     id='is_paid'
                     className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none w-full'
                  >
                     <option value='Yes'>Yes</option>
                     <option value='No'>No</option>
                  </select>
                  {errors.is_paid && (
                     <ErrorForm>{errors.is_paid.message}</ErrorForm>
                  )}
               </div>
            </div>
         </div>
         <div className='mt-6 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3'>
            <Button
               variant='secondary'
               size='small'
               onClick={handleCancel}
               className='w-full sm:w-auto'
            >
               <FaTimes className='mr-2' />
               <span>Cancel</span>
            </Button>
            <Button
               type='submit'
               variant='success'
               size='small'
               disabled={isSubmitting}
               className='w-full sm:w-auto'
            >
               <GrUpdate className='mr-2' />
               {isSubmitting ? 'Updating...' : 'Update'}
            </Button>
         </div>
         {errors.root && <ErrorForm>{errors.root.message}</ErrorForm>}
      </form>
   );
}
