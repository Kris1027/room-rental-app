'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItems = {
   name: string;
   path: string;
};

const navItems: NavItems[] = [
   { name: 'Home', path: '/' },
   { name: 'Dashboard', path: '/account/admin-dashboard' },
   { name: 'Users', path: '/account/admin-dashboard/users' },
   { name: 'Rooms', path: '/account/admin-dashboard/rooms' },
   { name: 'Reservations', path: '/account/admin-dashboard/reservations' },
   { name: 'Messages', path: '/account/admin-dashboard/messages' },
   { name: 'Settings', path: '/account/admin-dashboard/settings' },
];

export function Sidebar() {
   const pathname = usePathname();
   return (
      <nav className='bg-gray-800 text-white p-6 w-64 flex-shrink-0 overflow-y-auto shadow-lg'>
         <div className='flex flex-col'>
            <ul className='flex flex-col space-y-2'>
               {navItems.map((item) => (
                  <li key={item.name}>
                     <Link
                        href={item.path}
                        className={`block py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ${
                           pathname === item.path
                              ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white'
                              : 'hover:text-blue-400'
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
