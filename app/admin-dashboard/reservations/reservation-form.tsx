import { Button } from '@/app/_components/button';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import { ReservationDatePicker } from '@/app/admin-dashboard/reservations/reservation-datepicker';
import { type roomsProps, type usersProps } from '@/app/types/data-types';

export async function ReservationForm() {
   const users = (await getUsers()) as usersProps[];
   const rooms = (await getRooms()) as roomsProps[];

   return (
      <form className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'>
         <div className='flex flex-col'>
            <label
               htmlFor='user_id'
               className='text-sm font-medium text-gray-700'
            >
               User ID
            </label>
            <select className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'>
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
            <select className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'>
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
               Nights
            </label>
            <input
               type='number'
               name='num_nights'
               id='num_nights'
               placeholder='Nights'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='num_guests'
               className='text-sm font-medium text-gray-700'
            >
               Guests
            </label>
            <input
               type='number'
               name='num_guests'
               id='num_guests'
               placeholder='Guests'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='total_price'
               className='text-sm font-medium text-gray-700'
            >
               Total price
            </label>
            <input
               type='number'
               name='total_price'
               id='total_price'
               placeholder='Total price'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='status'
               className='mb-1 text-sm font-medium text-gray-700'
            >
               Status
            </label>
            <select
               className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'
               name='status'
               id='status'
            >
               <option value='true'>unconfirmed</option>
               <option value='false'>confirmed</option>
               <option value='false'>canceled</option>
            </select>
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='is_paid'
               className='mb-1 text-sm font-medium text-gray-700'
            >
               Paid
            </label>
            <select
               className='w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer'
               name='is_paid'
               id='is_paid'
            >
               <option value='true'>Yes</option>
               <option value='false'>No</option>
            </select>
         </div>
         <Button type='submit' fullWidth>
            Add New Reservation
         </Button>
      </form>
   );
}
