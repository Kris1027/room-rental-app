import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsList } from '@/app/rooms/rooms-list';
import type { roomsProps } from '@/app/types/data-types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Rooms',
};

export default async function Rooms() {
   const rooms = (await getRooms()) as roomsProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
               Discover Our Luxurious Accommodations
            </h2>
            <p className='text-lg text-gray-600'>
               Experience comfort and elegance in every room
            </p>
         </div>
         <RoomsList rooms={rooms} />
      </main>
   );
}
