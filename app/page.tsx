import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
   return (
      <div className='bg-gray-100 p-8 mx-auto max-w-7xl'>
         <section className='bg-cover bg-center h-96 text-white flex items-center justify-center rounded-lg bg-[url("https://tiny.pl/b58hyw-z")]'>
            <div className='bg-black/50 p-10 rounded-lg'>
               <h1 className='text-5xl font-bold mb-4'>
                  Welcome to The Grand Horizon Hotel
               </h1>
               <p className='text-xl mb-6'>
                  Experience luxury and comfort like never before.
               </p>
               <Link
                  href='/rooms'
                  className='bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition'
               >
                  Explore Our Rooms
               </Link>
            </div>
         </section>

         <section className='my-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
               About Our Hotel
            </h2>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto text-center'>
               Nestled along the pristine shores of an azure coastline, The
               Grand Horizon Hotel offers an unparalleled experience of luxury
               and tranquility. Our five-star resort, set against a backdrop of
               breathtaking ocean views and lush tropical gardens, is the
               perfect destination for travelers seeking both relaxation and
               adventure.
            </p>
         </section>

         <section className='my-12 bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
               Our Amenities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
               <div className='flex flex-col items-center justify-center text-center'>
                  <div className='relative w-full h-96 hover:opacity-90'>
                     <Image
                        src='https://tiny.pl/0dgsq16n'
                        alt='Spa'
                        className='object-cover rounded-lg'
                        fill
                     />
                  </div>
                  <h3 className='text-xl font-semibold pt-4'>
                     World-Class Spa
                  </h3>
                  <p className='text-gray-600'>
                     Indulge in luxurious treatments that rejuvenate your body
                     and mind.
                  </p>
               </div>
               <div className='flex flex-col items-center justify-center text-center'>
                  <div className='relative w-full h-96 hover:opacity-90'>
                     <Image
                        src='https://tiny.pl/hh5_n4x8'
                        alt='Dining'
                        className='object-cover rounded-lg'
                        fill
                     />
                  </div>
                  <h3 className='text-xl font-semibold pt-4'>Fine Dining</h3>
                  <p className='text-gray-600'>
                     Savor gourmet dishes crafted by our award-winning chefs.
                  </p>
               </div>
               <div className='flex flex-col items-center justify-center text-center'>
                  <div className='relative w-full h-96 hover:opacity-90'>
                     <Image
                        src='https://tiny.pl/20s6m2tp'
                        alt='Pool'
                        className='object-cover rounded-lg'
                        fill
                     />
                  </div>
                  <h3 className='text-xl font-semibold pt-4'>Infinity Pool</h3>
                  <p className='text-gray-600'>
                     Relax by our stunning infinity pool with breathtaking ocean
                     views.
                  </p>
               </div>
            </div>
         </section>

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
               className='bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-500 transition'
            >
               Book Now
            </Link>
         </section>
      </div>
   );
}
