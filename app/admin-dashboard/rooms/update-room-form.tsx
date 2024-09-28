import { Button } from '@/app/_components/button';
import { ErrorForm } from '@/app/_components/error-form';
import { updateRoomAction } from '@/app/_lib/actions/rooms-action';
import { updateRoomSchema } from '@/app/_schemas/rooms-zod';
import { formatDateTime } from '@/app/_utils/format-date-time';
import type { roomsProps } from '@/app/types/data-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { z } from 'zod';

type FormFields = z.infer<typeof updateRoomSchema>;

export function UpdateRoomForm({
   room,
   setIsEditing,
}: {
   room: roomsProps;
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
      resolver: zodResolver(updateRoomSchema),
      defaultValues: {
         id: room.id,
         created_at: formatDateTime(room.created_at),
         image_url: room.image_url,
         name: room.name,
         description: room.description,
         regular_price: room.regular_price,
         max_capacity: room.max_capacity,
         discount: room.discount,
      },
   });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
         formData.append(key, value.toString());
      });

      try {
         await updateRoomAction(formData);
         setIsEditing(false);
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
         className='w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden'
      >
         <div className='p-4 sm:p-6 space-y-4 sm:space-y-6'>
            {[
               {
                  label: 'ID',
                  value: (
                     <>
                        <input
                           {...register('id')}
                           id='id'
                           className='w-full px-3 sm:px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none'
                        />
                        {errors.id && (
                           <ErrorForm>{errors.id.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Created At',
                  value: (
                     <>
                        <input
                           {...register('created_at')}
                           id='created_at'
                           className='w-full px-3 sm:px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none'
                        />
                        {errors.created_at && (
                           <ErrorForm>{errors.created_at.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Image URL',
                  value: (
                     <>
                        <input
                           {...register('image_url')}
                           id='image_url'
                           className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                        />
                        {errors.image_url && (
                           <ErrorForm>{errors.image_url.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Name',
                  value: (
                     <>
                        <input
                           {...register('name')}
                           id='name'
                           className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none font-semibold'
                        />
                        {errors.name && (
                           <ErrorForm>{errors.name.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Description',
                  value: (
                     <>
                        <textarea
                           {...register('description')}
                           id='description'
                           className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                           rows={3}
                        />
                        {errors.description && (
                           <ErrorForm>{errors.description.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Regular Price',
                  value: (
                     <>
                        <input
                           {...register('regular_price', {
                              valueAsNumber: true,
                           })}
                           id='regular_price'
                           className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                        />
                        {errors.regular_price && (
                           <ErrorForm>{errors.regular_price.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Max Capacity',
                  value: (
                     <>
                        <input
                           {...register('max_capacity', {
                              valueAsNumber: true,
                           })}
                           id='max_capacity'
                           className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                        />
                        {errors.max_capacity && (
                           <ErrorForm>{errors.max_capacity.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
               {
                  label: 'Discount',
                  value: (
                     <>
                        <input
                           {...register('discount', { valueAsNumber: true })}
                           id='discount'
                           className='w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
                        />
                        {errors.discount && (
                           <ErrorForm>{errors.discount.message}</ErrorForm>
                        )}
                     </>
                  ),
               },
            ].map(({ label, value }, index) => (
               <div
                  key={label + index}
                  className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'
               >
                  <label className='text-sm font-medium text-gray-700 sm:w-1/3'>
                     {label}
                  </label>
                  <div className='w-full sm:w-2/3'>
                     <div className='px-3 sm:px-4 py-2  rounded-md text-gray-700'>
                        {value}
                     </div>
                  </div>
               </div>
            ))}
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
