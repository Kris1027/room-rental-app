import { auth } from '@/auth';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

export async function AccountButton() {
   const session = await auth();
   const userName = session?.user?.name as string;
   const userImage = session?.user?.image as string;

   return (
      <>
         {session?.user && (
            <Link href={'/account'}>
               <li className='flex items-center space-x-1'>
                  <Image
                     className='rounded-full'
                     src={userImage}
                     width={40}
                     height={40}
                     alt='profile image'
                  />
                  <p>{userName}</p>
               </li>
            </Link>
         )}
      </>
   );
}
