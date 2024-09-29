'use client';

import { Button } from '@/app/_components/button';
import { NoData } from '@/app/_components/no-data';
import { CreateUserForm } from '@/app/admin-dashboard/users/create-user-form';
import { UsersColumns } from '@/app/admin-dashboard/users/users-columns';
import { UsersList } from '@/app/admin-dashboard/users/users-list';
import { usersProps } from '@/app/types/data-types';
import { useState } from 'react';
import { FaRegUser, FaUserPlus } from 'react-icons/fa';

export default function UsersManagement({ users }: { users: usersProps[] }) {
   const [showForm, setShowForm] = useState(false);

   const handleCancel = () => {
      setShowForm((prevState) => !prevState);
   };

   return (
      <>
         {!showForm && (
            <Button onClick={() => setShowForm(!showForm)}>
               <FaUserPlus size={24} />
               <span>Add New User</span>
            </Button>
         )}
         {showForm && <CreateUserForm onCancel={handleCancel} />}
         {users && users.length > 0 ? (
            <div className='px-0 py-2'>
               <table className='w-full text-xs text-center'>
                  <UsersColumns />
                  <UsersList users={users} />
               </table>
            </div>
         ) : (
            <NoData message='No users' icon={FaRegUser} />
         )}
      </>
   );
}
