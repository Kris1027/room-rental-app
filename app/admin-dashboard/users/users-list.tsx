import { usersProps } from '@/app/types/data-types';
import { UserDetails } from './user-details';

export function UsersList({ users }: { users: usersProps[] }) {
   return (
      <tbody>
         {users &&
            users.map((user) => <UserDetails key={user.id} user={user} />)}
      </tbody>
   );
}
