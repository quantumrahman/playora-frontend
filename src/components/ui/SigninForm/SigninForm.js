'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import signinValidationSchema from '@/schema/SigninSchema/SigninSchema';

export default function SigninForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signinValidationSchema),
    });

    const handleFormSubmit = (form) => {
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="w-full flex flex-col items-center">
                <label htmlFor="email" className="w-full text-sm text-[#F4F4F5] font-medium">
                    Email address
                </label>
                <input
                    id="email"
                    type="text"
                    aria-label="input"
                    role="input"
                    {...register('email')}
                    placeholder="Email address"
                    className={`w-full border rounded-lg py-2 px-3 text-[#797C7C] outline-none text-sm font-normal mt-2 transition-all duration-200 ease-linear ${errors?.email ? 'border-red-500 ring-red-500/20 ring-3 caret-red-500' : 'border-[#272F30] focus:ring-3 focus:border-green-500 focus:ring-green-500/20 caret-green-500'}`}
                />
                <span className="w-full block h-3 text-sm text-red-500 font-normal text-right my-0.5">
                    {errors?.email && errors?.email?.message}
                </span>
            </div>
            <div className="w-full flex flex-col items-center">
                <label htmlFor="password" className="w-full text-sm text-[#F4F4F5] font-medium">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    aria-label="input"
                    role="input"
                    {...register('password')}
                    placeholder="Password"
                    className={`w-full border rounded-lg py-2 px-3 text-[#797C7C] outline-none text-sm font-normal mt-2 transition-all duration-200 ease-linear ${errors?.password ? 'border-red-500 ring-red-500/20 ring-3 caret-red-500' : 'border-[#272F30] focus:ring-3 focus:border-green-500 focus:ring-green-500/20 caret-green-500'}`}
                />
                <span className="w-full block h-3 text-sm text-red-500 font-normal text-right my-0.5">
                    {errors?.password && errors?.password?.message}
                </span>
            </div>
            <button
                type="submit"
                aria-label="button"
                role="button"
                className="w-full border border-green-500 rounded-lg py-2 text-white text-sm font-medium bg-green-500 mt-3 cursor-pointer transition-all duration-200 ease-linear hover:bg-green-600"
            >
                Continue
            </button>
        </form>
    );
}
