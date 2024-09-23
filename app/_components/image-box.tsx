import Image from 'next/image';

export function ImageBox({
   name,
   image,
   alt,
   text,
}: {
   name: string;
   image: string;
   alt: string;
   text: string;
}) {
   return (
      <div className='flex flex-col items-center justify-center text-center'>
         <div className='relative'>
            <Image
               src={image}
               alt={alt}
               width={0}
               height={0}
               sizes='100vw'
               className='w-full h-96 object-cover rounded-lg'
            />
         </div>
         <h3 className='text-xl font-semibold pt-4'>{name}</h3>
         <p className='text-gray-600'>{text}</p>
      </div>
   );
}
