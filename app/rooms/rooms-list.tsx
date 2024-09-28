import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsListItem } from '@/app/rooms/rooms-list-item';
import { RoomsNotFound } from '@/app/rooms/rooms-not-found';
import type { roomsProps } from '@/app/types/data-types';

export async function RoomsList({ filter }: { filter: string }) {
   const rooms = (await getRooms()) as roomsProps[];

   if (!rooms || rooms.length === 0) {
      return (
         <div className='flex justify-center items-center h-full'>
            <RoomsNotFound />
         </div>
      );
   }

   let displayedRooms = rooms;

   if (filter === 'small') {
      displayedRooms = rooms.filter((room) => room.max_capacity <= 2);
   } else if (filter === 'medium') {
      displayedRooms = rooms.filter(
         (room) => room.max_capacity > 2 && room.max_capacity <= 5
      );
   } else if (filter === 'large') {
      displayedRooms = rooms.filter((room) => room.max_capacity > 5);
   }

   if (displayedRooms.length === 0) {
      return (
         <div className='flex justify-center items-center h-full'>
            <RoomsNotFound />
         </div>
      );
   }

   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
         {displayedRooms.map((room) => (
            <RoomsListItem key={room.id} room={room} />
         ))}
      </div>
   );
}
