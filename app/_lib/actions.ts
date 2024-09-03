'use server';

import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { createUser } from './users-api';

export async function signInAction() {
   await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
   await signOut({ redirectTo: '/' });
}

export async function adminCreateUserAction(formData: FormData) {
   const full_name = formData.get('full_name') as string;
   const email = formData.get('email') as string;

   await createUser({ full_name, email });

   revalidatePath('/admin-dashboard/users');
}
