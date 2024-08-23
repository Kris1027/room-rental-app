'use client';

import Logo from '@/app/_components/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinks = {
   name: string;
   path: string;
};

const navItems: NavLinks[] = [
   { name: 'Home', path: '/' },
   { name: 'About', path: '/about' },
   { name: 'Rooms', path: '/rooms' },
   { name: 'Account', path: '/account' },
   { name: 'Admin', path: '/account/admin-dashboard' },
];

export function Navigation() {
   const pathname = usePathname();

   return (
      <nav className='bg-gray-800 text-white p-6'>
         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
               <Logo />
            </div>
            <ul className='flex flex-wrap justify-center space-x-4'>
               {navItems.map((item) => (
                  <li key={item.name}>
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
               ))}
            </ul>
         </div>
      </nav>
   );
}
