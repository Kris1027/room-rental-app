'use client';

import React, { createContext, useState, useContext } from 'react';

interface MobileMenuContextType {
   isMenuOpen: boolean;
   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
   handleOpenMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
   undefined
);

export const MobileMenuProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

   function handleOpenMenu() {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
   }

   return (
      <MobileMenuContext.Provider
         value={{ isMenuOpen, setIsMenuOpen, handleOpenMenu }}
      >
         {children}
      </MobileMenuContext.Provider>
   );
};

export const useMobileMenu = (): MobileMenuContextType => {
   const context = useContext(MobileMenuContext);
   if (context === undefined) {
      throw new Error('useMobileMenu must be used within a MobileMenuProvider');
   }
   return context;
};

export { MobileMenuContext };
