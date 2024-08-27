import { GetUsers } from '@/app/_lib/users-api';
import { reservations } from '@/app/fake-data/reservations';
import Link from 'next/link';
import { FaRegCalendarCheck, FaUser } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdBedroomChild } from 'react-icons/md';
import { GetRooms } from '@/app/_lib/rooms-api';

export default async function AdminDashboard() {
   const users = await GetUsers();
   const rooms = await GetRooms();

   const totalUsers = users?.length;
   const totalRooms = rooms?.length;
   const totalReservations = reservations.length;
   let totalMessages = 10;

   return (
      <div className='grid grid-cols-1 gap-2 p-2 text-md sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:p-4 xl:grid-cols-5'>
         <Link
            href='/admin-dashboard/users'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-orange-500 text-white'
         >
            <span>
               <FaUser size={64} />
            </span>
            <span>{totalUsers} Users</span>
         </Link>
         <Link
            href='/admin-dashboard/rooms'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-red-500 text-white'
         >
            <span>
               <MdBedroomChild size={64} />
            </span>
            <span>{totalRooms} Rooms</span>
         </Link>
         <Link
            href='/admin-dashboard/reservations'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-blue-500 text-white'
         >
            <span>
               <FaRegCalendarCheck size={64} />
            </span>
            <span>{totalReservations} Reservations</span>
         </Link>
         <Link
            href='/admin-dashboard/messages'
            className='flex justify-between items-center p-4 rounded-xl hover:scale-110 duration-300 bg-green-500 text-white'
         >
            <span>
               <FaMessage size={64} />
            </span>
            <span>
               {totalMessages} Message
               {totalMessages === 1 ? '' : 's'}
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
