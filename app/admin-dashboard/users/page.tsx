import { getUsers } from '@/app/_lib/users-api';
import { UserForm } from '@/app/admin-dashboard/users/user-form';
import { usersProps } from '@/app/types/data-types';
import { UsersList } from './users-list';

export const revalidate = 0;

export default async function AdminUsers() {
   const users = (await getUsers()) as usersProps[];

   return (
      <div className='shadow-md sm:rounded-lg'>
         <UserForm />
         <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
               <thead className='text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group'>
                  <tr>
                     {[
                        'ID',
                        'Created At',
                        'Full Name',
                        'Email',
                        'Is Admin',
                        'Actions',
                     ].map((header) => (
                        <th key={header} scope='col' className='px-4 py-2'>
                           {header}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  <UsersList users={users} />
               </tbody>
            </table>
         </div>
      </div>
   );
}
