import { updateRoomAction } from '@/app/_lib/actions/rooms-action';
import { CancelButton } from './cancel-button';
import { Button } from '@/app/_components/button';
import { GrUpdate } from 'react-icons/gr';
import { roomsProps } from '@/app/types/data-types';

export function UpdateRoomForm({ room }: { room: roomsProps }) {
   return (
      <form
         action={updateRoomAction}
         className='m-4 p-4 bg-gray-100 rounded-lg shadow'
      >
         <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
               <label
                  htmlFor='id'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  ID
               </label>
               <input
                  type='number'
                  name='id'
                  id='id'
                  className='px-3 py-2 border rounded-md bg-gray-100 outline-none'
                  defaultValue={room.id}
                  readOnly
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='created_at'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Created at
               </label>
               <input
                  type='text'
                  name='created_at'
                  id='created_at'
                  className='px-3 py-2 border rounded-md bg-gray-100 outline-none'
                  readOnly
                  defaultValue={room.created_at}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='image_url'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Image URL
               </label>
               <input
                  type='text'
                  name='image_url'
                  id='image_url'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={room.image_url}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='name'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Name
               </label>
               <input
                  type='text'
                  name='name'
                  id='name'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={room.name}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='description'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Description
               </label>
               <input
                  type='text'
                  name='description'
                  id='description'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={room.description}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='regular_price'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Regular price
               </label>
               <input
                  type='number'
                  name='regular_price'
                  id='regular_price'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={room.regular_price}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='max_capacity'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Max capacity
               </label>
               <input
                  type='number'
                  name='max_capacity'
                  id='max_capacity'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={room.max_capacity}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='discount'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Discount
               </label>
               <input
                  type='number'
                  name='discount'
                  id='discount'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={room.discount}
               />
            </div>
         </div>
         <div className='mt-4 flex justify-end space-x-2'>
            <CancelButton />
            <Button type='submit' variant='success'>
               <GrUpdate />
               Update
            </Button>
         </div>
      </form>
   );
}
