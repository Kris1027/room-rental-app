'use client';

import { Button } from '@/app/_components/button';
import { deleteReservationAction } from '@/app/_lib/actions/reservations-action';
import { useTransition } from 'react';
import { IoTrashBin } from 'react-icons/io5';

export function DeleteReservation({
   reservationId,
}: {
   reservationId: number;
}) {
   const [isPending, startTransition] = useTransition();

   const handleDelete = async () => {
      startTransition(() => {
         deleteReservationAction(reservationId);
      });
   };

   return (
      <Button onClick={handleDelete} disabled={isPending} variant='danger'>
         <IoTrashBin />
         {isPending ? 'Deleting...' : 'Delete'}
      </Button>
   );
}
