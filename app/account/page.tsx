import { Button } from '@/app/_components/button';
import { signOutAction } from '@/app/_lib/actions';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { FiCalendar, FiCreditCard, FiLogOut, FiSettings } from 'react-icons/fi';
import { RiAdminLine } from 'react-icons/ri';

export const metadata: Metadata = {
   title: 'Account',
};

export default async function Account() {
   const session = await auth();
   const userImage = session?.user?.image as string;
   const userName = session?.user?.name as string;

   return (
      <div className='md:p-8 mx-auto max-w-7xl w-full'>
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

         {session?.user.isAdmin && (
            <div className='mb-6'>
               <Link
                  className='flex items-center text-black justify-center gap-1 rounded-lg transition-colors outline-none bg-purple hover:bg-purpleHover py-4 text-lg w-full'
                  href='/admin-dashboard'
               >
                  <RiAdminLine size={24} />
                  <span>Admin Dashboard</span>
               </Link>
            </div>
         )}

         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Button size='large'>
               <FiSettings size={24} />
               <span>Settings</span>
            </Button>
            <Link
               className='flex items-center text-black justify-center gap-1 rounded-lg transition-colors outline-none bg-secondary hover:bg-secondaryHover py-4 text-lg'
               href='/account/reservations'
            >
               <FiCalendar size={24} />
               <span>Reservations</span>
            </Link>
            <Button size='large' variant='positive'>
               <FiCreditCard size={24} />
               <span>Payments</span>
            </Button>
            <form action={signOutAction}>
               <Button size='large' variant='danger' type='submit' fullWidth>
                  <FiLogOut size={24} />
                  <span>Logout</span>
               </Button>
            </form>
         </div>
      </div>
   );
}
