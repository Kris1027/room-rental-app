'use client';

import { Button } from '@/app/_components/button';
import { CreateRoomForm } from '@/app/admin-dashboard/rooms/create-room-form';
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
         {!showForm && (
            <Button onClick={() => setShowForm(!showForm)}>
               <FaKey size={24} />
               <span>Add New Room</span>
            </Button>
         )}
         {showForm && <CreateRoomForm onCancel={handleCancel} />}
         <div className='px-0 py-2'>
            <table className='w-full text-xs text-center'>
               <RoomsColumns />
               <RoomsList rooms={rooms} />
            </table>
         </div>
      </>
   );
}
