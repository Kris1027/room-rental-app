import Link from 'next/link';

export function LoginButton() {
   return (
      <Link
         className='bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 rounded-xl py-1 px-6'
         href={'/login'}
      >
         Login
      </Link>
   );
}
