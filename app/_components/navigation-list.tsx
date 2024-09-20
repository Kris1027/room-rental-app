import { AccountButton } from '@/app/_components/account-button';
import { LoginLink } from '@/app/_components/login-link';
import { NavigationListItem } from '@/app/_components/navigation-list-item';
import { SignOutButton } from '@/app/_components/sign-out-button';
import type { NavLinks } from '@/app/types/component-types';
import { auth } from '@/auth';

export async function NavigationList() {
   const session = await auth();

   const navItems: NavLinks[] = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Rooms', path: '/rooms' },
      { name: 'Services', path: '/terms' },
      { name: 'Contact', path: '/contact' },
   ];

   return (
      <nav className='mt-4 lg:mt-0'>
         <ul className='flex flex-wrap justify-center items-center space-x-2 lg:space-x-4'>
            {navItems.map((item) => (
               <NavigationListItem key={item.name} item={item} />
            ))}
            <li>
               <AccountButton />
            </li>
            <li>{session?.user ? <SignOutButton /> : <LoginLink />}</li>
         </ul>
      </nav>
   );
}
