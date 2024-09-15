import React from 'react';
import { Button } from '@/app/_components/button';
import { sendMessageAction } from '@/app/_lib/actions/messages-action';

export function UserMessage({
   userId,
   userEmail,
}: {
   userId: number | undefined;
   userEmail: string | undefined;
}) {
   const handleSubmit = async (formData: FormData) => {
      'use server';
      await sendMessageAction(formData);
   };

   return (
      <div className='max-w-md mx-auto'>
         <h1 className='text-3xl font-bold my-6 text-gray-800'>
            Feel free to contact us with any questions
         </h1>
         <form action={handleSubmit}>
            <input
               type='number'
               id='user_id'
               name='user_id'
               value={userId}
               hidden
               readOnly
            />
            <input
               type='email'
               id='user_email'
               name='user_email'
               value={userEmail}
               hidden
               readOnly
            />
            <textarea
               name='message'
               id='message'
               className='w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary mb-4'
               placeholder='Enter your message here'
               required
            ></textarea>
            <Button type='submit' fullWidth>
               Send
            </Button>
         </form>
      </div>
   );
}
