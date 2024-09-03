import { AccountButton } from '@/app/_components/account-button';
import { AdminButton } from '@/app/_components/admin-button';
import { LoginLink } from '@/app/_components/login-link';
import { NavigationListItem } from '@/app/_components/navigation-list-item';
import { SignOutButton } from '@/app/_components/sign-out-button';
import { auth } from '@/auth';

export type NavLinks = {
   name: string;
   path: string;
};

export async function NavigationList() {
   const session = await auth();

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
            <AccountButton />
            <AdminButton />
            {session?.user ? <SignOutButton /> : <LoginLink />}
         </ul>
      </nav>
   );
}
