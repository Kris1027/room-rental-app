import { FeatureCard } from '@/app/_components/feature-card';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
   FaConciergeBell,
   FaSwimmer,
   FaUmbrellaBeach,
   FaUtensils,
} from 'react-icons/fa';

export const metadata: Metadata = {
   title: 'About The Grand Horizon Hotel',
};

export default function About() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-4 md:p-8'>
         <section className='bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeIn'>
            <div className='relative h-96 md:h-[500px]'>
               <Image
                  src='https://tiny.pl/2f06v9n5'
                  fill
                  alt='Grand Horizon Hotel'
                  className='object-cover'
               />
            </div>

            <div className='p-8'>
               <p className='text-xl text-gray-700 mb-8 leading-relaxed animate-fadeIn'>
                  Nestled along the pristine shores of an azure coastline, The
                  Grand Horizon Hotel offers an unparalleled experience of
                  luxury and tranquility. Our five-star resort is the perfect
                  destination for travelers seeking both relaxation and
                  adventure.
               </p>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                  <FeatureCard
                     icon={FaUmbrellaBeach}
                     title='Breathtaking Views'
                     description='Enjoy panoramic vistas of the ocean and lush tropical gardens from every room.'
                  />
                  <FeatureCard
                     icon={FaConciergeBell}
                     title='Luxurious Comfort'
                     description='Experience elegance in our 200 exquisitely designed rooms and suites.'
                  />
                  <FeatureCard
                     icon={FaUtensils}
                     title='Culinary Excellence'
                     description='Indulge in gastronomic delights at our award-winning restaurants.'
                  />
                  <FeatureCard
                     icon={FaSwimmer}
                     title='Endless Activities'
                     description='From scuba diving to cultural excursions, adventure awaits at every turn.'
                  />
               </div>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn'>
                  <div>
                     <h2 className='text-2xl font-semibold mb-4'>
                        Unparalleled Luxury
                     </h2>
                     <p className='text-gray-700 mb-4'>
                        At The Grand Horizon, elegance meets comfort in our
                        exquisitely designed accommodations. Each room boasts
                        panoramic vistas, plush bedding, and state-of-the-art
                        amenities, ensuring a rejuvenating retreat for every
                        guest.
                     </p>
                     <p className='text-gray-700'>
                        Indulge your senses at our world-class spa, where
                        skilled therapists offer a variety of treatments
                        inspired by ancient wellness traditions. For the active
                        traveler, our fully equipped fitness center, infinity
                        pools, and yoga pavilion provide ample opportunities to
                        stay fit in style.
                     </p>
                  </div>
                  <div className='relative h-64 md:h-auto'>
                     <Image
                        src='https://tiny.pl/tsm53y26'
                        fill
                        alt='Luxury Suite'
                        className='object-cover rounded-lg'
                     />
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
