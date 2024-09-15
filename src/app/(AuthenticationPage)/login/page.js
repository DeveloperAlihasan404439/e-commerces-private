"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import login from "../../../images/login/Screenshot_1.png";
function Page() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    const newErrors = { email: "", password: "" };
    let valid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Log form data
    console.log({ email, password });

    // Clear errors if form is valid
    setErrors({ email: "", password: "" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center bg-white rounded w-11/12 md:w-10/12 my-5 md:my-8 mx-auto p-5">
      <Image
        width={500}
        height={500}
        src={login}
        alt="sign"
        className="w-full h-full"
      />
      <div className="w-full ">
        <div className="p-6 space-y-2sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div className="space-y-4 ">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-900 font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2 "
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm text-gray-900 font-bold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            {/* <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div> */}
            <button
              onClick={handleSubmit}
              className="w-full text-white bg-[#395BEF] hover:bg-[#2c52fa] focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm text-black">
              Don’t have an account yet?{" "}
              <Link
                href="/singup"
                className="font-medium text-[#395BEF] hover:underline "
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
