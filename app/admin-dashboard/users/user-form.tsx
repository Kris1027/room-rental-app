import { Button } from '@/app/_components/button';
import { adminCreateUserAction } from '@/app/_lib/actions';

export function UserForm({ onCancel }: { onCancel: () => void }) {
   return (
      <form
         action={adminCreateUserAction}
         className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'
      >
         <div className='flex flex-col'>
            <label
               htmlFor='full_name'
               className='text-sm font-medium text-gray-700'
            >
               Full Name
            </label>
            <input
               type='text'
               name='full_name'
               id='full_name'
               placeholder='Full Name'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='email'
               className='text-sm font-medium text-gray-700'
            >
               Email
            </label>
            <input
               type='email'
               name='email'
               id='email'
               placeholder='Email'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <Button type='submit' fullWidth>
            Add New User
         </Button>
         <Button variant='danger' fullWidth onClick={onCancel}>
            Cancel
         </Button>
      </form>
   );
}
