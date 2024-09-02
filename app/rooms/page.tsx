import { RoomsList } from '@/app/_components/rooms-list';
import { GetRooms } from '@/app/_lib/rooms-api';
import { roomsProps } from '@/app/types/data-types';

export default async function Rooms() {
   const rooms = (await GetRooms()) as roomsProps[];

   return <RoomsList rooms={rooms} />;
}
