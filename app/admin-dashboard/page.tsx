import { reservations } from '@/app/fake-data/reservations';
import { MdBedroomChild } from 'react-icons/md';
import { rooms } from '@/app/fake-data/rooms';
import { users } from '@/app/fake-data/users';
import { FaUser, FaRegCalendarCheck } from 'react-icons/fa';
import Link from 'next/link';
import { FaMessage } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';

export default function AdminDashboard() {
   const totalUsers = users.length;
   const totalRooms = rooms.length;
   const totalReservations = reservations.length;
   const totalMessages = 10;

   return (
      <div className='grid grid-cols-3 gap-4 p-4'>
         <Link
            href='/admin-dashboard/users'
            className='flex justify-between items-center p-10 border-slate-400 border-2'
         >
            <span>
               <FaUser size={64} />
            </span>
            <span>{totalUsers} Users</span>
         </Link>
         <Link
            href='/admin-dashboard/rooms'
            className='flex justify-between items-center p-10 border-slate-400 border-2'
         >
            <span>
               <MdBedroomChild size={64} />
            </span>
            <span>{totalRooms} Rooms</span>
         </Link>
         <Link
            href='/admin-dashboard/reservations'
            className='flex justify-between items-center p-10 border-slate-400 border-2'
         >
            <span>
               <FaRegCalendarCheck size={64} />
            </span>
            <span>{totalReservations} Reservations</span>
         </Link>
         <Link
            href='/admin-dashboard/messages'
            className='flex justify-between items-center p-10 border-slate-400 border-2'
         >
            <span>
               <FaMessage size={64} />
            </span>
            <span>{totalMessages} Messages</span>
         </Link>
         <Link
            href='/admin-dashboard/settings'
            className='flex justify-between items-center p-10 border-slate-400 border-2'
         >
            <span>
               <IoSettingsSharp size={64} />
            </span>
            <span>Settings</span>
         </Link>
      </div>
   );
}
