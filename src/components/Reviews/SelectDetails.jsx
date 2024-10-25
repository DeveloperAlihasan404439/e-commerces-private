"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function SelectDetails() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(!showModal)}
        className="button px-4 py-2 border-2 border-[#395bef] rounded bg-[#395bef] text-white font-semibold cursor-pointer"
      >
        Select Details
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div
            className="bg-white rounded shadow-lg p-6 transform transition-transform duration-300 w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12 space-y-4 relative"
            style={{ animation: "slideDown 0.3s forwards" }}
          >
            <h2 className="font-bold">
              Apple iMac 24 All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
              Mac OS, Pink
            </h2>
            <div className="space-y-1">
              <p>Year Warranty</p>
              <p>Intel Core Ultra 5 processor 135U </p>
              <p>Microsoft Surface Pro 10 for Business 13 inch</p>
              <p>PixelSense Flow display 256GB SSD/8GB RAM/Intel</p>
              <p>Graphics Same-day free delivery in U.A.E 4 to 5</p>
              <div className="text-[#395BEF] text-sm">
                <p>
                  days delivery to Saudi Arabia, Bahrain, Oman, Kuwait 3 to 4
                  Days
                </p>
                <p>
                  Express Delivery to the Rest of the world Surface Pro 10 13
                  inch
                </p>
                <p>
                  Core Ultra 5 16GB RAM 256GB SSD Price Surface Pro 10 13 inch
                </p>
                <p>
                  Core Ultra 5 16GB RAM 256GB SSD Price Surface Pro 10 13 inch
                </p>
                <p>Core Ultra 5 32GB RAM 256GB SSD Price</p>
              </div>
            </div>
            <div
              onClick={() => setShowModal(false)}
              className="absolute z-50 -top-4 right-0 w-8 h-8 bg-[#395BEF] text-white flex items-center justify-center text-2xl cursor-pointer"
              style={{ borderRadius: "0 3px 0 14px" }}
            >
              <IoMdClose />
            </div>
            {/* <div className="flex justify-start pt-4">
              <button
                onClick={handleSetData}
                className="px-4 py-2 bg-[#395bef] text-white rounded"
              >
                Set Data
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ml-3"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectDetails;
