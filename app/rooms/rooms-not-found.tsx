import { Button } from '@/app/_components/button';
import { Link } from 'next-view-transitions';
import { FaPlus } from 'react-icons/fa';
import { FiKey } from 'react-icons/fi';

export function RoomsNotFound() {
   return (
      <div className='flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg text-center'>
         <FiKey size={64} className='text-red-500 mb-4' />
         <h3 className='text-2xl font-semibold text-gray-700 mb-2'>
            No Rooms Found
         </h3>
         <p className='text-gray-500 mb-6'>
            Go to Admin panel and add some rooms
         </p>
         <Button variant='positive'>
            <Link href='/admin-dashboard/rooms' className='flex items-center gap-1'>
               <FaPlus size={24} className='mr-2' />
               <span>Add Room</span>
            </Link>
         </Button>
      </div>
   );
}
