import { Hero } from '@/app/_components/hero';
import HomeAbout from '@/app/_components/home-about';
import { Link } from 'next-view-transitions';
import Amenities from './_components/amenities';

export default function Home() {
   return (
      <div className='md:p-8 mx-auto max-w-7xl'>
         <Hero />
         <HomeAbout />
         <Amenities />

         <section className='my-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
               What Our Guests Say
            </h2>
            <div className='space-y-8 max-w-4xl mx-auto'>
               <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <p className='text-lg text-gray-700 mb-4'>
                     The Grand Horizon Hotel exceeded all our expectations. The
                     service was impeccable, and the views were out of this
                     world!
                  </p>
                  <p className='text-right text-gray-500'>
                     - Jane Doe, Happy Guest
                  </p>
               </div>
               <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <p className='text-lg text-gray-700 mb-4'>
                     An unforgettable experience! From the luxurious rooms to
                     the world-class dining, everything was perfect.
                  </p>
                  <p className='text-right text-gray-500'>
                     - John Smith, Satisfied Traveler
                  </p>
               </div>
            </div>
         </section>

         <section className='my-12 text-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>
               Ready to Book Your Stay?
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
               Reserve your room today and start your journey to luxury and
               relaxation.
            </p>
            <Link
               href='/rooms'
               className='bg-primary text-black py-3 px-8 rounded-full font-semibold hover:bg-primaryHover transition-colors'
            >
               Book Now
            </Link>
         </section>
      </div>
   );
}
