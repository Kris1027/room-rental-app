import { BookLink } from '@/app/_components/book-link';
import { BoxesContainer } from '@/app/_components/boxes-container';
import { GuestTestimonials } from '@/app/_components/guest-testimonials';
import { Hero } from '@/app/_components/hero';
import { HomeAbout } from '@/app/_components/home-about';
import { ImageBox } from '@/app/_components/image-box';

export default function Home() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-0 lg:p-4 md:p-4'>
         <Hero />
         <HomeAbout />
         <BoxesContainer title='Our Amenities'>
            <ImageBox
               name='World-Class Spa'
               image='https://tiny.pl/0dgsq16n'
               alt='Spa'
               text='Indulge in luxurious treatments that rejuvenate your body and mind.'
            />
            <ImageBox
               name='Fine Dining'
               image='https://tiny.pl/hh5_n4x8'
               alt='Dining'
               text='Savor gourmet dishes crafted by our award-winning chefs.'
            />
            <ImageBox
               name='Infinity Pool'
               image='https://tiny.pl/20s6m2tp'
               alt='Pool'
               text='Relax by our stunning infinity pool with breathtaking ocean
               views.'
            />
         </BoxesContainer>
         <GuestTestimonials />
         <BookLink />
      </main>
   );
}
