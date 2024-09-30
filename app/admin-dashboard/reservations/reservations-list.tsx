import { ReservationDetails } from '@/app/admin-dashboard/reservations/reservation-details';
import type { reservationsProps, roomsProps } from '@/app/types/data-types';

export function ReservationsList({
   reservations,
   rooms,
}: {
   reservations: reservationsProps[];
   rooms: roomsProps[];
}) {
   return (
      <tbody>
         {reservations &&
            reservations.map((reservation) => (
               <ReservationDetails
                  key={reservation.id}
                  reservation={reservation}
                  rooms={rooms}
               />
            ))}
      </tbody>
   );
}
