import { BackButton } from '@/app/_components/back-button';
import { getUsers } from '@/app/_lib/users-api';
import UsersManagement from '@/app/admin-dashboard/users/users-management';
import type { usersProps } from '@/app/types/data-types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Admin Users',
};

export default async function AdminUsers() {
   const users = (await getUsers()) as usersProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='py-4 lg:hidden'>
            <BackButton />
         </div>
         <h1 className='text-3xl font-bold text-gray-800 pb-2'>Users</h1>
         <UsersManagement users={users} />
      </main>
   );
}
