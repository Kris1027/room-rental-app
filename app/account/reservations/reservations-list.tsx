import { getReservationsByUserId } from '@/app/_lib/reservations-api';
import { ReservationCard } from '@/app/account/reservations/reservation-card';
import { ReservationsNotFound } from '@/app/account/reservations/reservations-not-found';
import type { reservationsProps } from '@/app/types/data-types';
import { auth } from '@/auth';

export async function ReservationsList({ filter }: { filter: string }) {
   const session = await auth();
   const userId = session?.user?.userId;

   if (!userId) {
      return (
         <div className='flex justify-center items-center h-full'>
            <ReservationsNotFound />
         </div>
      );
   }

   const reservations = (await getReservationsByUserId(
      Number(userId)
   )) as reservationsProps[];

   if (!reservations || reservations.length === 0) {
      return (
         <div className='flex justify-center items-center h-full'>
            <ReservationsNotFound />
         </div>
      );
   }

   let displayedReservations = reservations;

   if (filter === 'no') {
      displayedReservations = reservations.filter(
         (reservation) => reservation.status !== 'old'
      );
   }

   if (displayedReservations.length === 0) {
      return (
         <div className='flex justify-center items-center h-full'>
            <ReservationsNotFound />
         </div>
      );
   }

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
         {displayedReservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
         ))}
      </div>
   );
}
