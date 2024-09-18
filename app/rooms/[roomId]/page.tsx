import { getRoom } from '@/app/_lib/rooms-api';
import { DetailedRoom } from '@/app/rooms/detailed-room';

export async function generateMetadata({
   params,
}: {
   params: { roomId: number };
}) {
   const room = await getRoom(params.roomId);
   return {
      title: room?.name,
   };
}

export default async function Room({ params }: { params: { roomId: number } }) {
   const room = await getRoom(params.roomId);

   return (
      <div className='flex items-center justify-center w-full'>
         <DetailedRoom room={room} />
      </div>
   );
}
