import { Button } from '@/app/_components/button';
import { GetReservations } from '@/app/_lib/reservations-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { reservationsProps } from '@/app/types/data-types';

export default async function AdminReservations() {
   const reservations = (await GetReservations()) as reservationsProps[];

   return (
      <div className='overflow-x-auto shadow-md sm:rounded-lg'>
         <div className='px-6 py-4'>
            <Button>Add New Reservation</Button>
         </div>
         <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
               <tr>
                  <th scope='col' className='px-6 py-3'>
                     ID
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Created At
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     User ID
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Room ID
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Start date
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     End date
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Number of Nights
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Number of Guests
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Total price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Status
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Paid
                  </th>
               </tr>
            </thead>
            <tbody>
               {reservations &&
                  reservations.map((reservation) => (
                     <tr
                        key={reservation.id}
                        className='bg-white border-b hover:bg-gray-50'
                     >
                        <td className='px-6 py-4'>{reservation.id}</td>
                        <td className='px-6 py-4'>
                           {formatDateTime(reservation.created_at)}
                        </td>
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                           {reservation.user_id}
                        </td>
                        <td className='px-6 py-4'>{reservation.room_id}</td>
                        <td className='px-6 py-4'>
                           {formatDateTime(reservation.start_date)}
                        </td>
                        <td className='px-6 py-4'>
                           {formatDateTime(reservation.end_date)}
                        </td>
                        <td className='px-6 py-4'>{reservation.num_nights}</td>
                        <td className='px-6 py-4'>{reservation.num_guests}</td>
                        <td className='px-6 py-4'>{reservation.total_price}</td>
                        <td className='px-6 py-4'>{reservation.status}</td>
                        <td className='px-6 py-4'>
                           <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                 reservation.is_paid
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                              }`}
                           >
                              {reservation.is_paid ? 'Yes' : 'No'}
                           </span>
                        </td>
                        <td className='space-x-1'>
                           <Button size='small'>Edit</Button>
                           <Button size='small' type='submit'>
                              Delete
                           </Button>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}
