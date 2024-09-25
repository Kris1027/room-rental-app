import { Button } from '@/app/_components/button';
import type { roomsProps } from '@/app/types/data-types';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { FaDollarSign, FaEye, FaTag, FaUserFriends } from 'react-icons/fa';

export function RoomsListItem({ room }: { room: roomsProps }) {
   return (
      <div className='bg-white border rounded-lg overflow-hidden shadow-lg transition-transform transform lg:hover:scale-105 duration-300 flex flex-col w-full'>
         <div className='relative'>
            <Image
               src={room.image_url}
               alt={room.name}
               width={0}
               height={0}
               sizes='100vw'
               className='w-full h-48 object-cover'
            />
         </div>
         <div className='p-5 flex-grow flex flex-col'>
            <h2 className='text-xl font-bold text-gray-800 mb-3'>
               {room.name}
            </h2>
            <div className='space-y-3'>
               <div className='flex justify-between items-center text-gray-800 font-medium'>
                  <div className='flex items-center'>
                     <FaDollarSign size={24} className='mr-2 text-green-600' />
                     <span>Price:</span>
                  </div>
                  <span className='font-bold text-gray-900'>
                     {room.regular_price} $
                  </span>
               </div>
               <div className='flex justify-between items-center text-gray-800 font-medium'>
                  <div className='flex items-center'>
                     <FaUserFriends size={24} className='mr-2 text-blue-500' />
                     <span>Max Capacity:</span>
                  </div>
                  <span>{room.max_capacity}</span>
               </div>
               {room.discount > 0 && (
                  <div className='flex justify-between items-center text-green-600 font-semibold'>
                     <div className='flex items-center'>
                        <FaTag size={24} className='mr-2' />
                        <span>Discount:</span>
                     </div>
                     <span>{room.discount}$</span>
                  </div>
               )}
            </div>
         </div>
         <div className='p-4'>
            <Button fullWidth>
               <Link href={`/rooms/${room.id}`} className='flex items-center'>
                  <FaEye size={24} className='mr-2' />
                  <span>Details</span>
               </Link>
            </Button>
         </div>
      </div>
   );
}
