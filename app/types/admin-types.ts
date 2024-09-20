import type {
   messagesProps,
   reservationsProps,
   roomsProps,
   usersProps,
} from '@/app/types/data-types';

export type AdminDashboardLinksProps = {
   name: string;
   path: string;
   background: string;
   icon: React.ReactNode;
   data: usersProps[] | roomsProps[] | reservationsProps[] | messagesProps[];
};
