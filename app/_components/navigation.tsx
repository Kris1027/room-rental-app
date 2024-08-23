'use client';

import Logo from '@/app/_components/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
   { name: 'Home', path: '/' },
   { name: 'About', path: '/about' },
   { name: 'Rooms', path: '/rooms' },
   { name: 'Account', path: '/account' },
   { name: 'Admin', path: '/admin' },
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
                        className={`hover:text-blue-300 transition duration-300 ${
                           pathname === item.path ? 'text-blue-300' : ''
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
