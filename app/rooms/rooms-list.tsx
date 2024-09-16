import { Room } from '@/app/rooms/room';
import { type roomsProps } from '@/app/types/data-types';

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
   {
      return (
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gray-100 p-8 mx-auto max-w-7xl'>
            {rooms.map((room) => (
               <Room key={room.id} room={room} />
            ))}
         </div>
      );
   }
}
