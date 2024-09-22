'use client';

import { Logo } from '@/app/_components/logo';
import { socialLinks } from '@/app/_components/social-links';
import type { FooterLinkProps } from '@/app/types/component-types';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { FaEnvelope, FaFileContract, FaShieldAlt } from 'react-icons/fa';

const footerLinks: FooterLinkProps[] = [
   { name: 'Terms of Service', path: '/terms', icon: FaFileContract },
   { name: 'Privacy Policy', path: '/privacy', icon: FaShieldAlt },
   { name: 'Contact', path: '/contact', icon: FaEnvelope },
];

export function Footer() {
   const pathname = usePathname();
   const currentYear = new Date().getFullYear();

   return (
      <footer className='bg-gradient-to-r from-amber-100 to-amber-200 p-6 shadow-md'>
         <div className='container mx-auto flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start'>
            <div className='flex flex-col items-center lg:items-start'>
               <Logo />
               <p className='text-sm text-amber-800 mt-2 text-center lg:text-left'>
                  © {currentYear} All rights reserved.
                  <br className='hidden sm:inline' /> Designed & crafted with
                  love by{' '}
                  <a
                     href='https://www.linkedin.com/in/krzysztof-obarzanek/'
                     className='text-amber-600 hover:text-amber-900 font-semibold transition duration-300'
                     rel='noopener noreferrer'
                     target='_blank'
                  >
                     kris1027
                  </a>
               </p>
            </div>
            <nav className='flex flex-col items-center lg:items-end'>
               <ul className='flex flex-col sm:flex-row flex-wrap justify-center sm:space-x-4 space-y-2 sm:space-y-0'>
                  {footerLinks.map((link) => (
                     <li key={link.name}>
                        <Link
                           href={link.path}
                           className={`flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center ${
                              pathname === link.path
                                 ? 'bg-amber-600 text-white'
                                 : 'text-amber-800 hover:bg-amber-500 hover:text-white'
                           }`}
                        >
                           <link.icon />
                           {link.name}
                        </Link>
                     </li>
                  ))}
               </ul>
               <div className='mt-4 flex space-x-4'>
                  {socialLinks.map((link) => (
                     <a
                        key={link.name}
                        href={link.url}
                        className='text-amber-800 hover:text-amber-600 transition duration-300'
                        rel='noopener noreferrer'
                        target='_blank'
                        aria-label={link.name}
                     >
                        <link.icon className='w-6 h-6' />
                     </a>
                  ))}
               </div>
            </nav>
         </div>
      </footer>
   );
}
