import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsManagement } from '@/app/admin-dashboard/rooms/rooms-management';
import type { roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

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
      <>
         <h1 className='text-3xl font-bold text-gray-800'>Rooms</h1>
         <RoomsManagement rooms={rooms} />
      </>
   );
}
