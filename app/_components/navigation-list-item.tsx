'use client';

import { type NavLinks } from '@/app/_components/navigation-list';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationListItem({ item }: { item: NavLinks }) {
   const pathname = usePathname();

   return (
      <li>
         <Link
            href={item.path}
            className={`hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition duration-300 ${
               pathname === item.path
                  ? 'bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'
                  : ''
            }`}
         >
            {item.name}
         </Link>
      </li>
   );
}
