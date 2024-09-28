'use client';

import { Button } from '@/app/_components/button';
import { deleteUserAction } from '@/app/_lib/actions/users-action';
import { useTransition } from 'react';
import { IoTrashBin } from 'react-icons/io5';

export function DeleteUser({ userId }: { userId: number }) {
   const [isPending, startTransition] = useTransition();

   const handleDelete = async () => {
      startTransition(() => {
         deleteUserAction(userId);
      });
   };

   return (
      <Button
         onClick={handleDelete}
         disabled={isPending}
         variant='danger'
         size='small'
         fullWidth
      >
         <IoTrashBin size={16} />
         {isPending ? 'Deleting...' : 'Delete'}
      </Button>
   );
}
