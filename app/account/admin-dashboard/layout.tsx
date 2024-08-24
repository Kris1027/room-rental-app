import { Sidebar } from '@/app/account/admin-dashboard/sidebar';

export default function AdminLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className='flex flex-grow min-h-0'>
         <Sidebar />
         <main className='flex-grow overflow-auto'>{children}</main>
      </div>
   );
}
