import { Button } from '@/app/_components/button';
import { adminUpdateUserAction } from '@/app/_lib/actions';
import { CancelButton } from '@/app/admin-dashboard/users/cancel-button';
import type { usersProps } from '@/app/types/data-types';
import { GrUpdate } from 'react-icons/gr';

export function UpdateUserForm({
   user,
   setIsEditing,
}: {
   user: usersProps;
   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   const handleCancel = () => {
      setIsEditing(false);
   };

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
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
                     className='px-3 py-2 border rounded-md bg-gray-100 outline-none'
                     defaultValue={user.id}
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
               <div className='flex flex-col'>
                  <label
                     htmlFor='admin'
                     className='mb-1 text-sm font-medium text-gray-700'
                  >
                     Admin
                  </label>
                  <select
                     name='is_admin'
                     id='is_admin'
                     className='px-3 py-2 border rounded-md'
                     defaultValue={String(user.is_admin)}
                  >
                     <option value='true'>Yes</option>
                     <option value='false'>No</option>
                  </select>
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
      </main>
   );
}
