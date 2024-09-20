import { getMessages } from '@/app/_lib/messages';
import { DeleteButton } from '@/app/admin-dashboard/messages/delete-button';
import type { messagesProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
   title: 'Admin Messages',
};

export default async function AdminMessages() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const messages = (await getMessages()) as messagesProps[];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <h1 className='text-3xl font-bold mb-6 text-gray-800'>
            User Messages
         </h1>
         <div className='space-y-4 pr-2'>
            {messages &&
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
               ))}
         </div>
      </main>
   );
}
