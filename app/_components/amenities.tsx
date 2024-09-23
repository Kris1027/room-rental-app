import { ImageBox } from '@/app/_components/image-box';
import Image from 'next/image';

export function Amenities() {
   return (
      <section className='my-12 bg-white p-2 lg:p-8 rounded-lg shadow-lg'>
         <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
            Our Amenities
         </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8'>
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
         </div>
      </section>
   );
}
