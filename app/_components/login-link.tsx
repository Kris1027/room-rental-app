import { Link } from 'next-view-transitions';
import { FaUser } from 'react-icons/fa';

export function LoginLink() {
   return (
      <Link
         className='flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center text-amber-800 hover:bg-amber-500 hover:text-white'
         href={'/login'}
      >
         <FaUser size={24} />
         <span>Sign in</span>
      </Link>
   );
}
