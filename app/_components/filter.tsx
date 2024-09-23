'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
   HiOutlineFilter,
   HiOutlineUser,
   HiOutlineUserGroup,
   HiOutlineUsers,
} from 'react-icons/hi';

const FilterButton = ({
   children,
   onClick,
   active,
}: {
   children: React.ReactNode;
   onClick: () => void;
   active: boolean;
}) => (
   <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
         active
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-300'
      }`}
   >
      {children}
   </button>
);

export function Filter() {
   const searchParams = useSearchParams();
   const router = useRouter();
   const pathname = usePathname();

   const currentFilter = searchParams.get('capacity') || 'all';

   function handleFilter(filter: string) {
      const params = new URLSearchParams(searchParams);
      params.set('capacity', filter);
      router.replace(`${pathname}?${params.toString()}`);
   }

   return (
      <div className='pb-6 flex flex-col items-end'>
         <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
               <HiOutlineFilter className='text-blue-600' />
               Filter by Capacity
            </h3>
         </div>
         <div className='flex flex-wrap gap-3'>
            <FilterButton
               onClick={() => handleFilter('all')}
               active={currentFilter === 'all'}
            >
               <HiOutlineUserGroup /> All
            </FilterButton>
            <FilterButton
               onClick={() => handleFilter('small')}
               active={currentFilter === 'small'}
            >
               <HiOutlineUser /> 1-2
            </FilterButton>
            <FilterButton
               onClick={() => handleFilter('medium')}
               active={currentFilter === 'medium'}
            >
               <HiOutlineUsers /> 3-5
            </FilterButton>
            <FilterButton
               onClick={() => handleFilter('large')}
               active={currentFilter === 'large'}
            >
               <HiOutlineUserGroup /> 6+
            </FilterButton>
         </div>
      </div>
   );
}
