import Logo from '@/app/_components/logo';
import { NavigationList } from '@/app/_components/navigation-list';

export function TopBar() {
   return (
      <header className='bg-gradient-to-r from-gray-700 to-gray-900 p-6 shadow-md text-gray-200'>
         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <Logo />
            <NavigationList />
         </div>
      </header>
   );
}
