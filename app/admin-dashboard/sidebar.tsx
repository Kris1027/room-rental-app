'use client';

import { Link } from 'next-view-transitions';
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
      <nav className='p-6'>
         <div className='flex flex-col'>
            <ul className='flex flex-col space-y-2'>
               {navItems.map((item) => (
                  <li key={item.name}>
                     <Link
                        href={item.path}
                        className={`block w-full px-3 py-2 text-center lg:text-left rounded-md text-lg font-semibold transition duration-300 ${
                           pathname === item.path
                              ? 'bg-amber-600 text-white'
                              : 'text-amber-800 hover:bg-amber-500 hover:text-white'
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
