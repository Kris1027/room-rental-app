'use client';

import { BurgerMenuProps } from '@/app/types/component-types';

export function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
   return (
      <button
         className='flex flex-col justify-center items-center w-8 h-8'
         onClick={() => setIsOpen(!isOpen)}
      >
         <span
            className={`bg-amber-800 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${
                               isOpen
                                  ? 'rotate-45 translate-y-1'
                                  : '-translate-y-0.5'
                            }`}
         />
         <span
            className={`bg-amber-800 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm my-0.5 ${
                               isOpen ? 'opacity-0' : 'opacity-100'
                            }`}
         />
         <span
            className={`bg-amber-800 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${
                               isOpen
                                  ? '-rotate-45 -translate-y-1'
                                  : 'translate-y-0.5'
                            }`}
         />
      </button>
   );
}
