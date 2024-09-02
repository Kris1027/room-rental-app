import Image from 'next/image';

export default function About() {
   return (
      <div className='max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg'>
         <h2 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
            About The Grand Horizon Hotel
         </h2>

         <div className='flex justify-center md:flex-row md:space-x-6'>
            <Image
               src='https://tiny.pl/2f06v9n5'
               width={300}
               height={200}
               alt='Hotel view'
               className='rounded-lg'
            />
            <Image
               src='https://tiny.pl/tsm53y26'
               width={300}
               height={200}
               alt='Hotel view'
               className='rounded-lg'
            />
         </div>

         <p className='text-lg text-gray-700 mt-6'>
            Nestled along the pristine shores of an azure coastline, The Grand
            Horizon Hotel offers an unparalleled experience of luxury and
            tranquility. Our five-star resort, set against a backdrop of
            breathtaking ocean views and lush tropical gardens, is the perfect
            destination for travelers seeking both relaxation and adventure.
         </p>

         <p className='text-lg text-gray-700 mt-4'>
            At The Grand Horizon, elegance meets comfort in our 200 exquisitely
            designed rooms and suites, each boasting panoramic vistas, plush
            bedding, and state-of-the-art amenities. Whether you choose a room
            with a private balcony overlooking the sea or a suite with its own
            plunge pool, every stay promises to be a rejuvenating retreat.
         </p>

         <p className='text-lg text-gray-700 mt-4'>
            Indulge your senses at our world-class spa, where skilled therapists
            offer a variety of treatments inspired by ancient wellness
            traditions. For those looking to stay active, our fully equipped
            fitness center, infinity pools, and yoga pavilion provide ample
            opportunities to maintain your routine in style.
         </p>

         <p className='text-lg text-gray-700 mt-4'>
            Gastronomy takes center stage at The Grand Horizon. Our
            award-winning chefs craft culinary masterpieces using the freshest
            local ingredients, served across our three signature restaurants.
            From a beachfront seafood grill to a rooftop fine dining experience
            under the stars, every meal is a journey of flavors.
         </p>

         <p className='text-lg text-gray-700 mt-4'>
            For the more adventurous, The Grand Horizon offers a wide array of
            activities, including scuba diving, sailing, and guided cultural
            excursions to explore the rich history and vibrant culture of the
            region. Families are also well-catered for, with a dedicated
            children’s club and a variety of family-friendly activities.
         </p>

         <p className='text-lg text-gray-700 mt-4'>
            Whether you&apos;re planning a romantic getaway, a family vacation,
            or a corporate retreat, The Grand Horizon Hotel is your gateway to a
            world of elegance and relaxation. Come and discover where luxury
            meets the horizon, and create memories that will last a lifetime.
         </p>
      </div>
   );
}
