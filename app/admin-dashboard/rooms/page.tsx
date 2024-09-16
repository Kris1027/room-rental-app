import { getRooms } from '@/app/_lib/rooms-api';
import { type roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { RoomsManagement } from './rooms-management';

export const revalidate = 0;

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
