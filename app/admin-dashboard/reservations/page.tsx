import { getReservations } from '@/app/_lib/reservations-api';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import { ReservationsManagement } from '@/app/admin-dashboard/reservations/reservations-management';
import {
   type reservationsProps,
   type roomsProps,
   type usersProps,
} from '@/app/types/data-types';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function AdminReservations() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const reservations = (await getReservations()) as reservationsProps[];
   const users = (await getUsers()) as usersProps[];
   const rooms = (await getRooms()) as roomsProps[];

   return (
      <>
         <h1 className='text-3xl font-bold text-gray-800'>User Reservations</h1>
         <ReservationsManagement
            reservations={reservations}
            users={users}
            rooms={rooms}
         />
      </>
   );
}
