"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import CurrencyList from "currency-list";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Profile from "./Profile";
import BookList from "./BookList";
import { FiSearch } from "react-icons/fi";
import Cookies from "js-cookie";
import { i18n, useTranslation } from "next-i18next";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [currencyList, setCurrencyListOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const asianCountries = [
    "AF",
    "AM",
    "AZ",
    "BH",
    "BD",
    "BT",
    "BN",
    "KH",
    "CN",
    "CY",
    "GE",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IL",
    "JP",
    "JO",
    "KZ",
    "KW",
    "KG",
    "LA",
    "LB",
    "MY",
    "MV",
    "MN",
    "MM",
    "NP",
    "KP",
    "OM",
    "PK",
    "PH",
    "QA",
    "SA",
    "SG",
    "KR",
    "LK",
    "SY",
    "TW",
    "TJ",
    "TH",
    "TL",
    "TM",
    "AE",
    "UZ",
    "VN",
    "YE",
  ];
  const currencies = CurrencyList.getAll("en");

  // Filter currencies by countries in Asia
  const asianCurrencies = Object.keys(currencies).filter((key) =>
    asianCountries.includes(currencies[key].code.slice(0, 2))
  );
  const changeLanguage = (lang) => {
    console.log(lang);
    const getCookies = Cookies.get("lang");
    if (getCookies) {
      Cookies.remove();
    }
    Cookies.set("lang", lang);
  };

  return (
    <div className="border-b border-[#00101f] bg-[#00101f] shadow-lg">
      <div className="w-[90%] mx-auto flex items-center justify-between py-3 relative">
        {/* Left Section */}
        <div className="w-full flex items-center gap-2">
          {/* Mobile View */}
          <div className="lg:hidden flex items-center gap-2">
            <MobileMenu />
            <Link href="/" className="font-medium">
              Flip Mart
            </Link>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                id="Currency"
                onMouseEnter={() => setCurrencyListOpen(!currencyList)}
                onMouseLeave={() => setCurrencyListOpen(!currencyList)}
                className="text-[16px] flex items-center gap-1 px-3 py-1"
              >
                <MdCurrencyExchange />
                <span>Currency</span>
                <IoIosArrowDown
                  className={`transition-transform ${
                    currencyList ? "rotate-180" : "rotate-0"
                  }`}
                />
                {currencyList && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] bg-white shadow-md shadow-[#395BEF] text-black z-30">
                    <div className="overflow-y-auto h-60">
                      {asianCurrencies.map((key, index) => (
                        <p
                          key={index}
                          className="px-4 py-2 text-[16px] hover:bg-[#395BEF] hover:text-white"
                        >
                          {currencies[key].name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                id="Languages"
                onMouseEnter={() => setLanguagesOpen(!languagesOpen)}
                onMouseLeave={() => setLanguagesOpen(!languagesOpen)}
                className="text-[16px] flex items-center gap-1 px-3 py-1"
              >
                <TbWorld />
                <span>Languages</span>
                <IoIosArrowDown
                  className={`transition-transform ${
                    languagesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                {languagesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] bg-white shadow-md text-black shadow-[#395BEF] z-30">
                    <div>
                      <button
                        onClick={() => changeLanguage("en")}
                        className="px-4 py-2 block text-[16px] hover:bg-[#395BEF] hover:text-white w-full text-left"
                      >
                        English
                      </button>
                      <button
                        onClick={() => changeLanguage("hi")}
                        className="px-4 py-2 block text-[16px] hover:bg-[#395BEF] hover:text-white w-full text-left"
                      >
                        Hindi
                      </button>
                      <button
                        onClick={() => changeLanguage("ar")}
                        className="px-4 py-2 block text-[16px] hover:bg-[#395BEF] hover:text-white w-full text-left"
                      >
                        Arabic
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search, Profile, and Whatsapp */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 lg:hidden">
            {/* Search */}
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                id="Currency"
                onMouseEnter={() => setCurrencyListOpen(!currencyList)}
                onMouseLeave={() => setCurrencyListOpen(!currencyList)}
                className="text-[16px] flex items-center gap-1 px-3 py-1"
              >
                <MdCurrencyExchange />

                <div className="hidden md:flex items-center gap-2">
                  <span>Currency</span>
                  <IoIosArrowDown
                    className={`transition-transform ${
                      currencyList ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>
              {currencyList && (
                <div className="z-40 absolute top-full -right-20 md:-right-10 text-black mt-1 w-[200px] bg-white shadow-md rounded-t">
                  <div className="overflow-y-auto h-60">
                    {asianCurrencies.map((key, index) => (
                      <p
                        key={index}
                        className="px-4 py-2 text-[16px] hover:bg-[#395BEF] hover:text-white"
                      >
                        {currencies[key].name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                id="Languages"
                onMouseEnter={() => setLanguagesOpen(!languagesOpen)}
                onMouseLeave={() => setLanguagesOpen(!languagesOpen)}
                className="text-[16px] flex items-center gap-1 px-3 py-1"
              >
                <TbWorld />
                <div className="hidden md:flex items-center gap-2">
                  <span>Languages</span>
                  <IoIosArrowDown
                    className={`transition-transform ${
                      languagesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {languagesOpen && (
                  <div className="absolute top-5 -right-5 md:-right-8 text-black mt-1 w-[200px] bg-white shadow-md z-50 rounded-t">
                    <div>
                      <button className="px-4 py-2 block text-[16px] hover:bg-[#395BEF] hover:text-white w-full text-left">
                        Bengali
                      </button>
                      <button className="px-4 py-2 block text-[16px] hover:bg-[#395BEF] hover:text-white w-full text-left">
                        Hindi
                      </button>
                      <button
                        onClick={() => changeLanguage("ar")}
                        className="px-4 py-2 block text-[16px] hover:bg-[#395BEF] hover:text-white w-full text-left"
                      >
                        Arabic
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
            <div>
              <FiSearch
                id="setSearchOpen"
                className="text-xl cursor-pointer"
                onMouseEnter={() => setSearchOpen(!searchOpen)}
                onMouseLeave={() => setSearchOpen(!searchOpen)}
              />
              {searchOpen && (
                <div className="z-1000">
                  <div
                    className="absolute top-full right-0 mt-1  z-10 bg-white shadow-md w-[90%]"
                    style={{ zIndex: "600px" }}
                  >
                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded border-s-gray-50 border-s-2 border border-gray-300 "
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e border border-blue-700 hover:bg-blue-800"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Profile and BookList */}
            <Profile />
            <BookList />
          </div>

          {/* Whatsapp */}
          <button
            type="button"
            className="hidden lg:flex items-center gap-1 md:gap-3 justify-center px-4 py-2 font-medium text-white rounded text-[16px] text-nowrap"
          >
            <FaWhatsapp className="text-2xl" />
            Whatsapp 01746207432
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
