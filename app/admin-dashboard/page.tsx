import { getMessages } from '@/app/_lib/messages';
import { getReservations } from '@/app/_lib/reservations-api';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import { DashboardCard } from '@/app/admin-dashboard/dashboard-card';
import type { AdminDashboardLinksProps } from '@/app/types/admin-types';
import type {
   messagesProps,
   reservationsProps,
   roomsProps,
   usersProps,
} from '@/app/types/data-types';
import type { Metadata } from 'next';
import { FiCalendar, FiKey, FiMessageCircle, FiUser } from 'react-icons/fi';

export const metadata: Metadata = {
   title: 'Admin Dashboard',
};

export default async function AdminDashboard() {
   const users = (await getUsers()) as usersProps[];
   const rooms = (await getRooms()) as roomsProps[];
   const reservations = (await getReservations()) as reservationsProps[];
   const messages = (await getMessages()) as messagesProps[];

   const AdminDashboardLinks: AdminDashboardLinksProps[] = [
      {
         name: 'Users',
         path: '/admin-dashboard/users',
         background: 'bg-blue-500',
         icon: <FiUser size={24} />,
         data: users,
      },
      {
         name: 'Rooms',
         path: '/admin-dashboard/rooms',
         background: 'bg-red-500',
         icon: <FiKey size={24} />,
         data: rooms,
      },
      {
         name: 'Reservations',
         path: '/admin-dashboard/reservations',
         background: 'bg-green-500',
         icon: <FiCalendar size={24} />,
         data: reservations,
      },
      {
         name: 'Messages',
         path: '/admin-dashboard/messages',
         background: 'bg-yellow-500',
         icon: <FiMessageCircle size={24} />,
         data: messages,
      },
   ];

   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {AdminDashboardLinks.map((item) => (
               <DashboardCard key={item.name} item={item} />
            ))}
         </div>
      </main>
   );
}
