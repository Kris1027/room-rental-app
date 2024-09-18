import type { roomsProps } from '@/app/types/data-types';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export function RoomsListItem({ room }: { room: roomsProps }) {
   return (
      <Link
         href={`/rooms/${room.id}`}
         className='bg-white border rounded-lg overflow-hidden shadow-md flex flex-col'
      >
         <div className='relative w-full pt-[60%]'>
            <Image
               src={room.image_url}
               alt={room.name}
               fill
               sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
               className='object-cover'
            />
         </div>
         <div className='p-4 flex-grow flex flex-col justify-between'>
            <h2 className='text-xl font-semibold mb-2'>{room.name}</h2>
            <div className='space-y-2'>
               <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Price:</span>
                  <span className='font-bold'>{room.regular_price} $</span>
               </div>
               {room.discount > 0 && (
                  <div className='flex justify-between items-center text-green-600'>
                     <span>Discount:</span>
                     <span className='font-bold'>{room.discount}$</span>
                  </div>
               )}
               <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Max Capacity:</span>
                  <span>{room.max_capacity}</span>
               </div>
            </div>
         </div>
      </Link>
   );
}
