"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
function Profile() {
  const [profileOpen, setProfileOpen] = useState(false);

  // outlet click close the toggle function
  useEffect(() => {
    const handleClickOutsideOperator = (event) => {
      if (!event.target.closest("#setProfileOpen")) {
        setProfileOpen(false);
      }
    };

    window.document.addEventListener("click", handleClickOutsideOperator);

    return () => {
      window.document.removeEventListener("click", handleClickOutsideOperator);
    };
  }, []);
  return (
    <div>
      <div className="relative cursor-pointer">
        <button
          id="setProfileOpen"
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex-shrink-0 z-10 focus:outline-none dark:bg-gray-700 text-[16px] flex items-center gap-2 px-3 py-1"
        >
          <FaUser />

          <div className="hidden md:flex gap-1">
            Account
            <span
              className={`transition-transform duration-500 ${
                profileOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDown />
            </span>
          </div>
        </button>
        {profileOpen && (
          <div className="z-1000">
            <div className="z-10 absolute top-8 -right-8 md:right-0 w-[200px]  rounded-t-[4px] bg-white xl shadow-lg">
              <ul className="text-xl">
                <li>
                  <Link
                    href="/login"
                    className="text-black px-4 py-1 text-[16px]  rounded-t-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3 items-center"
                  >
                    Login{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/myorder"
                    className="text-black px-4 py-1 text-[16px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3 items-center"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="text-black px-4 py-1 text-[16px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex gap-3 items-center"
                  >
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Profile;
