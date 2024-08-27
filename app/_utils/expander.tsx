'use client';

import { useState } from 'react';

export const Expander = ({ text }: { text: string }) => {
   const [isExpanded, setIsExpanded] = useState(false);

   const toggleText = () => {
      setIsExpanded(!isExpanded);
   };

   const truncatedText =
      text.length > 100 ? `${text.substring(0, 100)}...` : text;

   return (
      <div>
         <p className='px-6 py-4'>
            {isExpanded ? text : truncatedText}
            {text.length > 100 && (
               <span
                  onClick={toggleText}
                  style={{ color: 'blue', cursor: 'pointer' }}
               >
                  {isExpanded ? ' Show less' : ' Show more'}
               </span>
            )}
         </p>
      </div>
   );
};
