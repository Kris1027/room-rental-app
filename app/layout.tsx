import { Footer } from '@/app/_components/footer';
import { Navigation } from '@/app/_components/navigation';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
   title: 'Room Rental App',
   description: 'Room Rental App created by kris1027',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en' className='h-full'>
         <body className='flex flex-col min-h-screen'>
            <Navigation />
            <div className='flex-grow flex overflow-hidden'>{children}</div>
            <Footer />
         </body>
      </html>
   );
}
