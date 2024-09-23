'use client';

import { Button } from '@/app/_components/button';
import { ReservationForm } from '@/app/admin-dashboard/reservations/reservation-form';
import { ReservationsColumns } from '@/app/admin-dashboard/reservations/reservations-columns';
import { ReservationsList } from '@/app/admin-dashboard/reservations/reservations-list';
import type {
   reservationsProps,
   roomsProps,
   usersProps,
} from '@/app/types/data-types';
import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';

export function ReservationsManagement({
   reservations,
   users,
   rooms,
}: {
   reservations: reservationsProps[];
   users: usersProps[];
   rooms: roomsProps[];
}) {
   const [showForm, setShowForm] = useState(false);

   const handleCancel = () => {
      setShowForm((prevState) => !prevState);
   };

   return (
      <>
         <div className='px-0 py-2 lg:p-6'>
            <table className='w-full text-sm text-left text-gray-500'>
               <ReservationsColumns />
               <ReservationsList reservations={reservations} />
            </table>
         </div>
         {!showForm && (
            <Button onClick={() => setShowForm(!showForm)}>
               <FaCalendar size={16} />
               <span>Add New Reservation</span>
            </Button>
         )}
         {showForm && (
            <ReservationForm
               onCancel={handleCancel}
               users={users}
               rooms={rooms}
            />
         )}
      </>
   );
}
