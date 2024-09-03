import { getUsers } from '@/app/_lib/users-api';
import { UserForm } from '@/app/admin-dashboard/users/user-form';
import { UsersColumns } from '@/app/admin-dashboard/users/users-columns';
import { UsersList } from '@/app/admin-dashboard/users/users-list';
import { type usersProps } from '@/app/types/data-types';

export const revalidate = 0;

export default async function AdminUsers() {
   const users = (await getUsers()) as usersProps[];

   return (
      <div className='shadow-md sm:rounded-lg'>
         <UserForm />
         <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
               <UsersColumns />
               <UsersList users={users} />
            </table>
         </div>
      </div>
   );
}
