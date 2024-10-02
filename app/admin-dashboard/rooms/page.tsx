import { BackButton } from '@/app/_components/back-button';
import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsManagement } from '@/app/admin-dashboard/rooms/rooms-management';
import type { roomsProps } from '@/app/types/data-types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Admin Rooms',
};

export default async function AdminRooms() {
   const rooms = (await getRooms()) as roomsProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='py-4 lg:hidden'>
            <BackButton />
         </div>
         <h2 className='text-3xl font-bold text-gray-800 pb-2'>Rooms</h2>
         <RoomsManagement rooms={rooms} />
      </main>
   );
}
