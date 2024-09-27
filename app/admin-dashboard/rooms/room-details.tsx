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
      <tr className='bg-white border-b hover:bg-gray-50 flex flex-col md:table-row'>
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
                  label: 'Actions',
                  value: (
                     <span className='flex gap-1'>
                        <Button size='small' onClick={toggleEditMode}>
                           <FaEdit />
                           <span>Edit</span>
                        </Button>
                        <DeleteRoom roomId={room.id} />
                     </span>
                  ),
               },
            ].map(({ label, value }, index) => (
               <td
                  key={label + index}
                  className='flex justify-between md:table-cell px-4 py-2'
               >
                  <span className='font-bold md:hidden'>{label}</span>
                  {value}
               </td>
            ))
         )}
      </tr>
   );
}
