import { BackButton } from '@/app/_components/back-button';
import { UserReservationForm } from '@/app/rooms/user-reservation-form';
import type { roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import Image from 'next/image';
import { FaDollarSign, FaTag, FaUserFriends } from 'react-icons/fa';

export async function DetailedRoom({ room }: { room: roomsProps }) {
   const session = await auth();

   return (
      <div className='flex flex-col py-2 gap-4 items-start justify-center'>
         <BackButton />
         <div className='bg-white p-2 lg:p-4 rounded-xl shadow-lg max-w-3xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-6'>
               <div className='relative'>
                  <Image
                     src={room.image_url}
                     alt={room.name}
                     width={0}
                     height={0}
                     sizes='100vw'
                     className='w-full h-96 object-cover rounded-t-lg lg:rounded-lg'
                  />
               </div>

               <div className='flex flex-col justify-between w-full md:w-1/2'>
                  <div>
                     <h2 className='text-3xl font-bold text-gray-800 mb-3'>
                        {room.name}
                     </h2>
                     <p className='text-gray-600 mb-4 text-sm md:text-base leading-relaxed'>
                        {room.description}
                     </p>
                  </div>

                  <div className='grid grid-cols-1 gap-2 md:gap-4'>
                     <div className='flex items-center text-gray-800 font-bold text-lg'>
                        <FaDollarSign
                           size={24}
                           className='mr-2 text-green-600'
                        />
                        <span>Price: ${room.regular_price}</span>
                     </div>

                     <div className='flex items-center text-gray-800'>
                        <FaUserFriends
                           size={24}
                           className='mr-2 text-blue-500'
                        />
                        <span>
                           Max Capacity: <strong>{room.max_capacity}</strong>{' '}
                           people
                        </span>
                     </div>

                     {room.discount > 0 && (
                        <div className='flex items-center text-green-600 font-semibold'>
                           <FaTag size={24} className='mr-2' />
                           <span>Discount: ${room.discount}</span>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            {session?.user && room.id && (
               <div className='mt-6'>
                  <UserReservationForm room={room} />
               </div>
            )}
         </div>
      </div>
   );
}
