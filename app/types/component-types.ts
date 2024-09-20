export type NavLinks = {
   name: string;
   path: string;
};

export type BurgerMenuProps = {
   isOpen: boolean;
   setIsOpen: (isOpen: boolean) => void;
};

export type MobileMenuProps = {
   children: React.ReactNode;
};

export type FooterLinkProps = {
   name: string;
   path: string;
   icon: React.ComponentType;
};
