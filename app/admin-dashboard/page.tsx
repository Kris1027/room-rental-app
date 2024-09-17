import { getMessages } from '@/app/_lib/messages';
import { getReservations } from '@/app/_lib/reservations-api';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import type {
   reservationsProps,
   roomsProps,
   usersProps,
} from '@/app/types/data-types';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { redirect } from 'next/navigation';
import { FiCalendar, FiKey, FiMessageCircle, FiUser } from 'react-icons/fi';

export const metadata: Metadata = {
   title: 'Admin Dashboard',
};

export default async function AdminDashboard() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const users = (await getUsers()) as usersProps[];
   const rooms = (await getRooms()) as roomsProps[];
   const reservations = (await getReservations()) as reservationsProps[];

   let messages = await getMessages();

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
         <Link
            href='/admin-dashboard/users'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-105 duration-300 bg-primary hover:bg-primaryHover'
         >
            <span>
               <FiUser size={48} />
            </span>
            <span>{users && users.length} Users</span>
         </Link>
         <Link
            href='/admin-dashboard/rooms'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-105 duration-300 bg-danger hover:bg-dangerHover'
         >
            <span>
               <FiKey size={48} />
            </span>
            <span>{rooms && rooms.length} Rooms</span>
         </Link>
         <Link
            href='/admin-dashboard/reservations'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-105 duration-300 bg-secondary hover:bg-secondaryHover'
         >
            <span>
               <FiCalendar size={48} />
            </span>
            <span>{reservations && reservations.length} Reservations</span>
         </Link>
         <Link
            href='/admin-dashboard/messages'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-105 duration-300 bg-positive hover:bg-positiveHover'
         >
            <span>
               <FiMessageCircle size={48} />
            </span>
            <span>
               {messages && messages.length} Message
               {messages?.length === 1 ? '' : 's'}
            </span>
         </Link>
      </div>
   );
}
