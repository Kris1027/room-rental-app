import { Footer } from '@/app/_components/footer';
import { TopBar } from '@/app/_components/top-bar';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Montserrat } from 'next/font/google';
import { MobileMenuProvider } from './contexts/mobile-menu-context';
import './globals.css';

const montserrat = Montserrat({
   weight: ['400', '500', '700'],
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: {
      template: '%s | The Grand Horizon Hotel',
      default: 'The Grand Horizon Hotel',
   },
   keywords: 'rooms, rental, grand, hotel, horizon, booking',
   description:
      'The Grand Horizon Hotel is a 5-star hotel located in the heart of the city. We offer a range of rooms and suites for guests to enjoy their stay.',
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
               className={`${montserrat.className} bg-gradient-to-r from-blue-100 to-amber-300 flex flex-col min-h-screen`}
            >
               <MobileMenuProvider>
                  <TopBar />
                  {children}
                  <Footer />
               </MobileMenuProvider>
            </body>
         </html>
      </ViewTransitions>
   );
}
