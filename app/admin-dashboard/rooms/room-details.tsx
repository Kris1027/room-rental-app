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
      <tr className='bg-white border-b flex flex-col md:table-row p-2 odd:bg-gray-50'>
         {isEditing ? (
            <td colSpan={9} className='p-4'>
               <UpdateRoomForm setIsEditing={setIsEditing} room={room} />
            </td>
         ) : (
            <>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>ID</label>
                  <span className='text-base'>{room.id}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Created At</label>
                  <span>{formatDateTime(room.created_at)}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold sr-only'>Image</label>
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
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Name</label>
                  <span className='text-sm font-bold'>{room.name}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold pr-1 md:hidden'>
                     Description
                  </label>
                  <span className='text-start'>
                     <Expander text={room.description} />
                  </span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Regular price</label>
                  <span className='text-base'>
                     ${room.regular_price.toFixed(2)}
                  </span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Max capacity</label>
                  <span className='text-base'>{room.max_capacity}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Discount</label>
                  <span className='text-base'>
                     {room.discount === null
                        ? 0
                        : `$${room.discount.toFixed(2)}`}
                  </span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <div className='flex flex-col gap-2 p-2 w-full'>
                     <Button size='small' onClick={toggleEditMode} fullWidth>
                        <FaEdit />
                        <span>Edit</span>
                     </Button>
                     <DeleteRoom roomId={room.id} />
                  </div>
               </td>
            </>
         )}
      </tr>
   );
}
