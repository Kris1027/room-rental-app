import { RoomsList } from '@/app/_components/rooms-list';
import { getRooms } from '@/app/_lib/rooms-api';
import { roomsProps } from '@/app/types/data-types';

export default async function Rooms() {
   const rooms = (await getRooms()) as roomsProps[];

   return <RoomsList rooms={rooms} />;
}
