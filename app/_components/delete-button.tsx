'use client';

import { Button } from '@/app/_components/button';
import { useForm } from 'react-hook-form';
import { IoTrashBin } from 'react-icons/io5';

type DeleteFormInputs = {
   id: number;
};

type DeleteButtonProps = {
   id: number;
   onDelete: (id: number) => Promise<void>;
   buttonText?: string;
   loadingText?: string;
};

export function DeleteButton({
   id,
   onDelete,
   buttonText = 'Delete',
   loadingText = 'Deleting...',
}: DeleteButtonProps) {
   const {
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<DeleteFormInputs>({
      defaultValues: {
         id,
      },
   });

   const onSubmit = async (data: DeleteFormInputs) => {
      await onDelete(data.id);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Button type='submit' disabled={isSubmitting} variant='danger'>
            <IoTrashBin />
            {isSubmitting ? loadingText : buttonText}
         </Button>
      </form>
   );
}
