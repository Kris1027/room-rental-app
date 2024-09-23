import { getReservationsByUserId } from '@/app/_lib/reservations-api';
import { ReservationCard } from '@/app/account/reservations/reservation-card';
import { ReservationsNotFound } from '@/app/account/reservations/reservations-not-found';
import type { reservationsProps } from '@/app/types/data-types';
import { auth } from '@/auth';

export async function ReservationsList() {
   const session = await auth();
   const userId = session?.user?.userId;

   const reservations = (await getReservationsByUserId(
      Number(userId)
   )) as reservationsProps[];

   if (!reservations) {
      <div className='flex justify-center items-center'>
         <ReservationsNotFound />
      </div>;
   }

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
         {reservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
         ))}
      </div>
   );
}
