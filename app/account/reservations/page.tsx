import { BackButton } from '@/app/_components/back-button';
import Loading from '@/app/account/loading';
import { UserMessage } from '@/app/account/reservations/user-message';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ReservationsList } from './reservations-list';

export const metadata: Metadata = {
   title: 'Reservations',
};

export default function UserReservations() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-4 md:p-8'>
         <BackButton />
         <h2 className='text-4xl font-bold mb-8 text-gray-800 text-center'>
            Your Reservations
         </h2>
         <Suspense fallback={<Loading />} key='reservations'>
            <ReservationsList />
         </Suspense>
         <UserMessage />
      </main>
   );
}
