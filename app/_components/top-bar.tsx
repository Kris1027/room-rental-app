import Logo from '@/app/_components/logo';
import { NavigationList } from '@/app/_components/navigation-list';

export function TopBar() {
   return (
      <header className='bg-black text-white p-6'>
         <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <Logo />
            <NavigationList />
         </div>
      </header>
   );
}
