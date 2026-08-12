import { z } from 'zod';

export const signupValidationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Name is required!')
        .pipe(z.string().min(2, 'Name must be 2+ chars!')),
    photo: z.string().trim().min(1, 'Photo is required!').pipe(z.url('Invalid photo URL!')),
    email: z.string().trim().min(1, 'Email is required!').pipe(z.email('Invalid email address!')),
    password: z
        .string()
        .min(1, 'Password is required!')
        .pipe(
            z
                .string()
                .min(8, 'Password must be 8+ chars!')
                .regex(/[A-Z]/, 'Need 1 uppercase!')
                .regex(/(?:.*[a-z]){2}/, 'Need 2 lowercase!')
                .regex(/\d/, 'Need 1 digit!')
                .regex(/[^A-Za-z0-9]/, 'Need 1 special char!')
        ),
});

export default signupValidationSchema;
