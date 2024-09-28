import { BackButton } from '@/app/_components/back-button';
import { ReservationsFilter } from '@/app/_components/reservations-filter';
import { getReservations } from '@/app/_lib/reservations-api';
import Loading from '@/app/account/loading';
import { UserMessage } from '@/app/account/reservations/user-message';
import type { reservationsProps } from '@/app/types/data-types';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ReservationsList } from './reservations-list';

export const metadata: Metadata = {
   title: 'Reservations',
};

export default async function UserReservations({
   searchParams,
}: {
   searchParams: { old: string };
}) {
   const reservations = (await getReservations()) as reservationsProps[];
   const filter = searchParams?.old ?? 'no';

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-4 md:p-8'>
         <BackButton />
         <h2 className='text-4xl font-bold mb-8 text-gray-800 text-center'>
            Your Reservations
         </h2>
         {reservations?.length > 0 && <ReservationsFilter />}
         <Suspense fallback={<Loading />} key={filter}>
            <ReservationsList filter={filter} />
         </Suspense>
         <UserMessage />
      </main>
   );
}
