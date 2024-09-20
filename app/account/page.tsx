import { Button } from '@/app/_components/button';
import { signOutAction } from '@/app/_lib/actions';
import { getUserById } from '@/app/_lib/users-api';
import type { usersProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { FiCalendar, FiCreditCard, FiLogOut, FiSettings } from 'react-icons/fi';
import { RiAdminLine } from 'react-icons/ri';
import { SignOutButton } from '../_components/sign-out-button';

export const metadata: Metadata = {
   title: 'Account',
};

export default async function Account() {
   const session = await auth();
   const userId = session?.user.userId;
   const user = (await getUserById(Number(userId))) as usersProps;
   const userImage = session?.user?.image as string;
   const userName = user?.full_name;

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='flex items-center mb-6 flex-grow'>
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

         {session?.user.isAdmin && (
            <div className='mb-6'>
               <Link
                  className='flex items-center text-white font-semibold justify-center gap-1 rounded-lg transition-colors outline-none bg-blue-500 hover:bg-blue-600 py-4 text-lg w-full'
                  href='/admin-dashboard'
               >
                  <RiAdminLine size={24} />
                  <span>Admin Dashboard</span>
               </Link>
            </div>
         )}

         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link
               className='flex items-center text-white font-semibold justify-center gap-1 rounded-lg transition-colors outline-none bg-indigo-500 hover:bg-indigo-600 py-4 text-lg'
               href='/account/settings'
            >
               <FiSettings size={24} />
               <span>Settings</span>
            </Link>
            <Link
               className='flex items-center text-white font-semibold justify-center gap-1 rounded-lg transition-colors outline-none bg-green-500 hover:bg-green-600 py-4 text-lg'
               href='/account/reservations'
            >
               <FiCalendar size={24} />
               <span>Reservations</span>
            </Link>
            <Link
               className='flex items-center text-white font-semibold justify-center gap-1 rounded-lg transition-colors outline-none bg-yellow-500 hover:bg-yellow-600 py-4 text-lg'
               href='/account/reservations'
            >
               <FiCreditCard size={24} />
               <span>Payments</span>
            </Link>
            <SignOutButton />
         </div>
      </main>
   );
}
