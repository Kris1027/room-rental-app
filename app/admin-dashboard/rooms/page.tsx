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
         <div className='px-4 py-3 sm:px-6'>
            <Button>Add New Room</Button>
         </div>
         <div className='hidden sm:block'>
            <table className='w-full text-sm text-left text-gray-500'>
               <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                  <tr>
                     <th scope='col' className='px-3 py-2'>
                        ID
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Created At
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Image
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Name
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Description
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Regular price
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Max capacity
                     </th>
                     <th scope='col' className='px-3 py-2'>
                        Discount
                     </th>
                     <th scope='col' className='px-3 py-2'>
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
                           <td className='px-3 py-2'>{room.id}</td>
                           <td className='px-3 py-2'>
                              {formatDateTime(room.created_at)}
                           </td>
                           <td className='px-3 py-2'>
                              <Image
                                 className='object-cover w-16 h-16'
                                 src={room.image_url}
                                 alt='Room image'
                                 width={64}
                                 height={64}
                              />
                           </td>
                           <td className='px-3 py-2'>{room.name}</td>
                           <td className='px-3 py-2'>
                              <Expander text={room.description} />
                           </td>
                           <td className='px-3 py-2'>{room.regular_price}</td>
                           <td className='px-3 py-2'>{room.max_capacity}</td>
                           <td className='px-3 py-2'>
                              {room.discount === null ? 0 : room.discount}
                           </td>
                           <td className='px-3 py-2 space-y-1'>
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
         <div className='sm:hidden'>
            {rooms &&
               rooms.map((room) => (
                  <div key={room.id} className='bg-white border-b p-4'>
                     <div className='flex justify-between items-center mb-2'>
                        <span className='font-bold'>ID: {room.id}</span>
                        <span className='text-sm'>
                           {formatDateTime(room.created_at)}
                        </span>
                     </div>
                     <div className='mb-2'>
                        <Image
                           className='object-cover w-full h-48'
                           src={room.image_url}
                           alt='Room image'
                           width={192}
                           height={192}
                        />
                     </div>
                     <div className='mb-2'>
                        <strong>Name:</strong> {room.name}
                     </div>
                     <div className='mb-2'>
                        <strong>Description:</strong>{' '}
                        <Expander text={room.description} />
                     </div>
                     <div className='mb-2'>
                        <strong>Regular price:</strong> {room.regular_price}
                     </div>
                     <div className='mb-2'>
                        <strong>Max capacity:</strong> {room.max_capacity}
                     </div>
                     <div className='mb-2'>
                        <strong>Discount:</strong>{' '}
                        {room.discount === null ? 0 : room.discount}
                     </div>
                     <div className='flex justify-end space-x-2'>
                        <Button size='small'>Edit</Button>
                        <Button size='small' type='submit'>
                           Delete
                        </Button>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
}
