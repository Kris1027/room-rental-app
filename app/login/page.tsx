import { SignInButton } from '@/app/_components/sign-in-button';

export default function Login() {
   return (
      <div className='flex flex-col gap-10 mt-10 items-center mx-auto'>
         <h2 className='text-3xl font-semibold'>
            Sign in to access your account
         </h2>

         <SignInButton />
      </div>
   );
}
