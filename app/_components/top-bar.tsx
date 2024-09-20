import { Logo } from '@/app/_components/logo';
import { NavigationList } from '@/app/_components/navigation-list';

export function TopBar() {
   return (
      <header className='bg-gradient-to-r from-amber-100 to-amber-200 p-4 shadow-md'>
         <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <Logo />
            <NavigationList />
         </div>
      </header>
   );
}
