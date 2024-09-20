import { Button } from '@/app/_components/button';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { FaRegSmileBeam } from 'react-icons/fa';

export const metadata: Metadata = {
   title: 'Thank You',
};

export default function Thanks() {
   return (
      <main className='flex justify-center items-center flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='bg-white p-8 rounded-lg shadow-2xl text-center'>
            <FaRegSmileBeam
               size={128}
               className='text-green-500 mb-4 mx-auto'
            />
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
               Thank you for your reservation!
            </h1>
            <p className='text-gray-600 mb-6'>
               We&apos;re excited to host you. You can check your reservation.
            </p>
            <Button className='mx-auto' variant='success' size='large'>
               <Link href='/account/reservations'>Reservations</Link>
            </Button>
         </div>
      </main>
   );
}
