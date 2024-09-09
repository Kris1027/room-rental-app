export function RoomsColumns() {
   return (
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group'>
         <tr>
            {[
               'ID',
               'Created At',
               'Image',
               'Name',
               'Description',
               'Regular Price',
               'Max Capacity',
               'Discount',
               'Actions',
            ].map((header) => (
               <th key={header} scope='col' className='px-4 py-2'>
                  {header}
               </th>
            ))}
         </tr>
      </thead>
   );
}
