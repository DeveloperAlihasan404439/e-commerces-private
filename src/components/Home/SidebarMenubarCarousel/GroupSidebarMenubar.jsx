import Link from "next/link";
import { useState } from "react";

function GroupSidebarMenubar({ title, isOpen, onClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* const location = useLocation();
    const { pathname } = location;  ${pathname.includes(router)*/

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="mb-[1px]">
      <button
        id="dropdownHoverButton"
        onClick={onClick}
        className={`text-black px-2 py-2.5 text-lg font-bold familyWeight rounded-[4px] truncate transition duration-150 hover:bg-[#395BEF] hover:text-white dark:text-white w-full flex justify-between items-center`}
      >
        {title}

        <svg
          className={`w-2.5 h-2.5 ms-3 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && title ===  "Watches" && (
        <div
          id="dropdownHover"
          className="bg-white divide-y divide-gray-100 rounded-[4px] dark:bg-gray-700 ml-3 transition-all duration-300"
        >
          <ul
            className="text-lg  text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Second Hand
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Hourglass Hideaway
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Timekeeper Retreat
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Minute Hand Manor
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isOpen && title ===  "Office Supplies" && (
        <div
          id="dropdownHover"
          className="bg-white divide-y divide-gray-100 rounded-[4px] dark:bg-gray-700 ml-3 transition-all duration-300"
        >
          <ul
            className="text-lg  text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Printer{"'"}s Pint
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Binder Bar
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Highlighter Haven
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Paper Clip Pub
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Ink & Drink Tavern
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Stapler Lounge
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isOpen && title ===  "Automotive" && (
        <div
          id="dropdownHover"
          className="bg-white divide-y divide-gray-100 rounded-[4px] dark:bg-gray-700 ml-3 transition-all duration-300"
        >
          <ul
            className="text-lg  text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Pit Stop Pub
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Gearshift Grill
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Rev & Refresh Tavern
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Clutch Lounge
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Speedway Spirits
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Turbo Tavern
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isOpen && title ===  "Health" && (
        <div
          id="dropdownHover"
          className="bg-white divide-y divide-gray-100 rounded-[4px] dark:bg-gray-700 ml-3 transition-all duration-300"
        >
          <ul
            className="text-lg  text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Wholesome Haven
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Purely Fresh Bar
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Wellness Wonders
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  The Healthy Hub
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Revive & Thrive
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/request"
                className={`block text-black px-2 py-2 my-[2px] rounded-[4px] truncate transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white`}
              >
                <span className="flex items-center gap-2 text-lg familyWeight">
                  <span className="text-xl">{/* <FaCodePullRequest /> */}</span>
                  Baby
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default GroupSidebarMenubar;
