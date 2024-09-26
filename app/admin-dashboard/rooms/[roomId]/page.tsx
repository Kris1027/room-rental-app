import { getRoom } from '@/app/_lib/rooms-api';
import { UpdateRoomForm } from '@/app/admin-dashboard/rooms/update-room-form';
import type { roomsProps } from '@/app/types/data-types';

export default async function RoomUpdate(params: {
   params: { roomId: number };
}) {
   const id = params.params.roomId;
   const room: roomsProps = await getRoom(id);

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <h2 className='text-lg lg:text-3xl font-bold text-gray-800'>
            {room.name}
         </h2>
         <UpdateRoomForm room={room} />
      </main>
   );
}
