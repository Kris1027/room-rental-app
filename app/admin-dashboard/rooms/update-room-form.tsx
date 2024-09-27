import { Button } from '@/app/_components/button';
import { updateRoomAction } from '@/app/_lib/actions/rooms-action';
import { formatDateTime } from '@/app/_utils/format-date-time';
import type { roomsProps } from '@/app/types/data-types';
import { FaTimes } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';

export function UpdateRoomForm({
   room,
   setIsEditing,
}: {
   room: roomsProps;
   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   const handleCancel = () => {
      setIsEditing(false);
   };

   return (
      <form
         action={updateRoomAction}
         className='w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden'
      >
         <input type='hidden' name='id' defaultValue={room.id} />
         <input
            type='hidden'
            name='created_at'
            defaultValue={room.created_at}
         />

         <div className='p-4 sm:p-6 space-y-4 sm:space-y-6'>
            {[
               { label: 'ID', value: room.id, readonly: true },
               {
                  label: 'Created At',
                  value: formatDateTime(room.created_at),
                  readonly: true,
               },
               {
                  label: 'Image URL',
                  value: (
                     <input
                        type='text'
                        name='image_url'
                        defaultValue={room.image_url}
                        className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                     />
                  ),
               },
               {
                  label: 'Name',
                  value: (
                     <input
                        type='text'
                        name='name'
                        defaultValue={room.name}
                        className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                     />
                  ),
               },
               {
                  label: 'Description',
                  value: (
                     <textarea
                        name='description'
                        defaultValue={room.description}
                        className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                        rows={3}
                     />
                  ),
               },
               {
                  label: 'Regular Price',
                  value: (
                     <input
                        type='number'
                        name='regular_price'
                        defaultValue={room.regular_price}
                        className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                     />
                  ),
               },
               {
                  label: 'Max Capacity',
                  value: (
                     <input
                        type='number'
                        name='max_capacity'
                        defaultValue={room.max_capacity}
                        className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                     />
                  ),
               },
               {
                  label: 'Discount',
                  value: (
                     <input
                        type='number'
                        name='discount'
                        defaultValue={
                           room.discount === null ? 0 : room.discount
                        }
                        className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out'
                     />
                  ),
               },
            ].map(({ label, value, readonly }, index) => (
               <div
                  key={label + index}
                  className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'
               >
                  <label className='text-sm font-medium text-gray-700 sm:w-1/3'>
                     {label}
                  </label>
                  <div className='w-full sm:w-2/3'>
                     {readonly ? (
                        <div className='px-3 sm:px-4 py-2 bg-gray-100 rounded-md text-gray-700'>
                           {value}
                        </div>
                     ) : (
                        value
                     )}
                  </div>
               </div>
            ))}
         </div>
         <div className='px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3'>
            <Button variant='secondary' size='small' onClick={handleCancel}>
               <FaTimes className='mr-2' />
               <span>Cancel</span>
            </Button>
            <Button type='submit' variant='success' size='small'>
               <GrUpdate className='mr-2' />
               <span>Update</span>
            </Button>
         </div>
      </form>
   );
}
