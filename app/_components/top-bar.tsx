import { Logo } from '@/app/_components/logo';
import { MobileMenu } from '@/app/_components/mobile-menu';
import { NavigationList } from '@/app/_components/navigation-list';

export function TopBar() {
   return (
      <header className='bg-gradient-to-r from-amber-100 to-amber-200 p-4 shadow-md'>
         <div className='container mx-auto flex justify-between items-center w-full'>
            <div className='hidden lg:block'>
               <Logo />
            </div>
            <div className='hidden lg:block'>
               <NavigationList />
            </div>
            <div className='lg:hidden flex items-center justify-center w-full'>
               <MobileMenu>
                  <NavigationList />
               </MobileMenu>
            </div>
         </div>
      </header>
   );
}
