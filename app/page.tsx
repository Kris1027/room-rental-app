import { Hero } from '@/app/_components/hero';
import HomeAbout from '@/app/_components/home-about';
import { Link } from 'next-view-transitions';
import Amenities from './_components/amenities';
import GuestTestimonials from './_components/guest-testimonials';

export default function Home() {
   return (
      <div className='md:p-8 mx-auto max-w-7xl'>
         <Hero />
         <HomeAbout />
         <Amenities />
         <GuestTestimonials />

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
