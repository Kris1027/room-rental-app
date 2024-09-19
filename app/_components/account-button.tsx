import { getUserById } from '@/app/_lib/users-api';
import type { usersProps } from '@/app/types/data-types';
import { auth } from '@/auth';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export async function AccountButton() {
   const session = await auth();
   const userId = session?.user.userId;
   const user = (await getUserById(Number(userId))) as usersProps;

   const userName = user?.full_name;
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
