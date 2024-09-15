import { Button } from '@/app/_components/button';

export async function UserMessage({ user }: { user: number | undefined }) {
   return (
      <div>
         <h1 className='text-3xl font-bold my-6 text-gray-800'>
            Feel free to contact us with any questions
         </h1>
         <form action=''>
            <input
               type='number'
               id='user_id'
               name='user_id '
               value={user}
               hidden
               readOnly
            />
            <textarea
               name='message'
               id='message'
               className='w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
               placeholder='Enter your message here'
               required
            ></textarea>
            <Button size='large'>Send</Button>
         </form>
      </div>
   );
}
