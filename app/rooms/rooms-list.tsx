import { RoomsListItem } from '@/app/rooms/rooms-list-item';
import { RoomsNotFound } from '@/app/rooms/rooms-not-found';
import type { roomsProps } from '@/app/types/data-types';

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
   return (
      <div className='w-full h-full overflow-auto p-6'>
         <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-8'>
               <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                  Discover Our Luxurious Accommodations
               </h2>
               <p className='text-lg text-gray-600'>
                  Experience comfort and elegance in every room
               </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
               {rooms.length > 0 ? (
                  rooms.map((room) => (
                     <RoomsListItem key={room.id} room={room} />
                  ))
               ) : (
                  <div className='col-span-full flex justify-center items-center'>
                     <RoomsNotFound />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
