import { z } from 'zod';

export const messagesSchema = z.object({
   user_id: z.number(),
   user_email: z.string().email(),
   message: z.string().min(20),
});
