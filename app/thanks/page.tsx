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
            <FaRegSmileBeam className='w-16 h-16 text-yellow-400 mx-auto mb-4' />
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
               Thank you for your reservation!
            </h1>
            <p className='text-gray-600 mb-6'>
               We&apos;re excited to host you. You can check your reservation.
            </p>
            <Link
               href='/account/reservations'
               className='inline-block bg-purpleHover text-black font-semibold px-6 py-3 rounded-full hover:bg-purple transition duration-300 ease-in-out transform hover:scale-105'
            >
               Reservations
            </Link>
         </div>
      </main>
   );
}
