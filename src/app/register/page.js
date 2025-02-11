'use client'
import Image from "next/image";
import { useState } from "react";
import img from '@/app/login/login.png'
import google from '@/app/assets/companyLogo/google.png'
import facebook from '@/app/assets/companyLogo/facebook.png'


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      // Handle login logic (authentication) here
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Register now</h2>
          <p className="text-gray-600">Sign up to your account to continue.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="name"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Email Input */}
          <div className="mb-6">
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
          <div className="mb-6">
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
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <a href="/forgot-password" className="text-blue-600 hover:text-blue-700">Forgot password?</a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-2">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Media Login */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center justify-center  rounded-full shadow-md">
            <Image src={google} alt="Facebook" width={30} height={30} />
          </button>
          <button className="flex items-center justify-center rounded-full shadow-md">
            <Image src={facebook} alt="Google" width={30} height={30} />
          </button>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-2">
          <p className="text-gray-600">
            Already have an account? 
            <a href="/login" className="text-blue-600 hover:text-blue-700"> Login</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
