import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { updateUserAction } from '@/app/_lib/actions/users-action';
import { updateUserSchema } from '@/app/_schemas/users-zod';
import { formatDateTime } from '@/app/_utils/format-date-time';
import type { usersProps } from '@/app/types/data-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { z } from 'zod';

type FormFields = z.infer<typeof updateUserSchema>;

export function UpdateUserForm({
   user,
   setIsEditing,
}: {
   user: usersProps;
   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   const handleCancel = () => {
      setIsEditing(false);
   };

   const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(updateUserSchema),
      defaultValues: {
         id: user.id,
         created_at: formatDateTime(user.created_at),
         email: user.email,
         full_name: user.full_name,
         is_admin: user.is_admin,
      },
   });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         formData.append(key, value.toString());
      });

      try {
         await updateUserAction(formData);
         setIsEditing(false);
      } catch (error) {
         console.error('Error creating user:', error);
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
      <form
         onSubmit={handleSubmit(onSubmit)}
         className='w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden'
      >
         <div className='p-4 sm:p-6 space-y-4 sm:space-y-6'>
            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='id'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  ID
               </label>
               <div className='w-full'>
                  <input
                     {...register('id', { valueAsNumber: true })}
                     readOnly
                     id='id'
                     className='w-full px-3 sm:px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none'
                  />
                  {errors.id && <ErrorForm>{errors.id.message}</ErrorForm>}
               </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='created_at'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Created at
               </label>
               <div className='w-full'>
                  <input
                     {...register('created_at')}
                     readOnly
                     id='created_at'
                     className='w-full px-3 sm:px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none'
                  />
                  {errors.created_at && (
                     <ErrorForm>{errors.created_at.message}</ErrorForm>
                  )}
               </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='email'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Email
               </label>
               <div className='w-full'>
                  <input
                     {...register('email')}
                     id='email'
                     className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                  />
                  {errors.email && (
                     <ErrorForm>{errors.email.message}</ErrorForm>
                  )}
               </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='full_name'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Full Name
               </label>
               <div className='w-full'>
                  <input
                     {...register('full_name')}
                     id='full_name'
                     className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none font-semibold'
                  />
                  {errors.full_name && (
                     <ErrorForm>{errors.full_name.message}</ErrorForm>
                  )}
               </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
               <label
                  htmlFor='admin'
                  className='text-sm font-medium text-gray-700 sm:w-1/3'
               >
                  Admin
               </label>
               <div className='w-full'>
                  <select
                     {...register('is_admin', {
                        setValueAs: (value: string) => value === 'true',
                     })}
                     id='is_admin'
                     className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                  >
                     <option value='true'>Yes</option>
                     <option value='false'>No</option>
                  </select>
                  {errors.is_admin && (
                     <ErrorForm>{errors.is_admin.message}</ErrorForm>
                  )}
               </div>
            </div>
         </div>
         <div className='px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3'>
            <Button variant='secondary' size='small' onClick={handleCancel}>
               <FaTimes className='mr-2' />
               <span>Cancel</span>
            </Button>
            <Button
               type='submit'
               variant='success'
               size='small'
               disabled={isSubmitting}
            >
               <GrUpdate className='mr-2' />
               {isSubmitting ? 'Updating...' : 'Update'}
            </Button>
         </div>
         {errors.root && <ErrorForm>{errors.root.message}</ErrorForm>}
      </form>
   );
}
