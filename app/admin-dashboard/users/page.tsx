import { Button } from '@/app/_components/button';
import { getUsers } from '@/app/_lib/users-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { TrueOrFalse } from '@/app/_utils/true-or-false';
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
                  {users &&
                     users.map((user) => (
                        <tr
                           key={user.id}
                           className='bg-white border-b hover:bg-gray-50 flex flex-col md:table-row'
                        >
                           {[
                              { label: 'ID', value: user.id },
                              {
                                 label: 'Created At',
                                 value: formatDateTime(user.created_at),
                              },
                              { label: 'Full Name', value: user.full_name },
                              { label: 'Email', value: user.email },
                              {
                                 label: 'Is Admin',
                                 value: (
                                    <span
                                       className={TrueOrFalse(user.is_admin)}
                                    >
                                       {user.is_admin ? 'Yes' : 'No'}
                                    </span>
                                 ),
                              },
                              {
                                 label: 'Actions',
                                 value: (
                                    <div className='space-y-1 space-x-1 text-center'>
                                       <Button size='small'>Edit</Button>
                                       <Button size='small' type='submit'>
                                          Delete
                                       </Button>
                                    </div>
                                 ),
                              },
                           ].map(({ label, value }, index) => (
                              <td
                                 key={label + index}
                                 className='flex justify-between md:table-cell px-4 py-2'
                              >
                                 <span className='font-bold md:hidden'>
                                    {label}:
                                 </span>
                                 {value}
                              </td>
                           ))}
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
