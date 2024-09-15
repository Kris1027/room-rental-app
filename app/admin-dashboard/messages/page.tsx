import { getMessages } from '@/app/_lib/messages';
import { DeleteButton } from '@/app/admin-dashboard/messages/delete-button';
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
                        <h2 className='text-lg font-semibold text-gray-700'>
                           User ID: {message.user_id}
                        </h2>
                        <span className='text-sm text-gray-500'>
                           {message.user_email}
                        </span>
                        <p className='text-gray-600 my-4'>{message.message}</p>
                        <div className='flex justify-end'>
                           <DeleteButton messageId={message.id} />
                        </div>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
}
