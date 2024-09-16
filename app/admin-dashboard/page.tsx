import { getMessages } from '@/app/_lib/messages';
import { getReservations } from '@/app/_lib/reservations-api';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import { auth } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
   FiCalendar,
   FiKey,
   FiMessageCircle,
   FiSettings,
   FiUser,
} from 'react-icons/fi';

export default async function AdminDashboard() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const users = await getUsers();
   const rooms = await getRooms();
   const reservations = await getReservations();

   let messages = await getMessages();

   return (
      <div className='grid grid-cols-1 gap-2 p-2 text-black text-md sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:p-4 xl:grid-cols-5'>
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
         <Link
            href='/admin-dashboard/settings'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-105 duration-300 bg-purple hover:bg-purpleHover'
         >
            <span>
               <FiSettings size={48} />
            </span>
            <span>Settings</span>
         </Link>
      </div>
   );
}
