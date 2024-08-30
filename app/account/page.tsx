import { auth } from '@/auth';
import Image from 'next/image';

export default async function Account() {
   const session = await auth();
   const userImage = session?.user?.image as string;
   const userName = session?.user?.name as string;

   console.log(session);

   return (
      <div>
         <h2>Account</h2>
         {session?.user && (
            <>
               <p>{session?.user?.name}</p>
               <Image
                  src={userImage}
                  alt={userName}
                  width={100}
                  height={100}
                  referrerPolicy='no-referrer'
               />
            </>
         )}
      </div>
   );
}
