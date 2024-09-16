import { getUsers } from '@/app/_lib/users-api';
import UserManagement from '@/app/admin-dashboard/users/user-management';
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
      <>
         <h1 className='text-3xl font-bold text-gray-800'>Users</h1>
         <UserManagement users={users} />
      </>
   );
}
