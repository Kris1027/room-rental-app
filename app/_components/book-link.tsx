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
         <Link
            href='/rooms'
            className='bg-primary text-black py-3 px-8 rounded-full font-semibold hover:bg-primaryHover transition-colors'
         >
            Book Now
         </Link>
      </section>
   );
}
