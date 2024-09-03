import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AdminSettings() {
   const session = await auth();

   if (!session?.user.isAdmin) {
      redirect('/');
   }

   return <div>Settings</div>;
}
