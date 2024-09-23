'use client';

import { Button } from '@/app/_components/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Filter() {
   const searchParams = useSearchParams();
   const router = useRouter();
   const pathname = usePathname();

   function handleFilter(filter: string) {
      const params = new URLSearchParams(searchParams);
      params.set('capacity', filter);
      router.replace(`${pathname}?${params.toString()}`);
   }

   return (
      <div className='flex gap-2 p-4 items-center justify-end'>
         <h3 className='text-lg font-semibold'>
            What capacity are you looking for
         </h3>
         <Button onClick={() => handleFilter('all')} size='large'>
            All
         </Button>
         <Button onClick={() => handleFilter('small')} size='large'>
            1-2
         </Button>
         <Button onClick={() => handleFilter('medium')} size='large'>
            3-5
         </Button>
         <Button onClick={() => handleFilter('large')} size='large'>
            6+
         </Button>
      </div>
   );
}
