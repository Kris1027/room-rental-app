import { z } from 'zod';

export const createRoomSchema = z.object({
   image_url: z
      .string()
      .includes('https://', { message: 'This is not a link' }),
   name: z.string().min(3, 'Name must be at least 3 characters long'),
   description: z
      .string()
      .min(50, 'Description must be at least 50 characters long'),
   regular_price: z.number().positive('Regular price should be greater than 0'),
   max_capacity: z
      .number()
      .gte(1, 'Minimum capacity is 1')
      .lte(15, 'Maximum capacity is 15'),
   discount: z
      .number()
      .nonnegative('Discount cannot be negative number but 0 is good'),
});

export const updateRoomSchema = z.object({
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
   image_url: z
      .string()
      .includes('https://', { message: 'This is not a link' }),
   name: z.string().min(3, 'Name must be at least 3 characters long'),
   description: z
      .string()
      .min(50, 'Description must be at least 50 characters long'),
   regular_price: z.number().positive('Regular price should be greater than 0'),
   max_capacity: z
      .number()
      .gte(1, 'Minimum capacity is 1')
      .lte(15, 'Maximum capacity is 15'),
   discount: z
      .number()
      .nonnegative('Discount cannot be negative number but 0 is good'),
});
