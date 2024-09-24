import { Button } from '@/app/_components/button';
import { supabaseLoginAction } from '../_lib/actions/auth-supabase-action';

export function CredentialLogin() {
   return (
      <form
         action={supabaseLoginAction}
         className='w-full mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'
      >
         <div className='flex flex-col'>
            <label
               htmlFor='email'
               className='text-sm font-medium text-gray-700'
            >
               Email
            </label>
            <input
               type='email'
               name='email'
               id='email'
               placeholder='Email'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='password'
               className='text-sm font-medium text-gray-700'
            >
               Password
            </label>
            <input
               type='password'
               name='password'
               id='password'
               placeholder='Password'
               required
               className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
         </div>
         <Button type='submit' fullWidth>
            Login
         </Button>
      </form>
   );
}
