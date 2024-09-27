'use client';

import { Button } from '@/app/_components/button';
import { deleteRoomAction } from '@/app/_lib/actions/rooms-action';
import { useTransition } from 'react';
import { IoTrashBin } from 'react-icons/io5';

export function DeleteRoom({ roomId }: { roomId: number }) {
   const [isPending, startTransition] = useTransition();

   const handleDelete = async () => {
      startTransition(() => {
         deleteRoomAction(roomId);
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
         <IoTrashBin />
         {isPending ? 'Deleting...' : 'Delete'}
      </Button>
   );
}
