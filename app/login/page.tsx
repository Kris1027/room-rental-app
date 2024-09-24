import { SignInButton } from '@/app/_components/sign-in-button';
import type { Metadata } from 'next';
import { Logo } from '../_components/logo';

export const metadata: Metadata = {
   title: 'Login',
};

export default function Login() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4 flex justify-center items-center'>
         <div className='bg-white p-8 rounded-lg shadow-xl max-w-xl w-full mx-4'>
            <div className='text-center mb-8'>
               <div className='py-10 scale-125'>
                  <Logo />
               </div>
               <h1 className='text-xl lg:text-4xl font-bold text-gray-800 mb-2'>
                  Welcome in The Grand Horizon Hotel
               </h1>
               <p className='text-gray-600 text-sm lg:text-base'>
                  Sign in to access your personalized experience
               </p>
            </div>

            <div className='flex justify-center'>
               <SignInButton />
            </div>

            <p className='mt-8 text-center text-sm text-gray-500'>
               Don&apos;t have an account?{' '}
               <a href='#' className='text-blue-600 hover:underline'>
                  Create one now
               </a>
            </p>
         </div>
      </main>
   );
}
