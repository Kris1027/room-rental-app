import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { getMessages } from '@/app/_lib/messages';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AdminMessages() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const messages = await getMessages();

   return (
      <div className='container mx-auto p-6'>
         <h1 className='text-3xl font-bold mb-6 text-gray-800'>
            User Messages
         </h1>
         <div className='space-y-4 max-h-[70vh] overflow-y-auto pr-2'>
            {messages &&
               messages.map((message) => (
                  <div
                     key={message.id}
                     className='bg-white shadow-md rounded-lg overflow-hidden'
                  >
                     <div className='p-4'>
                        <h2 className='text-lg font-semibold text-gray-700 mb-2'>
                           User ID: {message.user_id}
                        </h2>
                        <p className='text-gray-600 mb-4'>{message.message}</p>
                        <div className='flex justify-end'>
                           <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center'>
                              <FaTrash className='mr-2' />
                              Delete
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
}
