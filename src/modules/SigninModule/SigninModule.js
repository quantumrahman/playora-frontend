'use client';

import Link from 'next/link';
import SigninForm from '@/components/ui/SigninForm/SigninForm';
import { FcGoogle } from 'react-icons/fc';

export default function SigninModule() {
    return (
        <section className="w-full min-h-screen flex items-center flex-col justify-between">
            <div className="w-full flex-1 flex items-center justify-center px-5">
                <div className="w-full max-w-[420px] bg-[#0F1515] p-8 rounded-2xl border border-[#272F30]/30">
                    <div className="w-full text-center">
                        <Link href={'/'} className="text-white uppercase text-lg font-bold">
                            Play<span className="text-green-500">ora</span>
                        </Link>
                        <h3 className="text-xl font-semibold text-[#F4F4F5] mt-3">Welcome Back!</h3>
                        <p className="text-[#797C7C] text-sm font-normal mt-0.5">
                            Sign in to your Playora account
                        </p>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 border border-[#272F30] rounded-lg py-2 cursor-pointer bg-transparent transition-all duration-200 ease-linear hover:bg-[#272F30]/50 mt-5">
                        <FcGoogle />
                        <span className="text-sm text-white font-medium">Continue to Google</span>
                    </button>
                    <div className="w-full flex items-center justify-center gap-2 my-2">
                        <div className="w-full h-px bg-linear-to-l from-[#272F30] to-transparent mt-0.5"></div>
                        <span className="text-sm text-[#797C7C]">or</span>
                        <div className="w-full h-px bg-linear-to-r from-[#272F30] to-transparent mt-0.5"></div>
                    </div>
                    <SigninForm />
                    <div className="w-full text-center mt-5">
                        <p className="text-sm text-[#797C7C] font-normal">
                            Don’t have an account?{' '}
                            <Link href={'/auth/signup'} className="text-green-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit text-center py-10">
                <span className="text-sm text-[#797C7C] font-medium">
                    &copy; Copyright {new Date().getFullYear()} Playora
                </span>
            </div>
        </section>
    );
}
