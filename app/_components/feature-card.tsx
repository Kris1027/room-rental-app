import { IconType } from 'react-icons';

export function FeatureCard({
   icon: Icon,
   title,
   description,
}: {
   icon: IconType;
   title: string;
   description: string;
}) {
   return (
      <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
         <Icon className='text-4xl text-blue-600 mb-4' />
         <h3 className='text-xl font-semibold mb-2'>{title}</h3>
         <p className='text-gray-600'>{description}</p>
      </div>
   );
}
