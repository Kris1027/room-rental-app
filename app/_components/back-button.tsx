'use client';

import { Button } from '@/app/_components/button';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export function BackButton({ fullWidth = false }: { fullWidth?: boolean }) {
   const router = useRouter();

   return (
      <Button
         fullWidth={fullWidth}
         onClick={() => router.back()}
         size='medium'
         variant='danger'
      >
         <FiArrowLeft size={24} className='mr-2' />
         Back
      </Button>
   );
}
