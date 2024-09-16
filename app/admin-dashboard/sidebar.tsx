'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItems = {
   name: string;
   path: string;
};

const navItems: NavItems[] = [
   { name: 'Home', path: '/' },
   { name: 'Dashboard', path: '/admin-dashboard' },
   { name: 'Users', path: '/admin-dashboard/users' },
   { name: 'Rooms', path: '/admin-dashboard/rooms' },
   { name: 'Reservations', path: '/admin-dashboard/reservations' },
   { name: 'Messages', path: '/admin-dashboard/messages' },
];

export function Sidebar() {
   const pathname = usePathname();
   return (
      <nav className='bg-gradient-to-r from-gray-700 to-gray-900 p-6 shadow-md text-gray-200'>
         <div className='flex flex-col'>
            <ul className='flex flex-col space-y-2'>
               {navItems.map((item) => (
                  <li key={item.name}>
                     <Link
                        href={item.path}
                        className={`block py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ${
                           pathname === item.path
                              ? 'bg-gradient-to-r from-primary to-dangerHover text-black'
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
