"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md backdrop-blur-xl  rounded-2xl shadow-2xl p-6">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input mt-1 w-full px-4 py-3 rounded-lg  border  focus:outline-none focus:ring-2 input-bordered "
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered mt-1 w-full px-4 py-3 rounded-lg  border  focus:outline-none focus:ring-2 pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>

              <a href="#" className="link link-primary">
                Forgot password?
              </a>
            </div>

            {/* Login Button (No Functionality) */}
            <button
              type="button"
              className="w-full py-3 rounded-lg btn btn-primary  font-semibold hover: transition duration-300 shadow-lg"
            >
              Login
            </button>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Button */}
            <button
              type="button"
              className="btn btn-primary btn-outline rounded-lg w-full flex gap-2"
            >
              <FaGoogle />
              Continue with Google
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
