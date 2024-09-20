import { getMessages } from '@/app/_lib/messages';
import { getReservations } from '@/app/_lib/reservations-api';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import type {
   messagesProps,
   reservationsProps,
   roomsProps,
   usersProps,
} from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FiCalendar, FiKey, FiMessageCircle, FiUser } from 'react-icons/fi';

export const metadata: Metadata = {
   title: 'Admin Dashboard',
};

type AdminDashboardLinksProps = {
   name: string;
   path: string;
   background: string;
   icon: React.ReactNode;
   data: usersProps[] | roomsProps[] | reservationsProps[] | messagesProps[];
};

const DashboardCard = ({ item }: { item: AdminDashboardLinksProps }) => {
   return (
      <Link href={item.path}>
         <div className='bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
            <div
               className={`${item.background} text-white p-4 rounded-full inline-block mb-4`}
            >
               {item.icon}
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
               {item.name}
            </h2>
            <p className='text-4xl font-extrabold text-gray-700'>
               {item.data.length}
            </p>
            <p className='text-sm text-gray-500 mt-2'>
               Total {item.name.toLowerCase()}
            </p>
         </div>
      </Link>
   );
};

export default async function AdminDashboard() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

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
         <h1 className='text-4xl font-bold text-gray-800 mb-8'>
            Admin Dashboard
         </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {AdminDashboardLinks.map((item) => (
               <DashboardCard key={item.name} item={item} />
            ))}
         </div>
      </main>
   );
}
