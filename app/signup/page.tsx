import { Button } from '@/app/_components/button';
import { supabaseSignupAction } from '@/app/_lib/actions/auth-supabase-action';

export default function SignUp() {
   return (
      <div className='flex-1 w-full max-w-xl mx-auto p-1 md:p-4 flex justify-center items-center'>
         <form
            action={supabaseSignupAction}
            className='w-full mx-auto p-4 bg-white shadow-md rounded-lg space-y-4'
         >
            <div className='flex flex-col'>
               <label
                  htmlFor='full_name'
                  className='text-sm font-medium text-gray-700'
               >
                  Full Name
               </label>
               <input
                  type='text'
                  name='full_name'
                  id='full_name'
                  placeholder='Full Name'
                  required
                  className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
               />
            </div>
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
            <div className='flex flex-col'>
               <label
                  htmlFor='confirm_password'
                  className='text-sm font-medium text-gray-700'
               >
                  Confirm Password
               </label>
               <input
                  type='password'
                  name='confirm_password'
                  id='confirm_password'
                  placeholder='Confirm Password'
                  required
                  className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
               />
            </div>
            <Button type='submit' fullWidth>
               Register
            </Button>
         </form>
      </div>
   );
}
