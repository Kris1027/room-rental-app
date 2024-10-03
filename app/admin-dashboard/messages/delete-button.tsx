'use client';

import { Button } from '@/app/_components/button';
import { deleteMessageAction } from '@/app/_lib/actions/messages-action';
import { useForm } from 'react-hook-form';
import { IoTrashBin } from 'react-icons/io5';

interface DeleteFormInputs {
   messageId: number;
}

export function DeleteButton({ messageId }: { messageId: number }) {
   const {
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<DeleteFormInputs>({
      defaultValues: {
         messageId,
      },
   });

   const onSubmit = async (data: DeleteFormInputs) => {
      await deleteMessageAction(data.messageId);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Button type='submit' disabled={isSubmitting} variant='danger'>
            <IoTrashBin />
            {isSubmitting ? 'Deleting...' : 'Delete'}
         </Button>
      </form>
   );
}
