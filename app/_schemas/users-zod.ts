import { z } from 'zod';

export const createUserSchema = z.object({
   full_name: z.string().min(3, 'Full name must be at least 3 characters long'),
   email: z.string().email('Invalid email address'),
});

export const updateUserSchema = z.object({
   id: z.number(),
   created_at: z.string().refine(
      (value) => {
         const date = new Date(value);
         return !isNaN(date.getTime());
      },
      {
         message:
            'Invalid date format. The date must include a valid offset (e.g., +00:00)',
      }
   ),
   email: z.string().email('Invalid email address'),
   full_name: z.string().min(3, 'Name must be at least 3 characters long'),
   is_admin: z.boolean(),
});
