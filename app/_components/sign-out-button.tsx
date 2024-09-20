import { signOutAction } from '@/app/_lib/actions';
import { IoMdExit } from 'react-icons/io';

export function SignOutButton() {
   return (
      <form action={signOutAction}>
         <button type='submit' className='flex gap-1'>
            <IoMdExit size={24} />
            <span>Sign out</span>
         </button>
      </form>
   );
}
