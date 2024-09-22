'use client';

import { BurgerMenu } from '@/app/_components/burger-menu';
import { Logo } from '@/app/_components/logo';
import { useMobileMenu } from '@/app/contexts/mobile-menu-context';
import type { MobileMenuProps } from '@/app/types/component-types';

export function MobileMenu({ children }: MobileMenuProps) {
   const { isMenuOpen } = useMobileMenu();

   return (
      <div
         className={`flex ${
            !isMenuOpen ? 'justify-between' : 'flex-col justify-center'
         } items-center w-full`}
      >
         {!isMenuOpen && <Logo />}
         <BurgerMenu />
         {isMenuOpen && <div className='mt-4'>{children}</div>}
      </div>
   );
}
