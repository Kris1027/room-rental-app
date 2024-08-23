'use client';

import { useState } from 'react';

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('Form submitted:', formData);

      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message. We will get back to you soon!');
   };

   return (
      <div className='container mx-auto px-4 py-8'>
         <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>

         <div className='grid md:grid-cols-2 gap-8'>
            <div>
               <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
               <p className='mb-4'>
                  We&apos;d love to hear from you. Please fill out this form and
                  we will get in touch with you shortly.
               </p>

               <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                     <label htmlFor='name' className='block mb-1'>
                        Name
                     </label>
                     <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                     />
                  </div>
                  <div>
                     <label htmlFor='email' className='block mb-1'>
                        Email
                     </label>
                     <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                     ></textarea>
                  </div>
                  <button
                     type='submit'
                     className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'
                  >
                     Send Message
                  </button>
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
      </div>
   );
}
