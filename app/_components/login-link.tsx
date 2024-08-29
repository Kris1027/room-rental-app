import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export function LoginLink() {
   return (
      <Link
         className='flex items-center space-x-1 font-semibold'
         href={'/login'}
      >
         <FaUser size={24} />
         <span>Sign in</span>
      </Link>
   );
}
