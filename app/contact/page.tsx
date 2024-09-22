import { Button } from '@/app/_components/button';
import { socialLinks } from '@/app/_components/social-links';
import { sendMessageAction } from '@/app/_lib/actions/messages-action';
import { ContactInfo } from '@/app/contact/contact-info';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

export const metadata: Metadata = {
   title: 'Contact The Grand Horizon Hotel',
};

export default function Contact() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-4 md:p-8'>
         <section className='bg-white rounded-xl shadow-2xl overflow-hidden'>
            <div className='relative h-64 md:h-96'>
               <Image
                  src='https://tiny.pl/cmm93092'
                  alt='Grand Horizon Hotel Background'
                  layout='fill'
                  objectFit='cover'
                  className='brightness-50'
               />
               <div className='absolute inset-0 flex items-center justify-center'>
                  <h1 className='text-4xl md:text-5xl font-bold text-white text-center px-4 animate-fadeIn'>
                     Get in Touch
                  </h1>
               </div>
            </div>

            <div className='p-8'>
               <div className='grid md:grid-cols-2 gap-12'>
                  <div className='animate-fadeIn'>
                     <h2 className='text-2xl font-semibold mb-6'>
                        Send Us a Message
                     </h2>
                     <form action={sendMessageAction} className='space-y-6'>
                        <input
                           type='number'
                           id='user_id'
                           name='user_id'
                           required
                           readOnly
                           value={105}
                           hidden
                        />
                        <div>
                           <label
                              htmlFor='email'
                              className='block mb-2 font-medium text-gray-700'
                           >
                              Email
                           </label>
                           <input
                              type='email'
                              id='user_email'
                              name='user_email'
                              placeholder='Your email address'
                              required
                              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                           />
                        </div>
                        <div>
                           <label
                              htmlFor='message'
                              className='block mb-2 font-medium text-gray-700'
                           >
                              Message
                           </label>
                           <textarea
                              id='message'
                              name='message'
                              placeholder='Your message'
                              required
                              rows={4}
                              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                           ></textarea>
                        </div>
                        <Button
                           type='submit'
                           variant='success'
                           className='w-full justify-center py-3'
                        >
                           <IoIosSend className='mr-2' />
                           <span>Send Message</span>
                        </Button>
                     </form>
                  </div>

                  <div className='animate-fadeIn'>
                     <h2 className='text-2xl font-semibold mb-6'>
                        Contact Information
                     </h2>
                     <ContactInfo
                        icon={FaMapMarkerAlt}
                        title='Address'
                        content='123 Grand Horizon Street, Luxury City, Paradise Island, 12345'
                     />
                     <ContactInfo
                        icon={FaPhone}
                        title='Phone'
                        content='+1 (800) GRAND-HORIZON'
                     />
                     <ContactInfo
                        icon={FaEnvelope}
                        title='Email'
                        content='info@grandhorizonhotel.com'
                     />
                     <ContactInfo
                        icon={FaClock}
                        title='Hours'
                        content="24/7 - We're Always Here for You"
                     />

                     <h3 className='text-xl font-semibold mt-8 mb-4'>
                        Connect With Us
                     </h3>
                     <div className='flex space-x-6'>
                        {socialLinks.map((link) => (
                           <a
                              key={link.name}
                              href={link.url}
                              className='text-blue-500 hover:text-blue-600 transition duration-300'
                              rel='noopener noreferrer'
                              target='_blank'
                              aria-label={link.name}
                           >
                              <link.icon className='w-6 h-6' />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
