"use client";

import React, { useState } from "react";

function ProfilePage() {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("liton@islam.com");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = () => {
    let formErrors = {};

    // Validation logic
    if (!firstName.trim()) {
      formErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      formErrors.lastName = "Last name is required";
    }
    if (!dob.trim()) {
      formErrors.dob = "Date of birth is required";
    }
    if (!phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone number is invalid";
    }
    if (!gender.trim()) {
      formErrors.gender = "Gender is required";
    }
    if (!profileImage.trim()) {
      formErrors.profileImage = "Profile image is required";
    }
    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log({
        firstName,
        lastName,
        email,
        dob,
        phoneNumber,
        gender,
        profileImage,
      });
    }
  };

  return (
    <div className="p-5 border rounded w-full bg-white">
      <h2 className="text-lg font-bold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            First Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5 "
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>
        {/* Last Name */}
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Last Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5 "
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
        {/* Date of Birth */}
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Date of Birth
          </label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5 "
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {errors.dob && (
            <p className="mt-2 text-sm text-red-600">{errors.dob}</p>
          )}
        </div>
        {/* Gender */}
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Gender
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5 "
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-2 text-sm text-red-600">{errors.gender}</p>
          )}
        </div>
        {/* Profile Image */}
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Upload Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
          {errors.profileImage && (
            <p className="mt-2 text-sm text-red-600">{errors.profileImage}</p>
          )}
        </div>
        {/* Phone Number */}
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Phone Number
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5 "
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Email
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5 "
            placeholder="name@flowbite.com"
            value={email}
            readOnly
          />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {errors.email
              ? "Please correct your email address to proceed."
              : "We’ll never share your details. Read our "}
            {!errors.email && (
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Privacy Policy
              </a>
            )}
          </p>
        </div>
      </div>

      <div className="flex justify-start">
        <button
          onClick={handleSubmit}
          type="button"
          className="px-4 py-2 bg-[#395BEF] text-white rounded hover:bg-[#2349f3] focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
