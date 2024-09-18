import { Button } from '@/app/_components/button';
import { userCreateReservationAction } from '@/app/_lib/actions/reservations-action';
import { ReservationDatePicker } from '@/app/admin-dashboard/reservations/reservation-datepicker';
import { type roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { FaUsers, FaCalendarAlt, FaBook } from 'react-icons/fa';

export async function UserReservationForm({ room }: { room: roomsProps }) {
   const session = await auth();
   const userId = session?.user.userId;

   const total_price = room.regular_price - room.discount;

   const guestOptions = Array.from(
      { length: room.max_capacity },
      (_, i) => i + 1
   );

   return (
      <form
         action={userCreateReservationAction}
         className='flex flex-col justify-center gap-4'
      >
         <input
            type='number'
            name='room_id'
            id='room_id'
            required
            readOnly
            defaultValue={room.id}
            hidden
         />
         <input
            type='number'
            name='user_id'
            id='user_id'
            required
            readOnly
            defaultValue={userId}
            hidden
         />
         <div className='flex items-center space-x-3'>
            <FaCalendarAlt size={24} />
            <div className='flex-grow'>
               <label
                  htmlFor='reservation_date'
                  className='text-sm font-semibold text-gray-600'
               >
                  Select Reservation Date
               </label>
               <ReservationDatePicker />
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
                  name='num_guests'
                  id='num_guests'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primaryHover'
                  defaultValue={1}
               >
                  {guestOptions.map((num) => (
                     <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                     </option>
                  ))}
               </select>
            </div>
         </div>
         <input
            type='number'
            name='total_price'
            id='total_price'
            required
            defaultValue={total_price}
            readOnly
            hidden
         />
         <Button fullWidth type='submit'>
            <FaBook size={24} />
            Book Now
         </Button>
      </form>
   );
}
