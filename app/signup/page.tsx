import { Button } from '@/app/_components/button';
import { FaUserAlt, FaEnvelope, FaLock, FaCheckCircle } from 'react-icons/fa';
import { Logo } from '../_components/logo';

export default function SignUp() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4 flex justify-center items-center'>
         <form
            action=''
            className='bg-white px-4 lg:px-8 py-10 lg:py-20 rounded-lg shadow-xl max-w-xl w-full mx-4 space-y-4'
         >
            <div className='flex justify-center'>
               <Logo />
            </div>
            <p className='text-gray-600 text-sm lg:text-base text-center'>
               Register and start exploring our platform
            </p>
            <div className='flex flex-col gap-2'>
               <label
                  htmlFor='full_name'
                  className='text-sm font-medium text-gray-700 flex items-center'
               >
                  <FaUserAlt className='mr-2' />
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
                  className='text-sm font-medium text-gray-700 flex items-center'
               >
                  <FaEnvelope className='mr-2' />
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
                  className='text-sm font-medium text-gray-700 flex items-center'
               >
                  <FaLock className='mr-2' />
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
                  className='text-sm font-medium text-gray-700 flex items-center'
               >
                  <FaCheckCircle className='mr-2' />
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
      </main>
   );
}
