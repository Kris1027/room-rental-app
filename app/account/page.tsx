import React from 'react';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import { FiSettings, FiCalendar, FiLogOut, FiCreditCard } from 'react-icons/fi';

export default async function UserDashboard() {
   const session = await auth();
   const userImage = session?.user?.image as string;
   const userName = session?.user?.name as string;

   return (
      <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
         <div className='flex items-center mb-6'>
            <Image
               src={userImage}
               alt={userName}
               width={100}
               height={100}
               className='rounded-full mr-4'
               referrerPolicy='no-referrer'
            />
            <div>
               <h2 className='text-2xl font-bold'>{userName}</h2>
               <p className='text-gray-600'>User Account Panel</p>
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link
               href='#'
               className='flex items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors'
            >
               <FiSettings className='mr-3 text-xl' />
               <span>Settings</span>
            </Link>
            <Link
               href='#'
               className='flex items-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors'
            >
               <FiCalendar className='mr-3 text-xl' />
               <span>Reservations</span>
            </Link>
            <Link
               href='#'
               className='flex items-center p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors'
            >
               <FiCreditCard className='mr-3 text-xl' />
               <span>Payments</span>
            </Link>
            <Link
               href='#'
               className='flex items-center p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors'
            >
               <FiLogOut className='mr-3 text-xl' />
               <span>Logout</span>
            </Link>
         </div>
      </div>
   );
}
