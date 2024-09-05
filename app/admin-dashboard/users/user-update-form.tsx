export function UserUpdateForm() {
   return (
      <form action=''>
         <input type='number' name='id' />
         <input type='text' name='created_at' />
         <input type='email' name='email' />
         <input type='text' name='full_name' />
         <input type='boolean' name='is_admin' />
      </form>
   );
}
