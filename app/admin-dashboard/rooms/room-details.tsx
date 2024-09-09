import { Button } from '@/app/_components/button';
import { Expander } from '@/app/_utils/expander';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { type roomsProps } from '@/app/types/data-types';
import Image from 'next/image';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

export function RoomDetails({ room }: { room: roomsProps }) {
   return (
      <tr className='bg-white border-b hover:bg-gray-50 flex flex-col md:table-row'>
         {[
            { label: 'ID', value: room.id },
            {
               label: 'Created At',
               value: formatDateTime(room.created_at),
            },
            {
               label: 'Image',
               value: (
                  <Image
                     src={room.image_url}
                     alt='room image'
                     width={300}
                     height={100}
                  />
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
                     <Button size='small'>
                        <Link
                           href={`/admin-dashboard/users/${room.id}`}
                           className='flex items-center gap-1'
                        >
                           <FaEdit />
                           <span>Edit</span>
                        </Link>
                     </Button>
                     <Button variant='danger'>Delete</Button>
                  </span>
               ),
            },
         ].map(({ label, value }, index) => (
            <td
               key={label + index}
               className='flex justify-between md:table-cell px-4 py-2'
            >
               <span className='font-bold md:hidden'>{label}:</span>
               {value}
            </td>
         ))}
      </tr>
   );
}
