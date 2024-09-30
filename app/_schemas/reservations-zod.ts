import { z } from 'zod';

export const createReservationSchema = z
   .object({
      user_id: z.number({ invalid_type_error: 'You need to select a user' }),
      room_id: z.number({ invalid_type_error: 'You need to select a room' }),
      start_date: z.date({
         required_error: 'Start date is required',
         invalid_type_error: "That's not a valid date",
      }),
      end_date: z.date({
         required_error: 'End date is required',
         invalid_type_error: "That's not a valid date",
      }),
      num_nights: z
         .number()
         .min(2, 'Minimum stay is 2 nights')
         .max(14, 'Maximum stay is 14 nights'),
      num_guests: z
         .number()
         .min(1, 'At least 1 guest is required')
         .max(15, 'Maximum 15 guests allowed'),
      total_price: z.number().min(0, 'Price cannot be negative'),
   })
   .refine((data) => data.end_date > data.start_date, {
      message: 'End date must be after start date',
      path: ['end_date'],
   });

export const updateReservationSchema = z
   .object({
      id: z.number(),
      created_at: z.date({
         required_error: 'Start date is required',
         invalid_type_error: "That's not a valid date",
      }),
      user_id: z.number({ invalid_type_error: 'You need to select a user' }),
      room_id: z.number({ invalid_type_error: 'You need to select a room' }),
      start_date: z.date({
         required_error: 'Start date is required',
         invalid_type_error: "That's not a valid date",
      }),
      end_date: z.date({
         required_error: 'End date is required',
         invalid_type_error: "That's not a valid date",
      }),
      num_nights: z
         .number()
         .min(2, 'Minimum stay is 2 nights')
         .max(14, 'Maximum stay is 14 nights'),
      num_guests: z
         .number()
         .min(1, 'At least 1 guest is required')
         .max(15, 'Maximum 15 guests allowed'),
      total_price: z.number().min(0, 'Price cannot be negative'),
      status: z.enum(['confirmed', 'unconfirmed', 'canceled', 'old']),
      is_paid: z.enum(['Yes', 'No']),
   })
   .refine((data) => data.end_date > data.start_date, {
      message: 'End date must be after start date',
      path: ['end_date'],
   });
