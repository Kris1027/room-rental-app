import { AccountLink } from '@/app/_components/account-link';
import { getUserById } from '@/app/_lib/users-api';
import type { usersProps } from '@/app/types/data-types';
import { auth } from '@/auth';

export async function AccountButton() {
   const session = await auth();
   const userId = session?.user.userId;
   const user = (await getUserById(Number(userId))) as usersProps;

   const userName = user?.full_name;
   const userImage = session?.user?.image as string;

   return (
      <>
         {session?.user && (
            <AccountLink userImage={userImage} userName={userName} />
         )}
      </>
   );
}
