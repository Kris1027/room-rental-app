import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AdminMessages() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   return <div>Messages</div>;
}
