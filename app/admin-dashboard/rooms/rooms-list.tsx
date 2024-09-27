import { RoomDetails } from '@/app/admin-dashboard/rooms/room-details';
import type { roomsProps } from '@/app/types/data-types';

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
   return (
      <tbody className='space-y-2'>
         {rooms.map((room) => (
            <RoomDetails key={room.id} room={room} />
         ))}
      </tbody>
   );
}
