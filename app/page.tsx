import { Amenities } from '@/app/_components/amenities';
import { BookLink } from '@/app/_components/book-link';
import { GuestTestimonials } from '@/app/_components/guest-testimonials';
import { Hero } from '@/app/_components/hero';
import { HomeAbout } from '@/app/_components/home-about';

export default function Home() {
   return (
      <div className='md:p-8 mx-auto max-w-7xl'>
         <Hero />
         <HomeAbout />
         <Amenities />
         <GuestTestimonials />
         <BookLink />
      </div>
   );
}
