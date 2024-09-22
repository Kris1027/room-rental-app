import { AccountButton } from '@/app/_components/account-button';
import { LoginLink } from '@/app/_components/login-link';
import { LogoutLink } from '@/app/_components/logout-link';
import { NavigationListItem } from '@/app/_components/navigation-list-item';
import type { NavLinks } from '@/app/types/component-types';
import { auth } from '@/auth';

export async function NavigationList() {
   const session = await auth();

   const navItems: NavLinks[] = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Rooms', path: '/rooms' },
      { name: 'Contact', path: '/contact' },
   ];

   return (
      <nav className='w-full flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 space-x-0 lg:space-x-4'>
         <ul className='flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4'>
            {navItems.map((item) => (
               <NavigationListItem key={item.name} item={item} />
            ))}
         </ul>
         <AccountButton />
         {session?.user ? <LogoutLink /> : <LoginLink />}
      </nav>
   );
}
