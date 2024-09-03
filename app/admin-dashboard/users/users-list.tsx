import { Button } from '@/app/_components/button';
import { formatDateTime } from '@/app/_utils/format-date-time';
import { TrueOrFalse } from '@/app/_utils/true-or-false';
import { usersProps } from '@/app/types/data-types';

export function UsersList({ users }: { users: usersProps[] }) {
   return (
      <>
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
                           <span className={TrueOrFalse(user.is_admin)}>
                              {user.is_admin ? 'Yes' : 'No'}
                           </span>
                        ),
                     },
                     {
                        label: 'Actions',
                        value: (
                           <span className='flex gap-1'>
                              <Button size='small'>Edit</Button>
                              <Button>Delete</Button>
                           </span>
                        ),
                     },
                  ].map(({ label, value }, index) => (
                     <td
                        key={label + index}
                        className='flex justify-between md:table-cell px-4 py-2'
                     >
                        <span className='font-bold md:hidden'>{label}:</span>
                        {value}
                     </td>
                  ))}
               </tr>
            ))}
      </>
   );
}
