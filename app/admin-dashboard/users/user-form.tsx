import { adminCreateUserAction } from '@/app/_lib/actions';

export function UserForm() {
   return (
      <form action={adminCreateUserAction}>
         <input type='text' name='full_name' placeholder='Full Name' required />
         <input type='email' name='email' placeholder='Email' required />
         <button type='submit'>Add New User</button>
      </form>
   );
}
