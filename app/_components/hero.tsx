import { Link } from 'next-view-transitions';

export function Hero() {
   return (
      <section className='bg-cover bg-center h-96 text-white flex items-center justify-center rounded-lg bg-[url("https://tiny.pl/b58hyw-z")]'>
         <div className='bg-black/50 p-10 rounded-lg'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>
               Welcome to The Grand Horizon Hotel
            </h1>
            <p className='text-lg md:text-xl mb-6'>
               Experience luxury and comfort like never before.
            </p>
            <Link
               href='/rooms'
               className='bg-primary text-black py-2 px-4 rounded-full font-semibold hover:bg-primaryHover transition'
            >
               Explore Our Rooms
            </Link>
         </div>
      </section>
   );
}
