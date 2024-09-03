'use client';

import { Button } from '@/app/_components/button';
import { adminDeleteUserAction } from '@/app/_lib/actions';
import { IoTrashBin } from 'react-icons/io5';

export function DeleteButton({ userId }: { userId: number }) {
   return (
      <Button onClick={() => adminDeleteUserAction(userId)}>
         <IoTrashBin />
         <span>Delete</span>
      </Button>
   );
}
