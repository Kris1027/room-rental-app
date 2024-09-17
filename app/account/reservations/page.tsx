import { getReservationsByUserId } from '@/app/_lib/reservations-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { UserMessage } from '@/app/account/reservations/user-message';
import { reservationsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import {
   FaCalendarAlt,
   FaDollarSign,
   FaExclamationCircle,
   FaMoon,
   FaUsers,
} from 'react-icons/fa';

export const metadata: Metadata = {
   title: 'Reservations',
};

export default async function UserReservations() {
   const session = await auth();
   const userId = session?.user?.userId;
   const userEmail = session?.user?.email;

   const reservations = (await getReservationsByUserId(
      Number(userId)
   )) as reservationsProps[];

   return (
      <div className='container mx-auto px-4 py-8'>
         <h1 className='text-3xl font-bold mb-6 text-gray-800'>
            Your Reservations
         </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {reservations.map((reservation) => (
               <div
                  key={reservation.id}
                  className='bg-white rounded-lg shadow-md overflow-hidden'
               >
                  <div className='bg-gradient-to-r from-primaryHover to-dangerHover text-black px-4 py-2'>
                     <h2 className='text-xl font-semibold'>
                        Reservation #{reservation.id}
                     </h2>
                  </div>
                  <div className='p-4'>
                     <p className='text-sm text-gray-600 mb-2'>
                        Created on {formatDateTime(reservation.created_at)}
                     </p>
                     <div className='flex items-center mb-2'>
                        <FaCalendarAlt className='w-5 h-5 mr-2 text-primaryHover' />
                        <p>
                           {formatDateTime(reservation.start_date)} -{' '}
                           {formatDateTime(reservation.end_date)}
                        </p>
                     </div>
                     <div className='flex items-center mb-2'>
                        <FaMoon className='w-5 h-5 mr-2 text-primaryHover' />
                        <p>
                           {reservation.num_nights} night
                           {reservation.num_nights > 1 ? 's' : ''}
                        </p>
                     </div>
                     <div className='flex items-center mb-2'>
                        <FaUsers className='w-5 h-5 mr-2 text-primaryHover' />
                        <p>
                           {reservation.num_guests} guest
                           {reservation.num_guests > 1 ? 's' : ''}
                        </p>
                     </div>
                     <div className='flex items-center mb-2'>
                        <FaDollarSign className='w-5 h-5 mr-2 text-primaryHover' />
                        <p>Total: ${reservation.total_price.toFixed(2)}</p>
                     </div>
                     <div className='flex items-center'>
                        <FaExclamationCircle className='w-5 h-5 mr-2 text-primaryHover' />
                        <p>Status: {reservation.status}</p>
                     </div>
                  </div>
                  <div className='bg-gradient-to-r from-primaryHover to-dangerHover px-4 py-3 mt-4'>
                     <p
                        className={`text-sm font-semibold ${
                           reservation.is_paid
                              ? 'text-green-600'
                              : 'text-red-600'
                        }`}
                     >
                        {reservation.is_paid ? 'Paid' : 'Not Paid'}
                     </p>
                  </div>
               </div>
            ))}
         </div>
         <UserMessage userId={Number(userId)} userEmail={String(userEmail)} />
      </div>
   );
}
