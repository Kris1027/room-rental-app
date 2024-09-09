import { Button } from '@/app/_components/button';
import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsColumns } from '@/app/admin-dashboard/rooms/rooms-columns';
import { RoomsList } from '@/app/admin-dashboard/rooms/rooms-list';
import { type roomsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function AdminRooms() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const rooms = (await getRooms()) as roomsProps[];

   return (
      <div className='shadow-md sm:rounded-lg p-6'>
         <Button>Add New Room</Button>
         <div className='overflow-x-auto p-6'>
            <table className='w-full text-sm text-left text-gray-500'>
               <RoomsColumns />
               <RoomsList rooms={rooms} />
            </table>
         </div>
      </div>
   );
}
