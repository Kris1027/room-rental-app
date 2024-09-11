'use client';

import { Button } from '@/app/_components/button';
import { adminCreateReservationAction } from '@/app/_lib/actions/reservations-action';
import { ReservationDatePicker } from '@/app/admin-dashboard/reservations/reservation-datepicker';
import { useReservation } from '@/app/contexts/reservation-date-context';
import { type roomsProps, type usersProps } from '@/app/types/data-types';
import { useState, useEffect } from 'react';

export function ReservationForm({
   users,
   rooms,
}: {
   users: usersProps[];
   rooms: roomsProps[];
}) {
   const { startDate, endDate } = useReservation();
   const [message, setMessage] = useState<string | null>(null);
   const [selectedRoom, setSelectedRoom] = useState<roomsProps | null>(null);
   const [totalPrice, setTotalPrice] = useState<number>(0);

   const formatDateForDatabase = (date: Date) => {
      return date.toISOString().slice(0, 19).replace('T', ' ') + '+00';
   };

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      formData.append('start_date', formatDateForDatabase(startDate));
      if (endDate) formData.append('end_date', formatDateForDatabase(endDate));
      formData.append('total_price', totalPrice.toString());

      const result = await adminCreateReservationAction(formData);
      if (result) {
         setMessage('Reservation created successfully!');
      } else {
         setMessage('Failed to create reservation. Please try again.');
      }
   };

   const numberOfNights =
      startDate && endDate
         ? Math.ceil(
              (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
           )
         : 0;

   const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const roomId = parseInt(event.target.value);
      const room = rooms.find((r) => r.id === roomId) || null;
      setSelectedRoom(room);
   };

   useEffect(() => {
      if (selectedRoom && numberOfNights > 0) {
         const pricePerNight =
            selectedRoom.regular_price - selectedRoom.discount;
         setTotalPrice(pricePerNight * numberOfNights);
      } else {
         setTotalPrice(0);
      }
   }, [selectedRoom, numberOfNights]);

   return (
      <form
         onSubmit={handleSubmit}
         className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'
      >
         <div className='flex flex-col'>
            <label
               htmlFor='user_id'
               className='text-sm font-medium text-gray-700'
            >
               User ID
            </label>
            <select
               className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'
               name='user_id'
               id='user_id'
               required
            >
               <option value=''>Select a user</option>
               {users.map((user) => (
                  <option key={user.id} value={user.id}>
                     {user.id}: {user.full_name}
                  </option>
               ))}
            </select>
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='room_id'
               className='text-sm font-medium text-gray-700'
            >
               Room ID
            </label>
            <select
               className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'
               name='room_id'
               id='room_id'
               required
               onChange={handleRoomChange}
            >
               <option value=''>Select a room</option>
               {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                     {room.id}: {room.name}
                  </option>
               ))}
            </select>
         </div>
         <ReservationDatePicker />
         <div className='flex flex-col'>
            <label
               htmlFor='num_nights'
               className='text-sm font-medium text-gray-700'
            >
               Number of Nights
            </label>
            <input
               className='px-3 py-2 border rounded-md bg-gray-100 outline-none'
               type='number'
               name='num_nights'
               id='num_nights'
               value={numberOfNights}
               readOnly
            />
         </div>
         <div>
            <label
               htmlFor='num_guests'
               className='text-sm font-medium text-gray-700'
            >
               Number of Guests
            </label>
            <input
               className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'
               type='number'
               name='num_guests'
               id='num_guests'
               required
               min={1}
               defaultValue={1}
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='total_price'
               className='text-sm font-medium text-gray-700'
            >
               Total Price
            </label>
            <input
               className='px-3 py-2 border rounded-md bg-gray-100 outline-none'
               type='number'
               name='total_price'
               id='total_price'
               value={totalPrice.toFixed(2)}
               readOnly
            />
         </div>
         {message && (
            <div
               className={
                  message.includes('successfully')
                     ? 'text-green-600'
                     : 'text-red-600'
               }
            >
               {message}
            </div>
         )}
         <Button type='submit' fullWidth>
            Add New Reservation
         </Button>
      </form>
   );
}
