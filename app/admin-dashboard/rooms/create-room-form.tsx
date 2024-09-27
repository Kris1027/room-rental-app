import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { createRoomAction } from '@/app/_lib/actions/rooms-action';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
   image_url: z
      .string()
      .includes('https://', { message: 'This is not a link' }),
   name: z.string().min(3, 'Name must be at least 3 characters long'),
   description: z
      .string()
      .min(50, 'Description must be at least 50 characters long'),
   regular_price: z.number().positive('Regular price should be greater than 0'),
   max_capacity: z
      .number()
      .gte(1, 'Minimum capacity is 1')
      .lte(15, 'Maximum capacity is 15'),
   discount: z
      .number()
      .nonnegative('Discount cannot be negative number but 0 is good'),
});

type FormFields = z.infer<typeof schema>;

export function CreateRoomForm({ onCancel }: { onCancel: () => void }) {
   const {
      register,
      handleSubmit,
      reset,
      setError,
      formState: { errors, isSubmitting },
   } = useForm<FormFields>({
      resolver: zodResolver(schema),
   });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         formData.append(key, value.toString());
      });

      try {
         const result = await createRoomAction(formData);
         if (result === true) {
            reset();
         } else {
            setError('root', {
               type: 'manual',
               message:
                  'Room already exists or there was an error creating the room.',
            });
         }
      } catch (error) {
         console.error('Error creating room:', error);
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
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Image
            </label>
            <input
               {...register('image_url')}
               id='image_url'
               placeholder='image_url'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.image_url && (
               <ErrorForm>{errors.image_url.message}</ErrorForm>
            )}
         </div>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Name
            </label>
            <input
               {...register('name')}
               id='name'
               placeholder='Name'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.name && <ErrorForm>{errors.name.message}</ErrorForm>}
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='description'
               className='text-sm font-medium text-gray-700'
            >
               Description
            </label>
            <textarea
               {...register('description')}
               id='description'
               placeholder='description'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.description && (
               <ErrorForm>{errors.description.message}</ErrorForm>
            )}
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='regular_price'
               className='text-sm font-medium text-gray-700'
            >
               Regular price
            </label>
            <input
               {...register('regular_price', { valueAsNumber: true })}
               id='regular_price'
               placeholder='Regular price'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.regular_price && (
               <ErrorForm>{errors.regular_price.message}</ErrorForm>
            )}
         </div>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Max capacity
            </label>
            <input
               {...register('max_capacity', { valueAsNumber: true })}
               id='max_capacity'
               placeholder='Max capacity'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.max_capacity && (
               <ErrorForm>{errors.max_capacity.message}</ErrorForm>
            )}
         </div>
         <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
               Discount
            </label>
            <input
               {...register('discount', { valueAsNumber: true })}
               id='discount'
               placeholder='Discount'
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            {errors.discount && (
               <ErrorForm>{errors.discount.message}</ErrorForm>
            )}
         </div>
         <Button type='submit' disabled={isSubmitting} fullWidth>
            {isSubmitting ? 'Submitting' : 'Add New Room'}
         </Button>
         <Button variant='danger' fullWidth onClick={onCancel}>
            Cancel
         </Button>
         {errors.root && <ErrorForm>{errors.root.message}</ErrorForm>}
      </form>
   );
}
