import { getRooms } from '@/app/_lib/rooms-api';
import { RoomsList } from '@/app/rooms/rooms-list';
import type { roomsProps } from '@/app/types/data-types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Rooms',
};

export default async function Rooms() {
   const rooms = (await getRooms()) as roomsProps[];

   return <RoomsList rooms={rooms} />;
}
