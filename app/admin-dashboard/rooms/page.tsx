import { NoData } from '@/app/_components/no-data';
import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsManagement } from '@/app/admin-dashboard/rooms/rooms-management';
import type { roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { FaKey } from 'react-icons/fa';

export const metadata: Metadata = {
   title: 'Admin Rooms',
};

export default async function AdminRooms() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const rooms = (await getRooms()) as roomsProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <h1 className='text-3xl font-bold text-gray-800'>Rooms</h1>
         {rooms && rooms.length > 0 ? (
            <RoomsManagement rooms={rooms} />
         ) : (
            <NoData message="No rooms available" icon={FaKey} />
         )}
      </main>
   );
}
