'use client';

import { useMobileMenu } from '@/app/contexts/mobile-menu-context';
import { Link } from 'next-view-transitions';
import { IoMdExit } from 'react-icons/io';

export function LogoutLink() {
   const { handleOpenMenu } = useMobileMenu();

   return (
      <Link
         onClick={handleOpenMenu}
         className='flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center text-amber-800 hover:bg-amber-500 hover:text-white'
         href={'/logout'}
      >
         <IoMdExit size={24} />
         <span>Sign out</span>
      </Link>
   );
}
