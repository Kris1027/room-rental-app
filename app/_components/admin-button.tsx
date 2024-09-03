import { auth } from '@/auth';
import Link from 'next/link';
import { RiAdminLine } from 'react-icons/ri';

export async function AdminButton() {
   const session = await auth();

   return (
      <>
         {session?.user && session?.user?.isAdmin && (
            <Link href={'/admin-dashboard'}>
               <li className='flex items-center gap-1'>
                  <RiAdminLine size={24} /> Admin Dashboard
               </li>
            </Link>
         )}
      </>
   );
}
