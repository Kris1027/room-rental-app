import { Room } from '@/app/_components/room';
import { getRoom } from '@/app/_lib/rooms-api';

export default async function DetailedRoom({
   params,
}: {
   params: { roomId: string };
}) {
   const room = await getRoom(Number(params.roomId));

   return (
      <div className='flex items-center justify-center bg-gray-100 w-full'>
         <div className='w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg'>
            <Room room={room} />
         </div>
      </div>
   );
}
