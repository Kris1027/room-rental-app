import { GetUsers } from '@/app/_lib/users-api';
import { usersProps } from '@/app/types/data-types';

export async function UsersList() {
   const users = (await GetUsers()) as usersProps[];

   return (
      <div>
         <ul className='grid grid-cols-1'>
            {users &&
               users.map((user) => (
                  <li key={user.id}>
                     <span>{user.id}</span>
                     <span>{user.created_at}</span>
                     <span>{user.full_name}</span>
                     <span>{user.email}</span>
                     <span>{user.is_admin}</span>
                  </li>
               ))}
         </ul>
      </div>
   );
}
