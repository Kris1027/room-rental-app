import { Link } from 'next-view-transitions';

export default function Logo() {
   return (
      <Link href='/' className='text-3xl font-extrabold mb-4 md:mb-0'>
         <h1 className='bg-gradient-to-r from-primary to-dangerHover bg-clip-text text-transparent'>
            RoomRental
            <span className='text-sm font-semibold ml-1'>App</span>
         </h1>
      </Link>
   );
}
