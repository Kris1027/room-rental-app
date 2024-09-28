'use client';
import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { sendMessageAction } from '@/app/_lib/actions/messages-action';
import { messagesSchema } from '@/app/_schemas/messages-zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';
import { z } from 'zod';

type FormFields = z.infer<typeof messagesSchema>;

export function UserMessageForm({
   userId,
   userEmail,
   hide,
}: {
   userId: number;
   userEmail: string | null | undefined;
   hide: boolean;
}) {
   const {
      register,
      handleSubmit,
      reset,
      setError,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(messagesSchema),
      defaultValues: {
         user_id: userId || 105,
         user_email: userEmail && userEmail !== 'undefined' ? userEmail : '',
      },
   });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         formData.append(key, value.toString());
      });

      try {
         await sendMessageAction(formData);
         reset();
      } catch (error) {
         console.error('Error sending message:', error);
         setError('root', {
            type: 'manual',
            message:
               error instanceof Error
                  ? error.message
                  : 'An unexpected error occurred. Please try again.',
         });
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
         <input
            {...register('user_id', { valueAsNumber: true })}
            type='number'
            id='user_id'
            readOnly
            hidden
         />
         {!hide && (
            <div>
               <label
                  htmlFor='email'
                  className='block mb-2 font-medium text-gray-700'
               >
                  Email
               </label>
               <input
                  {...register('user_email')}
                  id='user_email'
                  placeholder='Your email address'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
               />
               {errors.user_email && (
                  <ErrorForm>{errors.user_email.message}</ErrorForm>
               )}
            </div>
         )}
         <div>
            <label
               htmlFor='message'
               className='block mb-2 font-medium text-gray-700'
            >
               Message
            </label>
            <textarea
               {...register('message', { required: true })}
               id='message'
               placeholder='Your message'
               rows={4}
               className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
            />
            {errors.message && <ErrorForm>{errors.message.message}</ErrorForm>}
         </div>
         <Button
            type='submit'
            variant='success'
            className='w-full justify-center py-3'
            disabled={isSubmitting}
         >
            <IoIosSend className='mr-2' />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
         </Button>
         {errors.root && <ErrorForm>{errors.root.message}</ErrorForm>}
      </form>
   );
}
