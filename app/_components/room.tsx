'use client';

import { roomsProps } from '@/app/types/data-types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Room({ room }: { room: roomsProps }) {
   const pathname = usePathname();

   console.log(pathname);

   return (
      <Link
         href={`/rooms/${room.id}`}
         className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md'
      >
         <h2>{room.name}</h2>
         <Image src={room.image_url} alt={room.name} width={200} height={200} />
         <p>{room.description}</p>
         <p>Price: ${room.regular_price}</p>
         <p>Max Capacity: {room.max_capacity}</p>
         {room.discount > 0 && <p>Discount: ${room.discount}</p>}
      </Link>
   );
}
