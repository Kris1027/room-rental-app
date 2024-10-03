import { Button } from '@/app/_components/button';
import { DeleteButton } from '@/app/_components/delete-button';
import { deleteUserAction } from '@/app/_lib/actions/users-action';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { trueOrFalse } from '@/app/_utils/true-or-false';
import { UpdateUserForm } from '@/app/admin-dashboard/users/update-user-form';
import type { usersProps } from '@/app/types/data-types';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

export function UserDetails({ user }: { user: usersProps }) {
   const [isEditing, setIsEditing] = useState<boolean>(false);

   const toggleEditMode = () => setIsEditing(!isEditing);

   return (
      <tr className='bg-gray-50 border-b flex flex-col md:table-row p-2 odd:bg-white'>
         {isEditing ? (
            <td colSpan={9} className='p-4'>
               <UpdateUserForm setIsEditing={setIsEditing} user={user} />
            </td>
         ) : (
            <>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>ID</label>
                  <span className='text-base'>{user.id}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Created At</label>
                  <span>{formatDateTime(user.created_at)}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Full Name</label>
                  <span className='text-sm font-bold'>{user.full_name}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Email</label>
                  <span className='text-base'>{user.email}</span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <label className='font-bold md:hidden'>Is Admin</label>
                  <span className={`text-base ${trueOrFalse(user.is_admin)}`}>
                     {user.is_admin ? 'Yes' : 'No'}
                  </span>
               </td>
               <td className='flex p-1 justify-between md:table-cell'>
                  <div className='flex flex-col gap-2 p-2 w-full'>
                     <Button size='small' onClick={toggleEditMode} fullWidth>
                        <FaEdit />
                        <span>Edit</span>
                     </Button>
                     <DeleteButton
                        id={user.id}
                        onDelete={deleteUserAction}
                        buttonText='Delete'
                        loadingText='Deleting...'
                     />
                  </div>
               </td>
            </>
         )}
      </tr>
   );
}
