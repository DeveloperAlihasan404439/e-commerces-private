"use client";
import Image from "next/image";
import { useState } from "react";
import singImage from "../../../images/login/Screenshot.png";
import Link from "next/link";
function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    let formErrors = {};

    if (!name) {
      formErrors.name = "Name is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }
    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    if (!image) {
      formErrors.image = "Profile image is required";
    }

    setErrors(formErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(formErrors).length === 0) {
      // Submit the form data
      console.log({
        name,
        email,
        password,
        confirmPassword,
        image,
      });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center bg-white rounded w-11/12 md:w-10/12 my-5 md:my-8 mx-auto p-5">
      <Image
        width={500}
        height={500}
        src={singImage}
        alt="sign"
        className="w-full h-full"
      />
      <div className="w-full">
        <div className="p-6 space-y-2 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <div className="space-y-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2"
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
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div>
              <label
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
                htmlFor="image"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />

              {errors.image && (
                <p className="text-red-500 text-xs mt-1">{errors.image}</p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full text-white bg-[#395BEF] hover:bg-[#2c52fa] focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
            <p className="text-sm text-black">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-[#395BEF]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
