'use client';

import { useMobileMenu } from '@/app/contexts/mobile-menu-context';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export function AccountLink({
   userImage,
   userName,
}: {
   userImage: string;
   userName: string;
}) {
   const { handleOpenMenu } = useMobileMenu();

   return (
      <Link href={'/account'} onClick={handleOpenMenu}>
         <li className='flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center text-amber-800 hover:bg-amber-500 hover:text-white'>
            <Image
               className='rounded-full'
               src={userImage}
               width={40}
               height={40}
               alt='profile image'
            />
            <p>{userName}</p>
         </li>
      </Link>
   );
}
