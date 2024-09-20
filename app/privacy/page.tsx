import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Privacy Policy',
};

export default function Privacy() {
   return (
      <main className='flex-1 w-full max-w-7xl mx-auto p-1 md:p-4'>
         <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
               1. Information We Collect
            </h2>
            <p className='mb-4'>
               We collect information you provide directly to us, such as when
               you create an account, list a room, or communicate with us. This
               may include your name, email address, phone number, and payment
               information.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
               2. How We Use Your Information
            </h2>
            <p className='mb-4'>
               We use the information we collect to provide, maintain, and
               improve our services, to process your transactions, and to
               communicate with you about your account and our services.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
               3. Information Sharing and Disclosure
            </h2>
            <p className='mb-4'>
               We do not sell your personal information. We may share your
               information with third-party service providers who perform
               services on our behalf, such as payment processing and data
               analysis.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>4. Data Security</h2>
            <p className='mb-4'>
               We take reasonable measures to help protect your personal
               information from loss, theft, misuse, and unauthorized access,
               disclosure, alteration, and destruction.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>5. Your Choices</h2>
            <p className='mb-4'>
               You may update, correct, or delete your account information at
               any time by logging into your account or contacting us. You may
               also opt out of receiving promotional communications from us by
               following the instructions in those messages.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
               6. Cookies and Similar Technologies
            </h2>
            <p className='mb-4'>
               We use cookies and similar technologies to collect information
               about your browsing activities and to personalize your experience
               on our site.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
               7. Changes to This Policy
            </h2>
            <p className='mb-4'>
               We may update this privacy policy from time to time. We will
               notify you of any changes by posting the new privacy policy on
               this page and updating the Last updated date.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>8. Contact Us</h2>
            <p className='mb-4'>
               If you have any questions about this privacy policy, please
               contact us at: privacy@roomrentalapp.com
            </p>
         </section>

         <p className='text-sm text-gray-600 mt-8'>
            Last updated: August 24, 2024
         </p>
      </main>
   );
}
