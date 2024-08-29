import { Button } from '@/app/_components/button';
import { GetReservations } from '@/app/_lib/reservations-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { reservationsProps } from '@/app/types/data-types';

export const revalidate = 0;

export default async function AdminReservations() {
   const reservations = (await GetReservations()) as reservationsProps[];

   return (
      <div className='shadow-md sm:rounded-lg'>
         <div className='p-4'>
            <Button>Add New Reservation</Button>
         </div>
         <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
               <thead className='text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group'>
                  <tr>
                     <th scope='col' className='px-4 py-2'>
                        ID
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Created At
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        User ID
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Room ID
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Start date
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        End date
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Nights
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Guests
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Total price
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Status
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Paid
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {reservations &&
                     reservations.map((reservation) => (
                        <tr
                           key={reservation.id}
                           className='bg-white border-b hover:bg-gray-50 flex flex-col md:table-row'
                        >
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>ID:</span>{' '}
                              {reservation.id}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Created At:
                              </span>{' '}
                              {formatDateTime(reservation.created_at)}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 User ID:
                              </span>{' '}
                              {reservation.user_id}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Room ID:
                              </span>{' '}
                              {reservation.room_id}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Start date:
                              </span>{' '}
                              {formatDateTime(reservation.start_date)}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 End date:
                              </span>{' '}
                              {formatDateTime(reservation.end_date)}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Nights:
                              </span>{' '}
                              {reservation.num_nights}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Guests:
                              </span>{' '}
                              {reservation.num_guests}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Total price:
                              </span>{' '}
                              {reservation.total_price}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Status:
                              </span>{' '}
                              {reservation.status}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>Paid:</span>
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
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Actions:
                              </span>
                              <div className='space-y-1 space-x-1 text-center'>
                                 <Button size='small'>Edit</Button>
                                 <Button size='small' type='submit'>
                                    Delete
                                 </Button>
                              </div>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
