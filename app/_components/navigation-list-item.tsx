'use client';

import { useMobileMenu } from '@/app/contexts/mobile-menu-context';
import type { NavLinks } from '@/app/types/component-types';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

export function NavigationListItem({ item }: { item: NavLinks }) {
   const pathname = usePathname();
   const { handleOpenMenu } = useMobileMenu();

   return (
      <Link
         onClick={handleOpenMenu}
         href={item.path}
         className={`block w-full px-3 py-2 text-center lg:text-left rounded-md text-lg font-semibold transition duration-300 ${
            pathname === item.path
               ? 'bg-amber-600 text-white'
               : 'text-amber-800 hover:bg-amber-500 hover:text-white'
         }`}
      >
         {item.name}
      </Link>
   );
}
