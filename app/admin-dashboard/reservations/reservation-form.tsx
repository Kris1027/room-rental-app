import { Button } from '@/app/_components/button';
import { ReservationDatePicker } from '@/app/admin-dashboard/reservations/reservation-datepicker';

export function ReservationForm() {
   return (
      <form className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'>
         <div className='flex flex-col'>
            <label
               htmlFor='user_id'
               className='text-sm font-medium text-gray-700'
            >
               User ID
            </label>
            <input
               type='number'
               name='user_id'
               id='user_id'
               placeholder='User ID'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='room_id'
               className='text-sm font-medium text-gray-700'
            >
               Room ID
            </label>
            <input
               type='number'
               name='room_id'
               id='room_id'
               placeholder='Room ID'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <ReservationDatePicker />
         <div className='flex flex-col'>
            <label
               htmlFor='num_nights'
               className='text-sm font-medium text-gray-700'
            >
               Nights
            </label>
            <input
               type='number'
               name='num_nights'
               id='num_nights'
               placeholder='Nights'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='num_guests'
               className='text-sm font-medium text-gray-700'
            >
               Guests
            </label>
            <input
               type='number'
               name='num_guests'
               id='num_guests'
               placeholder='Guests'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='total_price'
               className='text-sm font-medium text-gray-700'
            >
               Total price
            </label>
            <input
               type='number'
               name='total_price'
               id='total_price'
               placeholder='Total price'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='status'
               className='mb-1 text-sm font-medium text-gray-700'
            >
               Status
            </label>
            <select
               name='status'
               id='status'
               className='px-3 py-2 border rounded-md'
            >
               <option value='true'>unconfirmed</option>
               <option value='false'>confirmed</option>
               <option value='false'>canceled</option>
            </select>
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='is_paid'
               className='mb-1 text-sm font-medium text-gray-700'
            >
               Paid
            </label>
            <select
               name='is_paid'
               id='is_paid'
               className='px-3 py-2 border rounded-md'
            >
               <option value='true'>Yes</option>
               <option value='false'>No</option>
            </select>
         </div>
         <Button type='submit' fullWidth>
            Add New Reservation
         </Button>
      </form>
   );
}
