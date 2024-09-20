import { Sidebar } from '@/app/admin-dashboard/sidebar';

export default function AdminLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main className='flex flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <Sidebar />
         {children}
      </main>
   );
}
