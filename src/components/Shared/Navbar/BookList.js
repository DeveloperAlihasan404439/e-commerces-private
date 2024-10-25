"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

function BookList() {
  const [bookListOpen, setBookListOpen] = useState(false);
  return (
    <div>
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setBookListOpen(true)}
        onMouseLeave={() => setBookListOpen(false)}
      >
        <button
          id="BookList"
          className="flex-shrink-0 z-10 focus:outline-none dark:bg-gray-700 text-[16px] flex items-center gap-2 px-3 py-1 flex-nowrap"
        >
          <FiShoppingCart />
          <div className="hidden md:flex items-center gap-1">
            Cart
            <span
              className={`transition-transform duration-500 ${
                bookListOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDown />
            </span>
          </div>
        </button>
        {bookListOpen && (
          <div className="z-1000">
            <div className="z-10 absolute top-8 right-0 w-[200px] rounded-t-[4px] bg-white shadow-lg">
              <ul className="text-xl">
                <li className="flex items-center gap-2 text-black px-4 py-1 text-[16px] bg-gray-100">
                  <FiShoppingCart />
                  <h2>Your Cart</h2>
                </li>

                <li className="flex items-center justify-between text-black px-4 py-1 text-[16px]">
                  <h2>Subtotal</h2>
                  <h2>$000</h2>
                </li>
                <li className="px-4 py-1 text-[16px] transition duration-150 bg-[#395BEF] text-white w-full flex gap-3 items-center">
                  <Link href="/cart">View Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;
