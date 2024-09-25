import { FaSpinner } from 'react-icons/fa';

export default function Loading() {
   return (
      <main className='flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto p-4 min-h-screen'>
         <h2 className='text-2xl md:text-4xl font-serif text-amber-800 mb-4 md:mb-8 text-center'>
            Grand Horizon Hotel
         </h2>
         <div className='relative w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-8'>
            <div className='absolute inset-0 border-4 border-amber-300 rounded-full animate-ping'></div>
            <div
               className='absolute inset-1 md:inset-2 border-4 border-amber-500 rounded-full animate-ping'
               style={{ animationDelay: '-0.5s' }}
            ></div>
            <div className='absolute inset-0 flex items-center justify-center'>
               <FaSpinner className='w-8 h-8 md:w-12 md:h-12 text-amber-700 animate-spin' />
            </div>
         </div>
      </main>
   );
}
