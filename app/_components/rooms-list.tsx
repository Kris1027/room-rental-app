import { Room } from '@/app/_components/room';
import { roomsProps } from '@/app/types/data-types';

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
   {
      return (
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4'>
            {rooms.map((room) => (
               <Room key={room.id} room={room} />
            ))}
         </div>
      );
   }
}
