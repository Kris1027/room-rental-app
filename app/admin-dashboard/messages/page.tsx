import { BackButton } from '@/app/_components/back-button';
import { NoData } from '@/app/_components/no-data';
import { getMessages } from '@/app/_lib/messages';
import { DeleteButton } from '@/app/admin-dashboard/messages/delete-button';
import type { messagesProps } from '@/app/types/data-types';
import type { Metadata } from 'next';
import { FaRegComment } from 'react-icons/fa';

export const metadata: Metadata = {
   title: 'Admin Messages',
};

export default async function AdminMessages() {
   const messages = (await getMessages()) as messagesProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-0 lg:p-1 md:p-4'>
         <div className='py-4 lg:hidden'>
            <BackButton />
         </div>
         <h1 className='text-3xl font-bold mb-6 text-gray-800'>
            User Messages
         </h1>
         <div className='space-y-4'>
            {messages && messages.length > 0 ? (
               messages.map((message) => (
                  <div
                     key={message.id}
                     className='bg-white shadow-md rounded-lg'
                  >
                     <div className='p-4'>
                        <h2 className='text-lg font-semibold text-gray-700'>
                           User ID: {message.user_id}
                        </h2>
                        <span className='text-sm text-gray-500'>
                           <a href={`mailto:${message.user_email}`}>
                              {message.user_email}
                           </a>
                        </span>
                        <p className='text-gray-600 my-4'>{message.message}</p>
                        <div className='flex justify-end'>
                           <DeleteButton messageId={message.id} />
                        </div>
                     </div>
                  </div>
               ))
            ) : (
               <NoData message='No messages' icon={FaRegComment} />
            )}
         </div>
      </main>
   );
}
