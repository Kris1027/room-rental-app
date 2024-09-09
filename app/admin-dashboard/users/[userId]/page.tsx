import { Button } from '@/app/_components/button';
import { adminUpdateUserAction } from '@/app/_lib/actions';
import { getUserById } from '@/app/_lib/users-api';
import { CancelButton } from '@/app/admin-dashboard/users/cancel-button';
import { GrUpdate } from 'react-icons/gr';

export default async function UserUpdateForm(params: {
   params: { userId: string };
}) {
   const id = Number(params.params.userId);
   const user = await getUserById(id);

   console.log(user);
   return (
      <form
         action={adminUpdateUserAction}
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
                  className='px-3 py-2 border rounded-md'
                  defaultValue={user.id}
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
                  className='px-3 py-2 border rounded-md'
                  disabled
                  defaultValue={user.created_at}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='email'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Email
               </label>
               <input
                  type='email'
                  name='email'
                  id='email'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={user.email}
               />
            </div>
            <div className='flex flex-col'>
               <label
                  htmlFor='full_name'
                  className='mb-1 text-sm font-medium text-gray-700'
               >
                  Full Name
               </label>
               <input
                  type='text'
                  name='full_name'
                  id='full_name'
                  className='px-3 py-2 border rounded-md'
                  defaultValue={user.full_name}
               />
            </div>
         </div>
         <div className='mt-4 flex justify-end space-x-2'>
            <CancelButton />
            <Button type='submit' variant='positive'>
               <GrUpdate />
               Update
            </Button>
         </div>
      </form>
   );
}
