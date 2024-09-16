import { getRoom } from '@/app/_lib/rooms-api';
import { Room } from '@/app/rooms/room';

export default async function DetailedRoom({
   params,
}: {
   params: { roomId: number };
}) {
   const room = await getRoom(params.roomId);

   return (
      <div className='flex items-center justify-center bg-gray-100 w-full'>
         <Room room={room} />
      </div>
   );
}
