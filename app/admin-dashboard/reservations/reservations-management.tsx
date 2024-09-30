'use client';

import { Button } from '@/app/_components/button';
import { NoData } from '@/app/_components/no-data';
import { CreateReservationForm } from '@/app/admin-dashboard/reservations/create-reservation-form';
import { ReservationsColumns } from '@/app/admin-dashboard/reservations/reservations-columns';
import { ReservationsList } from '@/app/admin-dashboard/reservations/reservations-list';
import type {
   reservationsProps,
   roomsProps,
   usersProps,
} from '@/app/types/data-types';
import { useState } from 'react';
import { FaCalendar, FaRegCalendarAlt } from 'react-icons/fa';

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
         {!showForm && (
            <Button className='mb-4' onClick={() => setShowForm(!showForm)}>
               <FaCalendar size={16} />
               <span>Add New Reservation</span>
            </Button>
         )}
         {showForm && (
            <CreateReservationForm
               onCancel={handleCancel}
               users={users}
               rooms={rooms}
            />
         )}
         {reservations && reservations.length > 0 ? (
            <div className='px-0 py-2'>
               <table className='w-full text-xs text-center'>
                  <ReservationsColumns />
                  <ReservationsList reservations={reservations} rooms={rooms} />
               </table>
            </div>
         ) : (
            <NoData message='No reservations' icon={FaRegCalendarAlt} />
         )}
      </>
   );
}
