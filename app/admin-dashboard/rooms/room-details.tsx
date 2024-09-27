import { Button } from '@/app/_components/button';
import { Expander } from '@/app/_utils/expander';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { DeleteRoom } from '@/app/admin-dashboard/rooms/delete-room';
import { UpdateRoomForm } from '@/app/admin-dashboard/rooms/update-room-form';
import type { roomsProps } from '@/app/types/data-types';
import Image from 'next/image';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

export function RoomDetails({ room }: { room: roomsProps }) {
   const [isEditing, setIsEditing] = useState<boolean>(false);

   const toggleEditMode = () => setIsEditing(!isEditing);

   return (
      <tr className='bg-white border-b flex flex-col md:table-row'>
         {isEditing ? (
            <td colSpan={9} className='p-4'>
               <UpdateRoomForm setIsEditing={setIsEditing} room={room} />
            </td>
         ) : (
            [
               { label: 'ID', value: room.id },
               {
                  label: 'Created At',
                  value: formatDateTime(room.created_at),
               },
               {
                  label: '',
                  value: (
                     <div className='relative'>
                        <Image
                           src={room.image_url}
                           alt={room.name}
                           width={0}
                           height={0}
                           sizes='100vw'
                           className='w-full h-auto object-cover'
                        />
                     </div>
                  ),
               },
               {
                  label: 'Name',
                  value: <span className='font-bold'>{room.name}</span>,
               },
               {
                  label: 'Description',
                  value: <Expander text={room.description} />,
               },
               { label: 'Regular Price', value: room.regular_price },
               { label: 'Max Capacity', value: room.max_capacity },
               {
                  label: 'Discount',
                  value: room.discount === null ? 0 : room.discount,
               },
               {
                  label: '',
                  value: (
                     <div className='flex flex-col gap-2 items-start justify-start'>
                        <Button size='small' onClick={toggleEditMode} fullWidth>
                           <FaEdit />
                           <span>Edit</span>
                        </Button>
                        <DeleteRoom roomId={room.id} />
                     </div>
                  ),
               },
            ].map(({ label, value }, index) => (
               <td
                  key={label + index}
                  className='flex justify-between md:table-cell p-2'
               >
                  <label className='font-bold md:hidden'>{label}</label>
                  {value}
               </td>
            ))
         )}
      </tr>
   );
}
