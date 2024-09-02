import { roomsProps } from '@/app/types/data-types';
import Image from 'next/image';

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
   {
      return (
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4'>
            {rooms.map((room) => (
               <div
                  className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md'
                  key={room.id}
               >
                  <h2>{room.name}</h2>
                  <Image
                     src={room.image_url}
                     alt={room.name}
                     width={200}
                     height={200}
                  />
                  <p>{room.description}</p>
                  <p>Price: ${room.regular_price}</p>
                  <p>Max Capacity: {room.max_capacity}</p>
                  {room.discount > 0 && <p>Discount: ${room.discount}</p>}
               </div>
            ))}
         </div>
      );
   }
}
