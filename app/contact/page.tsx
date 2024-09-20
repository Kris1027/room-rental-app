import { Button } from '@/app/_components/button';
import { sendMessageAction } from '@/app/_lib/actions/messages-action';
import { Metadata } from 'next';
import { IoIosSend } from 'react-icons/io';

export const metadata: Metadata = {
   title: 'Contact',
};

export default function Contact() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>

         <div className='grid md:grid-cols-2 gap-8'>
            <div>
               <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
               <p className='mb-4'>
                  We&apos;d love to hear from you. Please fill out this form and
                  we will get in touch with you shortly.
               </p>

               <form action={sendMessageAction} className='space-y-4'>
                  <div>
                     <input
                        type='number'
                        id='user_id'
                        name='user_id'
                        required
                        readOnly
                        value={105}
                        hidden
                     />
                  </div>
                  <div>
                     <label htmlFor='email' className='block mb-1'>
                        Email
                     </label>
                     <input
                        type='email'
                        id='user_email'
                        name='user_email'
                        placeholder='Email'
                        required
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                     />
                  </div>
                  <div>
                     <label htmlFor='message' className='block mb-1'>
                        Message
                     </label>
                     <textarea
                        id='message'
                        name='message'
                        placeholder='Message'
                        required
                        rows={4}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                     ></textarea>
                  </div>
                  <Button type='submit' variant='positive'>
                     <IoIosSend />
                     <span>Send Message</span>
                  </Button>
               </form>
            </div>

            <div>
               <h2 className='text-2xl font-semibold mb-4'>
                  Contact Information
               </h2>
               <p className='mb-2'>
                  <strong>Address:</strong> 123 Room Rental Street, City,
                  Country, ZIP
               </p>
               <p className='mb-2'>
                  <strong>Phone:</strong> +1 (123) 456-7890
               </p>
               <p className='mb-2'>
                  <strong>Email:</strong> info@roomrentalapp.com
               </p>
               <p className='mb-4'>
                  <strong>Hours:</strong> Monday - Friday, 9am - 5pm
               </p>

               <h3 className='text-xl font-semibold mb-2'>Follow Us</h3>
               <div className='flex space-x-4'>
                  <a href='#' className='text-blue-500 hover:text-blue-600'>
                     Facebook
                  </a>
                  <a href='#' className='text-blue-500 hover:text-blue-600'>
                     Twitter
                  </a>
                  <a href='#' className='text-blue-500 hover:text-blue-600'>
                     Instagram
                  </a>
               </div>
            </div>
         </div>
      </main>
   );
}
