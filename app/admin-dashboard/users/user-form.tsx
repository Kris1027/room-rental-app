import { Button } from '@/app/_components/button';
import { adminCreateUserAction } from '@/app/_lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
   full_name: z.string().min(3),
   email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

export function UserForm({ onCancel }: { onCancel: () => void }) {
   const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(schema),
   });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         formData.append(key, value);
      });

      try {
         await adminCreateUserAction(formData);
         console.log(formData);
      } catch (error) {
         setError('root', {
            message: 'This email is already taken',
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
               {...register('full_name', {
                  required: 'Full Name is required',
                  minLength: {
                     value: 3,
                     message: 'Full Name must have at least 3 characters',
                  },
               })}
               type='text'
               name='full_name'
               placeholder='Full Name'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.full_name && (
               <p className='text-red-500'>{errors.full_name.message}</p>
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
               {...register('email', {
                  required: 'Email is required',
                  validate: (value) => {
                     if (!value.includes('@')) {
                        return 'Email must include @';
                     }
                     return true;
                  },
               })}
               type='email'
               name='email'
               placeholder='Email'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.email && (
               <p className='text-red-500'>{errors.email.message}</p>
            )}
         </div>
         <Button type='submit' disabled={isSubmitting} fullWidth>
            {isSubmitting ? 'Submitting' : 'Add New User'}
         </Button>
         <Button variant='danger' fullWidth onClick={onCancel}>
            Cancel
         </Button>
         {errors.root && <p className='text-red-500'>{errors.root.message}</p>}
      </form>
   );
}
