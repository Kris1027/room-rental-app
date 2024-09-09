'use client';

import { Button } from '@/app/_components/button';
import { adminDeleteUserAction } from '@/app/_lib/actions';
import { useTransition } from 'react';
import { IoTrashBin } from 'react-icons/io5';

export function DeleteButton({ userId }: { userId: number }) {
   const [isPending, startTransition] = useTransition();

   const handleDelete = async () => {
      startTransition(() => {
         adminDeleteUserAction(userId);
      });
   };

   return (
      <Button onClick={handleDelete} disabled={isPending} variant='danger'>
         <IoTrashBin />
         {isPending ? 'Deleting...' : 'Delete'}
      </Button>
   );
}
