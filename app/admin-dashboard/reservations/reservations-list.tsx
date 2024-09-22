import { ReservationDetails } from '@/app/admin-dashboard/reservations/reservation-details';
import { type reservationsProps } from '@/app/types/data-types';

export function ReservationsList({
   reservations,
}: {
   reservations: reservationsProps[];
}) {
   return (
      <tbody className='space-y-2'>
         {reservations &&
            reservations.map((reservation) => (
               <ReservationDetails
                  key={reservation.id}
                  reservation={reservation}
               />
            ))}
      </tbody>
   );
}
