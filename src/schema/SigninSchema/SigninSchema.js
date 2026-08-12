import { z } from 'zod';

const signinValidationSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, 'Email is required!')
        .pipe(z.email({ error: 'Invaild email address!' })),
    password: z.string().min(1, 'Password is required!'),
});

export default signinValidationSchema;
