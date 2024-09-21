import { Button } from '@/app/_components/button';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { StatusStyle } from '@/app/_utils/status-style';
import { TrueOrFalse } from '@/app/_utils/true-or-false';
import { DeleteButton } from '@/app/admin-dashboard/reservations/delete-button';
import { type reservationsProps } from '@/app/types/data-types';
import { Link } from 'next-view-transitions';
import { FaEdit } from 'react-icons/fa';

export function ReservationDetails({
   reservation,
}: {
   reservation: reservationsProps;
}) {
   const status = reservation.status;

   return (
      <tr
         className={`${
            status === 'old' ? 'bg-gray-200' : 'bg-white'
         } border-b hover:bg-gray-50 flex flex-col md:table-row`}
      >
         {[
            { label: 'ID', value: reservation.id },
            {
               label: 'Created At',
               value: formatDateTime(reservation.created_at),
            },
            { label: 'User ID', value: reservation.user_id },
            { label: 'Room ID', value: reservation.room_id },
            {
               label: 'Start date',
               value: formatDateTime(reservation.start_date),
            },
            {
               label: 'End date',
               value: formatDateTime(reservation.end_date),
            },
            {
               label: 'Nights',
               value: reservation.num_nights,
            },
            {
               label: 'Guests',
               value: reservation.num_guests,
            },
            {
               label: 'Total price',
               value: reservation.total_price,
            },
            {
               label: 'Status',
               value: (
                  <span className={StatusStyle(reservation.status)}>
                     {reservation.status}
                  </span>
               ),
            },
            {
               label: 'Paid',
               value: (
                  <span className={TrueOrFalse(reservation.is_paid)}>
                     {reservation.is_paid ? 'Yes' : 'No'}
                  </span>
               ),
            },
            {
               label: 'Actions',
               value: (
                  <span className='flex gap-1'>
                     <Button size='small'>
                        <Link
                           href={`/admin-dashboard/reservations/${reservation.id}`}
                           className='flex items-center gap-1'
                        >
                           <FaEdit />
                           <span>Edit</span>
                        </Link>
                     </Button>
                     <DeleteButton reservationId={reservation.id} />
                  </span>
               ),
            },
         ].map(({ label, value }, index) => (
            <td
               key={label + index}
               className='flex justify-between md:table-cell px-4 py-2'
            >
               <span className='font-bold md:hidden'>{label}:</span>
               {value}
            </td>
         ))}
      </tr>
   );
}
