import { Button } from '@/app/_components/button';
import { adminCreateRoomAction } from '@/app/_lib/actions';

export function RoomForm() {
   return (
      <form
         action={adminCreateRoomAction}
         className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'
      >
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Image
            </label>
            <input
               type='text'
               name='image_url'
               id='image_url'
               placeholder='image_url'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Name
            </label>
            <input
               type='text'
               name='name'
               id='name'
               placeholder='Name'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='description'
               className='text-sm font-medium text-gray-700'
            >
               Description
            </label>
            <textarea
               name='description'
               id='description'
               placeholder='description'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='regular_price'
               className='text-sm font-medium text-gray-700'
            >
               Regular price
            </label>
            <input
               type='number'
               name='regular_price'
               id='regular_price'
               placeholder='Regular price'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Max capacity
            </label>
            <input
               type='number'
               name='max_capacity'
               id='max_capacity'
               placeholder='Max capacity'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Discount
            </label>
            <input
               type='number'
               name='discount'
               id='discount'
               placeholder='Discount'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <Button type='submit' fullWidth>
            Add New Room
         </Button>
      </form>
   );
}
