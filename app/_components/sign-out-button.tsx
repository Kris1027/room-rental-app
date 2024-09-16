import { signOutAction } from '@/app/_lib/actions';
import { IoMdExit } from 'react-icons/io';

export function SignOutButton() {
   return (
      <form action={signOutAction}>
         <button
            type='submit'
            className='flex items-center space-x-1 font-semibold'
         >
            <IoMdExit size={24} />
            <span>Sign out</span>
         </button>
      </form>
   );
}
