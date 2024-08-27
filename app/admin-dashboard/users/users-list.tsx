import { GetUsers } from '@/app/_lib/users-api';

export async function UsersList() {
   const users = await GetUsers();

   return (
      <div>
         <ul>
            {users &&
               users.map((user) => <li key={user.id}>{user.full_name}</li>)}
         </ul>
      </div>
   );
}
