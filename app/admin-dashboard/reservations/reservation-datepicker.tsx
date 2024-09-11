'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function ReservationDatePicker() {
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());

   return (
      <>
         <div className='flex flex-col'>
            <label
               htmlFor='start_date'
               className='text-sm font-medium text-gray-700'
            >
               Start date
            </label>
            <DatePicker
               selected={startDate}
               onChange={(date) => date && setStartDate(date)}
               dateFormat='dd/MM/yyyy'
               minDate={startDate}
            />
         </div>
         <div className='flex flex-col'>
            <label
               htmlFor='end_date'
               className='text-sm font-medium text-gray-700'
            >
               End date
            </label>
            <DatePicker
               selected={endDate}
               onChange={(date) => date && setEndDate(date)}
               dateFormat='dd/MM/yyyy'
               minDate={startDate}
            />
         </div>
      </>
   );
}
