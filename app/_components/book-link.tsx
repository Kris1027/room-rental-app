import { Button } from '@/app/_components/button';
import { Link } from 'next-view-transitions';

export function BookLink() {
   return (
      <section className='my-12 text-center'>
         <h2 className='text-3xl font-bold text-gray-800 mb-6'>
            Ready to Book Your Stay?
         </h2>
         <p className='text-lg text-gray-700 mb-6'>
            Reserve your room today and start your journey to luxury and
            relaxation.
         </p>
         <Button variant='danger' className='mx-auto'>
            <Link href='/rooms'>Book Now</Link>
         </Button>
      </section>
   );
}
