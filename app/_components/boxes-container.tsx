export function BoxesContainer({
   children,
   title,
}: {
   children: React.ReactNode;
   title: string;
}) {
   return (
      <section className='my-12 bg-white p-2 lg:p-8 rounded-lg shadow-lg'>
         <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
            {title}
         </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8'>
            {children}
         </div>
      </section>
   );
}
