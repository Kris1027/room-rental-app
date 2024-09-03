import { Button } from '@/app/_components/button';
import { getReservations } from '@/app/_lib/reservations-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { StatusStyle } from '@/app/_utils/status-style';
import { TrueOrFalse } from '@/app/_utils/true-or-false';
import { reservationsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function AdminReservations() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const reservations = (await getReservations()) as reservationsProps[];

   return (
      <div className='shadow-md sm:rounded-lg'>
         <div className='p-4'>
            <Button>Add New Reservation</Button>
         </div>
         <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
               <thead className='text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group'>
                  <tr>
                     {[
                        'ID',
                        'Created At',
                        'User ID',
                        'Room ID',
                        'Start date',
                        'End date',
                        'Nights',
                        'Guests',
                        'Total price',
                        'Status',
                        'Paid',
                        'Actions',
                     ].map((header) => (
                        <th key={header} scope='col' className='px-4 py-2'>
                           {header}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {reservations &&
                     reservations.map((reservation) => (
                        <tr
                           key={reservation.id}
                           className='bg-white border-b hover:bg-gray-50 flex flex-col md:table-row'
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
                                    <span
                                       className={StatusStyle(
                                          reservation.status
                                       )}
                                    >
                                       {reservation.status}
                                    </span>
                                 ),
                              },
                              {
                                 label: 'Paid',
                                 value: (
                                    <span
                                       className={TrueOrFalse(
                                          reservation.is_paid
                                       )}
                                    >
                                       {reservation.is_paid ? 'Yes' : 'No'}
                                    </span>
                                 ),
                              },
                              {
                                 label: 'Actions',
                                 value: (
                                    <span className='flex gap-1'>
                                       <Button size='small'>Edit</Button>
                                       <Button size='small'>Delete</Button>
                                    </span>
                                 ),
                              },
                           ].map(({ label, value }, index) => (
                              <td
                                 key={index}
                                 className='flex justify-between md:table-cell px-4 py-2'
                              >
                                 <span className='font-bold md:hidden'>
                                    {label}:
                                 </span>
                                 {value}
                              </td>
                           ))}
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
