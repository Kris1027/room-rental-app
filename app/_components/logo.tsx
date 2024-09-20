import { Link } from 'next-view-transitions';
import { FaHotel } from 'react-icons/fa';

export function Logo() {
   return (
      <Link href='/' className='inline-flex items-center group'>
         <div className='relative'>
            <FaHotel className='text-3xl sm:text-4xl md:text-5xl text-amber-700 group-hover:text-amber-600 transition-colors duration-300' />
            <div className='absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse'></div>
         </div>
         <div className='ml-2 sm:ml-3'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif'>
               <span className='text-amber-800 group-hover:text-amber-700 transition-colors duration-300'>
                  Grand
               </span>
               <span className='text-amber-600 group-hover:text-amber-500 transition-colors duration-300'>
                  {' '}
                  Horizon
               </span>
            </h1>
            <span className='text-xs sm:text-sm md:text-base font-semibold text-amber-900 tracking-wider block'>
               Hotel
            </span>
         </div>
      </Link>
   );
}
