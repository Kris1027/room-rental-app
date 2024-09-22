import { signOutAction } from '@/app/_lib/actions';
import { IoMdExit } from 'react-icons/io';

export function MobileSignOut() {
   return (
      <form action={signOutAction}>
         <button type='submit'>
            <IoMdExit size={24} />
            <span>Sign out</span>
         </button>
      </form>
   );
}
