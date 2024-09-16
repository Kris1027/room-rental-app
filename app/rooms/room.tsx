import { UserReservationForm } from '@/app/rooms/user-reservation-form';
import { type roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export async function Room({ room }: { room: roomsProps }) {
   const session = await auth();

   return (
      <div className='bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between max-w-3xl'>
         <Link href={`/rooms/${room.id}`} className='flex flex-col flex-grow'>
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
            <div>
               <p className='text-gray-800 font-bold'>
                  Price: ${room.regular_price}
               </p>
               <p className='text-gray-800'>
                  Max Capacity: {room.max_capacity}
               </p>
               {room.discount > 0 && (
                  <p className='text-green-600'>Discount: ${room.discount}</p>
               )}
            </div>
         </Link>
         {session?.user && room.id && <UserReservationForm room={room} />}
      </div>
   );
}
