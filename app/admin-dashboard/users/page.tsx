import { Button } from '@/app/_components/button';
import { GetUsers } from '@/app/_lib/users-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { usersProps } from '@/app/types/data-types';

export const revalidate = 0;

export default async function AdminUsers() {
   const users = (await GetUsers()) as usersProps[];

   return (
      <div className='overflow-x-auto shadow-md sm:rounded-lg'>
         <div className='px-6 py-4'>
            <Button>Add New User</Button>
         </div>
         <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
               <tr>
                  <th scope='col' className='px-6 py-3'>
                     ID
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Created At
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Full Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Email
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Admin
                  </th>
               </tr>
            </thead>
            <tbody>
               {users &&
                  users.map((user) => (
                     <tr
                        key={user.id}
                        className='bg-white border-b hover:bg-gray-50'
                     >
                        <td className='px-6 py-4'>{user.id}</td>
                        <td className='px-6 py-4'>
                           {formatDateTime(user.created_at)}
                        </td>
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                           {user.full_name}
                        </td>
                        <td className='px-6 py-4'>{user.email}</td>
                        <td className='px-6 py-4'>
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
                        <td className='space-x-1'>
                           <Button size='small'>Edit</Button>
                           <Button size='small' type='submit'>
                              Delete
                           </Button>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}
