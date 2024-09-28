import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { createUserAction } from '@/app/_lib/actions/users-action';
import { createUserSchema } from '@/app/_schemas/users-zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type FormFields = z.infer<typeof createUserSchema>;

export function CreateUserForm({ onCancel }: { onCancel: () => void }) {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setError,
      reset,
   } = useForm<FormFields>({
      resolver: zodResolver(createUserSchema),
   });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         formData.append(key, value);
      });
      try {
         const result = await createUserAction(formData);
         if (result === true) {
            reset();
         } else {
            setError('root', {
               type: 'manual',
               message:
                  'User already exists or there was an error creating the user.',
            });
         }
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
         className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'
      >
         <div className='flex flex-col'>
            <label
               htmlFor='full_name'
               className='text-sm font-medium text-gray-700'
            >
               Full Name
            </label>
            <input
               {...register('full_name')}
               id='full_name'
               placeholder='Full Name'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.full_name && (
               <ErrorForm>{errors.full_name.message}</ErrorForm>
            )}
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='email'
               className='text-sm font-medium text-gray-700'
            >
               Email
            </label>
            <input
               {...register('email')}
               id='email'
               placeholder='Email'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.email && <ErrorForm>{errors.email.message}</ErrorForm>}
         </div>
         <Button type='submit' disabled={isSubmitting} fullWidth>
            {isSubmitting ? 'Submitting' : 'Add New User'}
         </Button>
         <Button variant='danger' fullWidth onClick={onCancel}>
            Cancel
         </Button>
         {errors.root && <ErrorForm>{errors.root.message}</ErrorForm>}
      </form>
   );
}
