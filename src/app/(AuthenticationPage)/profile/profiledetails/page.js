"use client";
import { useState } from "react";

function ProfileDetailsPage() {
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [religion, setReligion] = useState("");
  const [nationality, setNationality] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!address) formErrors.address = "Address is required";
    if (!region) formErrors.region = "Region is required";
    if (!district) formErrors.district = "District is required";
    if (!city) formErrors.city = "City is required";
    if (!postalCode) formErrors.postalCode = "Postal Code is required";
    if (!country) formErrors.country = "Country is required";
    if (!religion) formErrors.religion = "Religion is required";
    if (!nationality) formErrors.nationality = "Nationality is required";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = {
        address,
        region,
        district,
        city,
        postalCode,
        country,
        religion,
        nationality,
      };
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <div className="p-5 border rounded w-full bg-white">
      <h2 className="text-lg font-bold mb-4">Personal Information Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Country
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {errors.country && (
            <p className="mt-2 text-sm text-red-600">{errors.country}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Division
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="Division"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          {errors.region && (
            <p className="mt-2 text-sm text-red-600">{errors.region}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            District
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          {errors.district && (
            <p className="mt-2 text-sm text-red-600">{errors.district}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            City
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && (
            <p className="mt-2 text-sm text-red-600">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Nationality
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
          {errors.nationality && (
            <p className="mt-2 text-sm text-red-600">{errors.nationality}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Religion
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="Religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          />
          {errors.religion && (
            <p className="mt-2 text-sm text-red-600">{errors.religion}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Postal Code
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          {errors.postalCode && (
            <p className="mt-2 text-sm text-red-600">{errors.postalCode}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-900 font-bold">
            Address
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#395BEF] block w-full p-2.5"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-600">{errors.address}</p>
          )}
        </div>
      </div>
      <div className=" mt-5">
        <button
          onClick={handleSubmit}
          type="submit"
          className="px-4 py-2 bg-[#395BEF] text-white rounded hover:bg-[#2349f3] focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
