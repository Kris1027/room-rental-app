'use client';

import { Button } from '@/app/_components/button';
import {
   type reservationsProps,
   type roomsProps,
   type usersProps,
} from '@/app/types/data-types';
import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { ReservationForm } from './reservation-form';
import { ReservationsColumns } from './reservations-columns';
import { ReservationsList } from './reservations-list';

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
      <div>
         <div className='overflow-x-auto p-6'>
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
      </div>
   );
}
