import { signOutAction } from '@/app/_lib/actions';
import { IoMdExit } from 'react-icons/io';

export function SignOutButton() {
   return (
      <form action={signOutAction}>
         <button
            type='submit'
            className='flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center text-amber-800 hover:bg-amber-500 hover:text-white'
         >
            <IoMdExit size={24} />
            <span>Sign out</span>
         </button>
      </form>
   );
}
