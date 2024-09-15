import { Room } from '@/app/_components/room';
import { getRoom } from '@/app/_lib/rooms-api';
import { auth } from '@/auth';

export default async function DetailedRoom({
   params,
}: {
   params: { roomId: string };
}) {
   const room = await getRoom(Number(params.roomId));

   const session = await auth();
   console.log(session);

   return (
      <div className='flex items-center justify-center bg-gray-100 w-full'>
         <Room room={room} />
      </div>
   );
}
