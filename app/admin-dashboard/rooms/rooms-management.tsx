'use client';

import { Button } from '@/app/_components/button';
import { RoomForm } from '@/app/admin-dashboard/rooms/room-form';
import { RoomsColumns } from '@/app/admin-dashboard/rooms/rooms-columns';
import { RoomsList } from '@/app/admin-dashboard/rooms/rooms-list';
import { type roomsProps } from '@/app/types/data-types';
import { useState } from 'react';
import { FaKey } from 'react-icons/fa';

export function RoomsManagement({ rooms }: { rooms: roomsProps[] }) {
   const [showForm, setShowForm] = useState(false);

   const handleCancel = () => {
      setShowForm((prevState) => !prevState);
   };

   return (
      <>
         <div className='px-0 py-2 lg:p-6'>
            <table className='w-full text-sm text-left text-gray-500'>
               <RoomsColumns />
               <RoomsList rooms={rooms} />
            </table>
         </div>
         {!showForm && (
            <Button onClick={() => setShowForm(!showForm)}>
               <FaKey size={16} />
               <span>Add New Room</span>
            </Button>
         )}
         {showForm && <RoomForm onCancel={handleCancel} />}
      </>
   );
}
