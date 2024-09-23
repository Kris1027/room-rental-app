import { Filter } from '@/app/_components/filter';
import { RoomsList } from '@/app/rooms/rooms-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Rooms',
};

export const revalidate = 0;

export default function Rooms({
   searchParams,
}: {
   searchParams: { capacity: string };
}) {
   const filter = searchParams?.capacity ?? 'all';

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
               Discover Our Luxurious Accommodations
            </h2>
            <p className='text-lg text-gray-600'>
               Experience comfort and elegance in every room
            </p>
         </div>
         <Filter />
         <RoomsList filter={filter} />
      </main>
   );
}
