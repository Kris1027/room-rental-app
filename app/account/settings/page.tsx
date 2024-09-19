import React from 'react';
import { auth } from '@/auth';
import { FiUser, FiMail, FiSave } from 'react-icons/fi';
import { Button } from '@/app/_components/button';

export default async function Settings() {
   const session = await auth();
   const userId = session?.user.userId ?? '';
   const userFullName = session?.user.name ?? '';
   const userEmail = session?.user.email ?? '';

   return (
      <div className='container mx-auto px-4 py-8'>
         <h2 className='text-3xl font-bold mb-6 text-gray-800'>
            Account Settings
         </h2>
         <form className='space-y-6'>
            <input
               type='text'
               name='id'
               id='id'
               defaultValue={userId}
               readOnly
               hidden
            />
            <div>
               <label
                  htmlFor='full_name'
                  className='block text-sm font-medium text-gray-700 mb-1'
               >
                  Full Name
               </label>
               <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                     <FiUser size={24} className='text-gray-400' />
                  </div>
                  <input
                     type='text'
                     name='full_name'
                     id='full_name'
                     defaultValue={userFullName}
                     className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
               </div>
            </div>
            <div>
               <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
               >
                  Email
               </label>
               <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                     <FiMail size={24} className='text-gray-400' />
                  </div>
                  <input
                     type='email'
                     name='email'
                     id='email'
                     defaultValue={userEmail}
                     className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
               </div>
            </div>
            <Button type='submit' fullWidth>
               <FiSave size={24} className='mr-2' />
               Save Changes
            </Button>
         </form>
      </div>
   );
}
