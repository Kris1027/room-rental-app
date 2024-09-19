import React from 'react';
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
   FaClock,
   FaCheckCircle,
   FaTimesCircle,
} from 'react-icons/fa';
import { BackButton } from '@/app/_components/back-button';

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
      <div className='container mx-auto px-4 py-12 '>
         <BackButton />
         <h2 className='text-4xl font-bold mb-8 text-gray-800 text-center'>
            Your Reservations
         </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {reservations.map((reservation) => (
               <div
                  key={reservation.id}
                  className='bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105'
               >
                  <div className='bg-gradient-to-r from-secondary to-primary text-black px-6 py-4'>
                     <h2 className='text-2xl font-semibold'>
                        Reservation #{reservation.id}
                     </h2>
                     <p className='text-sm opacity-80'>
                        Created on {formatDateTime(reservation.created_at)}
                     </p>
                  </div>
                  <div className='p-6 space-y-4'>
                     <div className='flex items-center'>
                        <FaCalendarAlt className='w-5 h-5 mr-3 text-blue-500' />
                        <p className='text-gray-700'>
                           {formatDateTime(reservation.start_date)} -{' '}
                           {formatDateTime(reservation.end_date)}
                        </p>
                     </div>
                     <div className='flex items-center'>
                        <FaMoon className='w-5 h-5 mr-3 text-blue-500' />
                        <p className='text-gray-700'>
                           {reservation.num_nights} night
                           {reservation.num_nights > 1 ? 's' : ''}
                        </p>
                     </div>
                     <div className='flex items-center'>
                        <FaUsers className='w-5 h-5 mr-3 text-blue-500' />
                        <p className='text-gray-700'>
                           {reservation.num_guests} guest
                           {reservation.num_guests > 1 ? 's' : ''}
                        </p>
                     </div>
                     <div className='flex items-center'>
                        <FaDollarSign className='w-5 h-5 mr-3 text-blue-500' />
                        <p className='text-gray-700'>
                           Total: ${reservation.total_price.toFixed(2)}
                        </p>
                     </div>
                     <div className='flex items-center'>
                        <FaExclamationCircle className='w-5 h-5 mr-3 text-blue-500' />
                        <p className='text-gray-700'>
                           Status: {reservation.status}
                        </p>
                     </div>
                  </div>
                  <div className='bg-gray-100 px-6 py-4 flex justify-between items-center'>
                     <div className='flex items-center'>
                        <FaClock className='w-5 h-5 mr-2 text-gray-600' />
                        <p className='text-sm text-gray-600'>
                           {reservation.status === 'confirmed'
                              ? 'Confirmed'
                              : 'Pending'}
                        </p>
                     </div>
                     <div className='flex items-center'>
                        {reservation.is_paid ? (
                           <FaCheckCircle className='w-5 h-5 mr-2 text-green-500' />
                        ) : (
                           <FaTimesCircle className='w-5 h-5 mr-2 text-red-500' />
                        )}
                        <p
                           className={`text-sm font-semibold ${
                              reservation.is_paid
                                 ? 'text-green-500'
                                 : 'text-red-500'
                           }`}
                        >
                           {reservation.is_paid ? 'Paid' : 'Not Paid'}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className='mt-12'>
            <UserMessage
               userId={Number(userId)}
               userEmail={String(userEmail)}
            />
         </div>
      </div>
   );
}
