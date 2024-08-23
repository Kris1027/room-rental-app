import Logo from '@/app/_components/logo';
import Link from 'next/link';

export function Footer() {
   return (
      <footer className='bg-gray-800 text-white p-6'>
         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
               <Logo />
               <p className='text-sm text-gray-400'>
                  © 2024 All rights reserved
               </p>
            </div>
            <nav>
               <ul className='flex flex-wrap justify-center space-x-4'>
                  <li>
                     <Link
                        href='/terms'
                        className='hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition duration-300'
                     >
                        Terms of Service
                     </Link>
                  </li>
                  <li>
                     <Link
                        href='/privacy'
                        className='hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition duration-300'
                     >
                        Privacy Policy
                     </Link>
                  </li>
                  <li>
                     <Link
                        href='/contact'
                        className='hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition duration-300'
                     >
                        Contact Us
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </footer>
   );
}
