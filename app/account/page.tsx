import { auth } from '@/auth';
import Image from 'next/image';
import { FiCalendar, FiCreditCard, FiLogOut, FiSettings } from 'react-icons/fi';
import { Button } from '../_components/button';

export default async function Account() {
   const session = await auth();
   const userImage = session?.user?.image as string;
   const userName = session?.user?.name as string;

   return (
      <div className='bg-gray-100 md:p-8 mx-auto max-w-7xl w-full'>
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
            <Button size='large'>
               <FiSettings size={24} />
               <span>Settings</span>
            </Button>
            <Button size='large' variant='secondary'>
               <FiCalendar size={24} />
               <span>Reservations</span>
            </Button>
            <Button size='large' variant='positive'>
               <FiCreditCard size={24} />
               <span>Payments</span>
            </Button>
            <Button size='large' variant='danger'>
               <FiLogOut size={24} />
               <span>Logout</span>
            </Button>
         </div>
      </div>
   );
}
