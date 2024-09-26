type ErrorFormProps = {
   children: React.ReactNode;
};

export function ErrorForm({ children }: ErrorFormProps) {
   return (
      <p
         className='flex items-center p-2 my-2 text-sm text-red-800 border border-red-300 rounded-md bg-red-50'
         role='alert'
      >
         {children}
      </p>
   );
}
