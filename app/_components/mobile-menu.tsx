'use client';

import { useState } from 'react';
import { MobileMenuProps } from '../types/component-types';
import { BurgerMenu } from './burger-menu';
import { Logo } from './logo';

export function MobileMenu({ children }: MobileMenuProps) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div
         className={`flex ${
            !isMenuOpen ? 'justify-between' : 'flex-col justify-center'
         } items-center w-full`}
      >
         {!isMenuOpen && <Logo />}
         <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
         {isMenuOpen && <div className='mt-4'>{children}</div>}
      </div>
   );
}
