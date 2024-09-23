'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FcApproval, FcCancel, FcAlarmClock } from 'react-icons/fc';

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
      className={`flex items-center gap-2 px-2 lg:px-4 py-1 lg:py-2 rounded-full transition-all text-xs lg:text-lg ${
         active
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-300'
      }`}
   >
      {children}
   </button>
);

export function ReservationsFilter() {
   const searchParams = useSearchParams();
   const router = useRouter();
   const pathname = usePathname();

   const currentFilter = searchParams.get('old') || 'no';

   function handleFilter(filter: string) {
      const params = new URLSearchParams(searchParams);
      params.set('old', filter);
      router.replace(`${pathname}?${params.toString()}`);
   }

   return (
      <div className='pb-2 lg:pb-6 flex flex-col items-end'>
         <div className='flex items-center justify-between mb-1 lg:mb-4'>
            <h3 className='text-sm lg:text-xl font-semibold text-gray-800 flex items-center gap-2'>
               <FcAlarmClock className='text-blue-600' />
               Show old reservations
            </h3>
         </div>
         <div className='flex flex-wrap gap-3'>
            <FilterButton
               onClick={() => handleFilter('yes')}
               active={currentFilter === 'yes'}
            >
               <FcApproval /> Yes
            </FilterButton>
            <FilterButton
               onClick={() => handleFilter('no')}
               active={currentFilter === 'no'}
            >
               <FcCancel /> No
            </FilterButton>
         </div>
      </div>
   );
}
