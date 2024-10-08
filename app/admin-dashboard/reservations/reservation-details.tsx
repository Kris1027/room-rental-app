import { Button } from '@/app/_components/button';
import { DeleteButton } from '@/app/_components/delete-button';
import { statusStyle } from '@/app/_components/status-style';
import { deleteReservationAction } from '@/app/_lib/actions/reservations-action';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { trueOrFalse } from '@/app/_utils/true-or-false';
import { UpdateReservationForm } from '@/app/admin-dashboard/reservations/update-reservation-form';
import type { reservationsProps, roomsProps } from '@/app/types/data-types';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

export function ReservationDetails({
   reservation,
   rooms,
}: {
   reservation: reservationsProps;
   rooms: roomsProps[];
}) {
   const [isEditing, setIsEditing] = useState<boolean>(false);
   const status = reservation.status;

   const toggleEditMode = () => setIsEditing(!isEditing);

   const formatPrice = (price: number) => {
      return `$${price.toFixed(2)}`;
   };

   return (
      <tr
         className={`${
            status === 'old' && 'bg-gray-300'
         } bg-gray-50 border-b flex flex-col md:table-row p-2 odd:bg-white`}
      >
         {isEditing ? (
            <td colSpan={12} className='p-4'>
               <UpdateReservationForm
                  setIsEditing={setIsEditing}
                  reservation={reservation}
                  rooms={rooms}
               />
            </td>
         ) : (
            <>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>ID</label>
                  <span className='text-base'>{reservation.id}</span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Created At</label>
                  <span>{formatDateTime(reservation.created_at)}</span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>User ID</label>
                  <span className='text-base font-bold'>
                     {reservation.user_id}
                  </span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Room ID</label>
                  <span className='text-base font-bold'>
                     {reservation.room_id}
                  </span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Start Date</label>
                  <span>{formatDateTime(reservation.start_date)}</span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>End Date</label>
                  <span>{formatDateTime(reservation.end_date)}</span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Nights</label>
                  <span className='text-base'>{reservation.num_nights}</span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Guests</label>
                  <span className='text-base'>{reservation.num_guests}</span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Total Price</label>
                  <span className='text-base font-bold'>
                     {formatPrice(reservation.total_price)}
                  </span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Status</label>
                  <span className={statusStyle(reservation.status)}>
                     {reservation.status}
                  </span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Paid</label>
                  <span className={trueOrFalse(reservation.is_paid)}>
                     {reservation.is_paid ? 'Yes' : 'No'}
                  </span>
               </td>

               <td className='flex p-1 justify-between md:table-cell'>
                  <div className='flex flex-col gap-2 p-2 w-full'>
                     <Button size='small' onClick={toggleEditMode} fullWidth>
                        <FaEdit />
                        <span>Edit</span>
                     </Button>
                     <DeleteButton
                        id={reservation.id}
                        onDelete={deleteReservationAction}
                        buttonText='Delete'
                        loadingText='Deleting...'
                     />
                  </div>
               </td>
            </>
         )}
      </tr>
   );
}
