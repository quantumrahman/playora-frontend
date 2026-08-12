'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import signupValidationSchema from '@/schema/SignupSchema/SignupSchema';

export default function SignupForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupValidationSchema),
    });

    const handleFormSubmit = (form) => {
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="w-full flex flex-col items-center">
                <label htmlFor="name" className="w-full text-sm text-[#F4F4F5] font-medium">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    aria-label="input"
                    role="input"
                    {...register('name')}
                    placeholder="Your name"
                    className={`w-full border rounded-lg py-2 px-3 text-[#797C7C] outline-none text-sm font-normal mt-2 transition-all duration-200 ease-linear ${errors?.name ? 'border-red-500 ring-red-500/20 ring-3 caret-red-500' : 'border-[#272F30] focus:ring-3 focus:border-green-500 focus:ring-green-500/20 caret-green-500'}`}
                />
                <span className="w-full block h-3 text-sm text-red-500 font-normal text-right my-0.5">
                    {errors?.name && errors?.name?.message}
                </span>
            </div>
            <div className="w-full flex flex-col items-center">
                <label htmlFor="photo" className="w-full text-sm text-[#F4F4F5] font-medium">
                    Photo
                </label>
                <input
                    id="photo"
                    type="text"
                    aria-label="input"
                    role="input"
                    {...register('photo')}
                    placeholder="Your photo url"
                    className={`w-full border rounded-lg py-2 px-3 text-[#797C7C] outline-none text-sm font-normal mt-2 transition-all duration-200 ease-linear ${errors?.photo ? 'border-red-500 ring-red-500/20 ring-3 caret-red-500' : 'border-[#272F30] focus:ring-3 focus:border-green-500 focus:ring-green-500/20 caret-green-500'}`}
                />
                <span className="w-full block h-3 text-sm text-red-500 font-normal text-right my-0.5">
                    {errors?.photo && errors?.photo?.message}
                </span>
            </div>
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
                    placeholder="Create a password"
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
