import { NavigationListItem } from '@/app/_components/navigation-list-item';

export type NavLinks = {
   name: string;
   path: string;
};

const navItems: NavLinks[] = [
   { name: 'Home', path: '/' },
   { name: 'About', path: '/about' },
   { name: 'Rooms', path: '/rooms' },
   { name: 'Account', path: '/account' },
   { name: 'Admin', path: '/admin-dashboard' },
];

export function NavigationList() {
   return (
      <nav>
         <ul className='flex flex-wrap justify-center space-x-4'>
            {navItems.map((item) => (
               <NavigationListItem key={item.name} item={item} />
            ))}
         </ul>
      </nav>
   );
}
