import { Button } from '@/app/_components/button';
import { getUsers } from '@/app/_lib/users-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { usersProps } from '@/app/types/data-types';

export const revalidate = 0;

export default async function AdminUsers() {
   const users = (await getUsers()) as usersProps[];

   return (
      <div className='shadow-md sm:rounded-lg'>
         <div className='p-4'>
            <Button>Add New User</Button>
         </div>
         <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
               <thead className='text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group'>
                  <tr>
                     <th scope='col' className='px-4 py-2'>
                        ID
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Created At
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Full Name
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Email
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Admin
                     </th>
                     <th scope='col' className='px-4 py-2'>
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {users &&
                     users.map((user) => (
                        <tr
                           key={user.id}
                           className='bg-white border-b hover:bg-gray-50 flex flex-col md:table-row'
                        >
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>ID:</span>{' '}
                              {user.id}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Created At:
                              </span>{' '}
                              {formatDateTime(user.created_at)}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2 font-medium text-gray-900'>
                              <span className='font-bold md:hidden'>
                                 Full Name:
                              </span>{' '}
                              {user.full_name}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Email:
                              </span>{' '}
                              {user.email}
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Admin:
                              </span>
                              <span
                                 className={`px-2 py-1 rounded text-xs font-medium ${
                                    user.is_admin
                                       ? 'bg-green-100 text-green-800'
                                       : 'bg-red-100 text-red-800'
                                 }`}
                              >
                                 {user.is_admin ? 'Yes' : 'No'}
                              </span>
                           </td>
                           <td className='flex justify-between md:table-cell px-4 py-2'>
                              <span className='font-bold md:hidden'>
                                 Actions:
                              </span>
                              <div className='space-y-1 space-x-1 text-center'>
                                 <Button size='small'>Edit</Button>
                                 <Button size='small' type='submit'>
                                    Delete
                                 </Button>
                              </div>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
