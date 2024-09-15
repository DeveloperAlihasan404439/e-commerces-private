"use client";

import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function ReviewsAdded() {
  const [reviewsAdded, setReviewsAdded] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        images: "You can upload a maximum of 5 images.",
      }));
    } else {
      setImages(files);
      setErrors((prevErrors) => ({
        ...prevErrors,
        images: "",
      }));
    }
  };

  const handleSetData = () => {
    let formErrors = {};

    // Validate inputs
    if (rating === 0) formErrors.rating = "Rating is required.";
    if (!message) formErrors.message = "Message is required.";
    if (images.length === 0) formErrors.images = "At least one image is required.";

    // If there are errors, update the state and stop submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Log the data to the console
    console.log("Rating:", rating);
    console.log("Message:", message);
    console.log("Images:", images);

    // Reset errors and clear fields
    setErrors({});
    setRating(0);
    setMessage("");
    setImages([]);

    // Close modal
    setReviewsAdded(false);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <button
        onClick={() => setReviewsAdded(!reviewsAdded)}
        className="px-4 py-2 border-2 border-[#395bef] text-lg rounded bg-[#395bef] text-white font-semibold cursor-pointer"
      >
        Add Comment
      </button>
      {reviewsAdded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div
            className="bg-white rounded shadow-lg p-6 transform transition-transform duration-300 w-11/12 md:w-8/12 lg:w-5/12 xl:w-5/12 space-y-4"
            style={{ animation: "slideDown 0.3s forwards" }}
          >
            {/* Rating Input Field */}
            <div className="space-y-2">
              <label 
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold">
                Rating
              </label>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={`cursor-pointer text-xl ${
                      index < rating ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    {index < rating ? <FaStar /> : <FaRegStar />}
                  </div>
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-600 text-sm">{errors.rating}</p>
              )}
            </div>

            {/* Message Input Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full p-2 border border-[#395bef] rounded shadow-sm sm:text-sm"
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Image Upload Field */}
            <div className="space-y-2">
              <label
                htmlFor="images"
                className="block mb-1 text-sm text-gray-900 dark:text-white font-bold"
              >
                Upload Images (up to 5)
              </label>
              <input
                type="file"
                name="images"
                id="images"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              {errors.images && (
                <p className="text-red-600 text-sm">{errors.images}</p>
              )}
            </div>

            <div className="flex justify-start pt-4">
              <button
                onClick={handleSetData}
                className="px-4 py-2 bg-[#395bef] text-white rounded"
              >
                Send Comment
              </button>
              <button
                onClick={() => setReviewsAdded(false)}
                className="px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ml-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewsAdded;
