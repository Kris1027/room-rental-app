'use client';

import { useState } from 'react';

export const Expander = ({ text }: { text: string }) => {
   const [isExpanded, setIsExpanded] = useState<boolean>(false);

   const toggleText = () => {
      setIsExpanded(!isExpanded);
   };

   const truncatedText =
      text.length > 190 ? `${text.substring(0, 190)}...` : text;

   return (
      <div>
         <p>
            {isExpanded ? text : truncatedText}
            {text.length > 190 && (
               <span
                  className='text-blue-500 cursor-pointer'
                  onClick={toggleText}
               >
                  {isExpanded ? ' less' : ' more'}
               </span>
            )}
         </p>
      </div>
   );
};
