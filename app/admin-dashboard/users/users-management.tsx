'use client';

import { Button } from '@/app/_components/button';
import { UserForm } from '@/app/admin-dashboard/users/user-form';
import { UsersColumns } from '@/app/admin-dashboard/users/users-columns';
import { UsersList } from '@/app/admin-dashboard/users/users-list';
import { usersProps } from '@/app/types/data-types';
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

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
         {showForm && <UserForm onCancel={handleCancel} />}
         <div className='px-0 py-2 lg:p-6'>
            <table className='w-full text-xs text-center'>
               <UsersColumns />
               <UsersList users={users} />
            </table>
         </div>
      </>
   );
}
