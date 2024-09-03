export function UsersColumns() {
   return (
      <>
         {['ID', 'Created At', 'Full Name', 'Email', 'Is Admin', 'Actions'].map(
            (header) => (
               <th key={header} scope='col' className='px-4 py-2'>
                  {header}
               </th>
            )
         )}
      </>
   );
}
