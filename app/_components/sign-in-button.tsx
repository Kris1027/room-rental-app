import { signInAction } from '@/app/_lib/actions';
import Image from 'next/image';

export function SignInButton() {
   return (
      <form action={signInAction} className='mx-auto'>
         <button
            type='submit'
            className='flex items-center gap-2 lg:gap-6 text-sm lg:text-lg border border-primary-300 px-4 lg:px-10 py-2 lg:py-4 font-medium'
         >
            <div className='relative'>
               <Image
                  src='https://authjs.dev/img/providers/google.svg'
                  alt='Google logo'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-6 md:h-10 object-cover'
               />
            </div>
            <span>Continue with Google</span>
         </button>
      </form>
   );
}
