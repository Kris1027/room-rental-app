export function ReservationsColumns() {
   return (
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group'>
         <tr>
            {[
               'ID',
               'Created At',
               'User ID',
               'Room ID',
               'Start date',
               'End date',
               'Nights',
               'Guests',
               'Total price',
               'Status',
               'Paid',
               '',
            ].map((header) => (
               <th key={header} scope='col' className='px-4 py-2'>
                  {header}
               </th>
            ))}
         </tr>
      </thead>
   );
}
