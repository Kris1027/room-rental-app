import { Button } from '@/app/_components/button';
import { GetRooms } from '@/app/_lib/rooms-api';
import { Expander } from '@/app/_utils/expander';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { roomsProps } from '@/app/types/data-types';
import Image from 'next/image';

export const revalidate = 0;

export default async function AdminRooms() {
   const rooms = (await GetRooms()) as roomsProps[];

   return (
      <div className='overflow-x-auto shadow-md sm:rounded-lg'>
         <div className='px-6 py-4'>
            <Button>Add New Room</Button>
         </div>
         <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
               <tr>
                  <th scope='col' className='px-6 py-3'>
                     ID
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Created At
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Image
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Description
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Regular price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Max capacity
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Discount
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Actions
                  </th>
               </tr>
            </thead>
            <tbody>
               {rooms &&
                  rooms.map((room) => (
                     <tr
                        key={room.id}
                        className='bg-white border-b hover:bg-gray-50'
                     >
                        <td className='px-6 py-4'>{room.id}</td>
                        <td className='px-6 py-4'>
                           {formatDateTime(room.created_at)}
                        </td>
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                           <Image
                              className='object-fill'
                              src={room.image_url}
                              alt='Room image'
                              width={100}
                              height={100}
                           />
                        </td>
                        <td className='px-6 py-4'>{room.name}</td>
                        <td className='px-6 py-4'>
                           <Expander text={room.description} />
                        </td>
                        <td className='px-6 py-4'>{room.regular_price}</td>
                        <td className='px-6 py-4'>{room.max_capacity}</td>
                        <td className='px-6 py-4'>
                           {room.discount === null ? 0 : room.discount}
                        </td>
                        <td className='space-x-1'>
                           <Button size='small'>Edit</Button>
                           <Button size='small' type='submit'>
                              Delete
                           </Button>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}
