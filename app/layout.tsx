import { Footer } from '@/app/_components/footer';
import { TopBar } from '@/app/_components/top-bar';
import type { Metadata } from 'next';
import './globals.css';
import { ReservationProvider } from './contexts/reservation-date-context';

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
            <TopBar />
            <main className='flex-grow flex overflow-hidden'>
               <ReservationProvider>{children}</ReservationProvider>
            </main>
            <Footer />
         </body>
      </html>
   );
}
