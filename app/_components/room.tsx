import { roomsProps } from '@/app/types/data-types';
import Image from 'next/image';
import Link from 'next/link';

export function Room({ room }: { room: roomsProps }) {
   return (
      <Link href={`/rooms/${room.id}`}>
         <Image
            src={room.image_url}
            alt={room.name}
            className='rounded-lg mb-4'
            width={300}
            height={200}
         />
         <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
            {room.name}
         </h2>
         <p className='text-gray-600 mb-4'>{room.description}</p>
         <p className='text-gray-800 font-bold'>Price: ${room.regular_price}</p>
         <p className='text-gray-800'>Max Capacity: {room.max_capacity}</p>
         {room.discount > 0 && (
            <p className='text-green-600'>Discount: ${room.discount}</p>
         )}
      </Link>
   );
}
