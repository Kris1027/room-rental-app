import { Footer } from '@/app/_components/footer';
import { TopBar } from '@/app/_components/top-bar';
import type { Metadata } from 'next';
import './globals.css';
import { ReservationProvider } from './contexts/reservation-date-context';
import { Montserrat } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';

const montserrat = Montserrat({
   weight: ['400', '700'],
   subsets: ['latin'],
});

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
      <ViewTransitions>
         <html lang='en' className='h-full'>
            <body
               className={`${montserrat.className} flex flex-col min-h-screen`}
            >
               <TopBar />
               <main className='flex-grow flex overflow-hidden bg-gradient-to-r from-primary to-secondary'>
                  <ReservationProvider>{children}</ReservationProvider>
               </main>
               <Footer />
            </body>
         </html>
      </ViewTransitions>
   );
}
