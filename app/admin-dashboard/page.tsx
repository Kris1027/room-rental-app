import { getReservations } from '@/app/_lib/reservations-api';
import { getRooms } from '@/app/_lib/rooms-api';
import { getUsers } from '@/app/_lib/users-api';
import { auth } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaRegCalendarCheck, FaUser } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdBedroomChild } from 'react-icons/md';

export default async function AdminDashboard() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   const users = await getUsers();
   const rooms = await getRooms();
   const reservations = await getReservations();

   let messages = 11;

   return (
      <div className='grid grid-cols-1 gap-2 p-2 text-md sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:p-4 xl:grid-cols-5'>
         <Link
            href='/admin-dashboard/users'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-orange-500 text-white'
         >
            <span>
               <FaUser size={64} />
            </span>
            <span>{users && users.length} Users</span>
         </Link>
         <Link
            href='/admin-dashboard/rooms'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-red-500 text-white'
         >
            <span>
               <MdBedroomChild size={64} />
            </span>
            <span>{rooms && rooms.length} Rooms</span>
         </Link>
         <Link
            href='/admin-dashboard/reservations'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-blue-500 text-white'
         >
            <span>
               <FaRegCalendarCheck size={64} />
            </span>
            <span>{reservations && reservations.length} Reservations</span>
         </Link>
         <Link
            href='/admin-dashboard/messages'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-green-500 text-white'
         >
            <span>
               <FaMessage size={64} />
            </span>
            <span>
               {messages} Message
               {messages === 1 ? '' : 's'}
            </span>
         </Link>
         <Link
            href='/admin-dashboard/settings'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-indigo-500 text-white'
         >
            <span>
               <IoSettingsSharp size={64} />
            </span>
            <span>Settings</span>
         </Link>
      </div>
   );
}
