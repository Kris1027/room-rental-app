import type { AdminDashboardLinksProps } from '@/app/types/admin-types';
import { Link } from 'next-view-transitions';

export function DashboardCard({ item }: { item: AdminDashboardLinksProps }) {
   return (
      <Link href={item.path}>
         <div className='bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform lg:hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center'>
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
}
