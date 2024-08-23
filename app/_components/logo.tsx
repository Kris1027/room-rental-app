import Link from 'next/link';

export default function Logo() {
   return (
      <Link href='/' className='text-3xl font-extrabold'>
         <h1 className='bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>
            RoomRental
            <span className='text-sm font-semibold ml-1'>App</span>
         </h1>
      </Link>
   );
}
