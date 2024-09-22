import { BackButton } from '@/app/_components/back-button';
import { SignOutButton } from '@/app/_components/sign-out-button';
import type { Metadata } from 'next';
import { FiAlertCircle } from 'react-icons/fi';

export const metadata: Metadata = {
   title: 'Logout',
};

export default function Logout() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4 flex justify-center items-center'>
         <div className='bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-4'>
            <div className='flex items-center justify-center mb-6'>
               <FiAlertCircle size={64} className='text-yellow-500 mr-3' />
               <h2 className='text-3xl font-bold text-gray-800'>
                  Confirm Logout
               </h2>
            </div>
            <p className='text-gray-600 mb-8 text-center'>
               Are you sure you want to log out? You will need to sign in again
               to access your account.
            </p>
            <div className='flex justify-between space-x-4'>
               <BackButton />
               <SignOutButton />
            </div>
         </div>
      </main>
   );
}
