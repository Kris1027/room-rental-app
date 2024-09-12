'use client';

import Logo from '@/app/_components/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type FooterLink = {
   name: string;
   path: string;
};

const footerLinks: FooterLink[] = [
   { name: 'Terms of Service', path: '/terms' },
   { name: 'Privacy Policy', path: '/privacy' },
   { name: 'Contact', path: '/contact' },
];

export function Footer() {
   const pathname = usePathname();

   return (
      <footer className='bg-black text-white p-6'>
         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
               <Logo />
               <p className='text-sm text-gray-400'>
                  © 2024 All rights reserved
               </p>
            </div>
            <nav>
               <ul className='flex flex-wrap justify-center space-x-4'>
                  {footerLinks.map((link) => (
                     <li key={link.name}>
                        <Link
                           href={link.path}
                           className={`hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition duration-300 ${
                              pathname === link.path
                                 ? 'bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'
                                 : ''
                           }`}
                        >
                           {link.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </footer>
   );
}
