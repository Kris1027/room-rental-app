import { getReservations } from '@/app/_lib/reservations-api';
import { ReservationsColumns } from '@/app/admin-dashboard/reservations/reservations-columns';
import { ReservationsList } from '@/app/admin-dashboard/reservations/reservations-list';
import { type reservationsProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { ReservationForm } from '@/app/admin-dashboard/reservations/reservation-form';

export const revalidate = 0;

export default async function AdminReservations() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const reservations = (await getReservations()) as reservationsProps[];

   return (
      <div className='shadow-md sm:rounded-lg p-6'>
         <div className='overflow-x-auto p-6'>
            <table className='w-full text-sm text-left text-gray-500'>
               <ReservationsColumns />
               <ReservationsList reservations={reservations} />
            </table>
         </div>
         <ReservationForm />
      </div>
   );
}
