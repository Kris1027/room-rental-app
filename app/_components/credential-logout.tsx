import { IoMdExit } from 'react-icons/io'; // Import the logout icon from react-icons
import { supabaseLogoutAction } from '../_lib/actions/auth-supabase-action';

export function CredentialLogout() {
   return (
      <form action={supabaseLogoutAction}>
         <button
            type='submit'
            className='flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center text-amber-800 hover:bg-amber-500 hover:text-white'
         >
            <IoMdExit className='mr-2' size={24} />
            Credential Logout
         </button>
      </form>
   );
}
