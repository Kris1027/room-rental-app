import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsListItem } from '@/app/rooms/rooms-list-item';
import { RoomsNotFound } from '@/app/rooms/rooms-not-found';
import type { roomsProps } from '@/app/types/data-types';

export async function RoomsList({ filter }: { filter: string }) {
   const rooms = (await getRooms()) as roomsProps[];

   if (!rooms) {
      return (
         <div className='col-span-full flex justify-center items-center'>
            <RoomsNotFound />
         </div>
      );
   }

   let displayedRooms;

   if (filter === 'all') displayedRooms = rooms;
   if (filter === 'small')
      displayedRooms = rooms.filter((room) => room.max_capacity <= 2);
   if (filter === 'medium')
      displayedRooms = rooms.filter(
         (room) => room.max_capacity > 2 && room.max_capacity <= 5
      );
   if (filter === 'large')
      displayedRooms = rooms.filter((room) => room.max_capacity > 6);

   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
         {displayedRooms?.map((room) => (
            <RoomsListItem key={room.id} room={room} />
         ))}
      </div>
   );
}
