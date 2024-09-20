import { signOutAction } from '@/app/_lib/actions';
import { getUserById } from '@/app/_lib/users-api';
import type { usersProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { FiCalendar, FiCreditCard, FiSettings } from 'react-icons/fi';
import { RiAdminLine } from 'react-icons/ri';

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
      <main className='flex-1 w-full max-w-7xl mx-auto p-4 md:p-8'>
         <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
            <div className='flex flex-col md:flex-row items-center mb-6'>
               <Image
                  src={userImage}
                  alt={userName}
                  width={120}
                  height={120}
                  className='rounded-full mr-0 md:mr-6 mb-4 md:mb-0 border-4 border-indigo-200'
                  referrerPolicy='no-referrer'
               />
               <div className='text-center md:text-left'>
                  <h2 className='text-3xl font-bold text-gray-800'>
                     {userName}
                  </h2>
                  <p className='text-gray-400 font-semibold mt-1'>
                     User Account Panel
                  </p>
               </div>
            </div>

            {session?.user.isAdmin && (
               <Link
                  href='/admin-dashboard'
                  className='mt-4 md:mt-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-full py-2 px-4 transition-all duration-300 hover:bg-blue-800 hover:shadow-md hover:scale-105'
               >
                  <RiAdminLine size={20} />
                  <span>Admin Dashboard</span>
               </Link>
            )}
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <AccountCard
               href='/account/settings'
               icon={<FiSettings size={28} />}
               title='Settings'
               color='from-violet-400 to-violet-600'
            />
            <AccountCard
               href='/account/reservations'
               icon={<FiCalendar size={28} />}
               title='Reservations'
               color='from-green-400 to-green-600'
            />
            <AccountCard
               href='/account/payments'
               icon={<FiCreditCard size={28} />}
               title='Payments'
               color='from-yellow-400 to-yellow-600'
            />
            <div className='bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300'>
               <form
                  action={signOutAction}
                  className='w-full h-full flex items-center justify-center text-xl font-semibold py-6 bg-gradient-to-r from-red-500 to-red-700 text-white transition-all duration-300 hover:from-red-600 hover:to-red-800 cursor-pointer'
               >
                  <button type='submit'>Sign out</button>
               </form>
            </div>
         </div>
      </main>
   );
}

function AccountCard({
   href,
   icon,
   title,
   color,
}: {
   href: string;
   icon: React.ReactNode;
   title: string;
   color: string;
}) {
   return (
      <Link
         href={href}
         className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300`}
      >
         <div
            className={`flex items-center justify-center gap-3 py-6 px-4 bg-gradient-to-r ${color} text-white`}
         >
            {icon}
            <span className='text-xl font-semibold'>{title}</span>
         </div>
      </Link>
   );
}
