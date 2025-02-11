'use client'
import Image from "next/image";
import { useState } from "react";
import img from '@/app/login/login.png';
import google from '@/app/assets/companyLogo/google.png';
import facebook from '@/app/assets/companyLogo/facebook.png';
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            setError("");
            // Handle login logic (authentication) here
        }
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-8 md:space-y-0"  data-aos="flip-up">
                {/* Left side (Login image) */}
                <div className="w-full md:w-1/2 relative">
                    <Image src={img} alt="login image" className="rounded-xl object-cover w-full h-full" />
                </div>

                {/* Right side (Login form) */}
                <div className="w-full md:w-1/2 space-y-2">
                    {/* Header */}
                    <SectionTitle title={'Welcome Back'} titleDescription={'Log in to your account to continue.'} />

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Login Button */}
                        <Button
                            type="submit"
                            className="w-full py-2 hover:bg-black hover:shadow-md hover:shadow-blue-500 bg-blue-600 text-white font-semibold rounded-lg shadow-m transition duration-200"
                        >
                            Log In
                        </Button>
                    </form>

                    {/* Forgot Password */}
                    <div className="text-center">
                        <a href="/forgot-password" className="text-blue-600 hover:text-blue-700">Forgot password?</a>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-2">
                        <hr className="w-full border-gray-300" />
                        <span className="mx-4 text-gray-500">OR</span>8
                        <hr className="w-full border-gray-300" />
                    </div>

                    {/* Social Media Login */}
                    <div className="flex justify-center space-x-4">
                        <button className="flex items-center justify-center rounded-full border p-1">
                            <Image src={google} alt="Google" width={30} height={30} />
                        </button>
                        <button className="flex items-center justify-center rounded-full  border p-1">
                            <Image src={facebook} alt="Facebook" width={30} height={30} />
                        </button>
                    </div>

                    {/* Sign up link */}
                    <div className="text-center mt-2">
                        <p className="text-gray-600">
                            Don’t have an account?
                            <a href="/register" className="text-blue-600 hover:text-blue-700"> Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
