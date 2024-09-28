import { BackButton } from '@/app/_components/back-button';
import { NoData } from '@/app/_components/no-data';
import { getUsers } from '@/app/_lib/users-api';
import UsersManagement from '@/app/admin-dashboard/users/users-management';
import type { usersProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { FaRegUser } from 'react-icons/fa';

export const metadata: Metadata = {
   title: 'Admin Users',
};

export default async function AdminUsers() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const users = (await getUsers()) as usersProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='py-4 lg:hidden'>
            <BackButton />
         </div>
         <h1 className='text-3xl font-bold text-gray-800 pb-2'>Users</h1>
         {users && users.length > 0 ? (
            <UsersManagement users={users} />
         ) : (
            <NoData message='No users' icon={FaRegUser} />
         )}
      </main>
   );
}
