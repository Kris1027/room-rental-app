'use client';

import { Button } from '@/app/_components/button';
import { Link } from 'next-view-transitions';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

export default function Error({
   error,
}: {
   error: Error & { digest?: string };
}) {
   return (
      <div className='flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto p-4 md:p-8'>
         <FaExclamationTriangle size={128} className='text-red-400' />
         <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
            Something went wrong
         </h1>
         <p className='mt-2 text-lg text-gray-500 text-center'>
            {error.toString()}
         </p>
         <div className='mt-6 flex justify-center'>
            <Button>
               <Link href='/' className='flex items-center gap-1'>
                  <FaHome size={24} className='mr-2' />
                  <span>Go Home</span>
               </Link>
            </Button>
         </div>
      </div>
   );
}
