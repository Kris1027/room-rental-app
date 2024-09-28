import { z } from 'zod';

export const createUserSchema = z.object({
   full_name: z.string().min(3, 'Full name must be at least 3 characters long'),
   email: z.string().email('Invalid email address'),
});
