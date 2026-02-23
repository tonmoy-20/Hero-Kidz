"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postUser(form);

    if (result?.acknowledged) {
      alert("Registration successful! Please login to continue.");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl  rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide">Create Account</h1>
          <p className="text-sm  mt-2">Join us and start your journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm ">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="mt-1 input input-bordered w-full px-4 py-3 rounded-lg  border  focus:outline-none focus:ring-2  "
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm ">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 input input-bordered w-full px-4 py-3 rounded-lg  border  focus:outline-none focus:ring-2 "
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm ">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                className="w-full input input-bordered px-4 py-3 rounded-lg  border  focus:outline-none focus:ring-2  "
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Terms */}
          {/* <div className="flex items-center text-gray-700 gap-2 text-sm ">
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-primary"
              onClick={() => setCheckTerms(checkTerms)}
            />
            <span>
              I agree to the{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </span>
          </div> */}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg btn btn-primary  font-semibold hover: transition duration-300 shadow-lg"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3  text-sm">
            <div className="flex-1 h-px "></div>
            OR
            <div className="flex-1 h-px "></div>
          </div>

          {/* Google Register */}
          <button
            type="button"
            className="w-full py-3 rounded-lg border btn btn-primary btn-outline flex items-center justify-center gap-3  transition"
          >
            <FaGoogle />
            Continue with Google
          </button>
        </form>

        {/* Login Link */}

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="link link-primary">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
