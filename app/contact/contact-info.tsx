import { IconType } from 'react-icons';

export function ContactInfo({
   icon: Icon,
   title,
   content,
}: {
   icon: IconType;
   title: string;
   content: string;
}) {
   return (
      <div className='flex items-start mb-4'>
         <Icon className='text-blue-500 text-xl mr-3 mt-1' />
         <div>
            <h4 className='font-semibold'>{title}</h4>
            <p className='text-gray-600'>{content}</p>
         </div>
      </div>
   );
}
