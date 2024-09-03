import { LoginLink } from '@/app/_components/login-link';
import { NavigationListItem } from '@/app/_components/navigation-list-item';
import { SignOutButton } from '@/app/_components/sign-out-button';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import { RiAdminLine } from 'react-icons/ri';

export type NavLinks = {
   name: string;
   path: string;
};

export async function NavigationList() {
   const session = await auth();
   const userName = session?.user?.name as string;
   const userImage = session?.user?.image as string;

   const navItems: NavLinks[] = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Rooms', path: '/rooms' },
   ];

   return (
      <nav>
         <ul className='flex flex-wrap justify-center items-center space-x-4'>
            {navItems.map((item) => (
               <NavigationListItem key={item.name} item={item} />
            ))}
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
            {session?.user.isAdmin && (
               <Link href={'/admin-dashboard'}>
                  <li className='flex items-center gap-1'>
                     <RiAdminLine size={24} /> Admin Dashboard
                  </li>
               </Link>
            )}
            {session?.user ? <SignOutButton /> : <LoginLink />}
         </ul>
      </nav>
   );
}
