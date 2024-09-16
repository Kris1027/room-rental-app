import { Button } from '@/app/_components/button';
import { userCreateReservationAction } from '@/app/_lib/actions/reservations-action';
import { ReservationDatePicker } from '@/app/admin-dashboard/reservations/reservation-datepicker';
import { type roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';

export async function UserReservationForm({ room }: { room: roomsProps }) {
   const session = await auth();
   const userId = session?.user.userId;

   const total_price = room.regular_price - room.discount;

   return (
      <form
         action={userCreateReservationAction}
         className='flex flex-col justify-center bg-gray-100 w-full gap-2 p-10'
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
         <ReservationDatePicker />
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
               required
               className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primaryHover'
               defaultValue={1}
               max={room.max_capacity}
            />
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
            Book now
         </Button>
      </form>
   );
}
