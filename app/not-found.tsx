import { Button } from '@/app/_components/button';
import { Link } from 'next-view-transitions';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

export default function NotFound() {
   return (
      <div className='flex flex-col items-center justify-center mx-auto'>
         <FaExclamationTriangle size={128} className='text-yellow-400' />
         <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
            Page not found
         </h1>
         <p className='mt-2 text-lg text-gray-500'>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
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
