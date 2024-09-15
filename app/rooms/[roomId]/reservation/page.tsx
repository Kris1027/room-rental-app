import { Button } from '@/app/_components/button';
import { userCreateReservationAction } from '@/app/_lib/actions/reservations-action';
import { getRoom } from '@/app/_lib/rooms-api';
import { ReservationDatePicker } from '@/app/admin-dashboard/reservations/reservation-datepicker';
import { type roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';

export default async function UserReservationForm({
   params,
}: {
   params: { roomId: string };
}) {
   const roomId = Number(params.roomId);
   const session = await auth();
   const userId = session?.user.userId;

   const room = (await getRoom(roomId)) as roomsProps;

   const totalPrice = room.regular_price - room.discount;

   return (
      <form
         action={userCreateReservationAction}
         className='flex flex-col justify-center bg-gray-100 mx-auto p-10'
      >
         <input
            type='number'
            name='room_id'
            id='room_id'
            required
            className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            readOnly
            defaultValue={roomId}
            hidden
         />
         <input
            type='number'
            name='user_id'
            id='user_id'
            required
            className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
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
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
               defaultValue={1}
               max={room.max_capacity}
            />
         </div>
         <input
            type='number'
            name='total_price'
            id='total_price'
            required
            className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            defaultValue={totalPrice}
            readOnly
            hidden
         />
         <Button fullWidth type='submit'>
            Submit
         </Button>
      </form>
   );
}
