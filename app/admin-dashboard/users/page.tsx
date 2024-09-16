import { getUsers } from '@/app/_lib/users-api';
import { UserForm } from '@/app/admin-dashboard/users/user-form';
import { UsersColumns } from '@/app/admin-dashboard/users/users-columns';
import { UsersList } from '@/app/admin-dashboard/users/users-list';
import { type usersProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function AdminUsers() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const users = (await getUsers()) as usersProps[];

   return (
      <div className='shadow-md sm:rounded-lg p-6'>
         <h1 className='text-3xl font-bold text-gray-800'>Users</h1>
         <div className='overflow-x-auto p-6'>
            <table className='w-full text-sm text-left text-gray-500'>
               <UsersColumns />
               <UsersList users={users} />
            </table>
         </div>
         <UserForm />
      </div>
   );
}
