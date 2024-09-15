"use client";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchText() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [brands, setBrand] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search submitted:", searchQuery);
  };

  // outlet click close the toggle function
  useEffect(() => {
    const handleClickOutsideOperator = (event) => {
      if (!event.target.closest("#dropdownOpen")) {
        setDropdownOpen(false);
      }
    };

    window.document.addEventListener("click", handleClickOutsideOperator);

    return () => {
      window.document.removeEventListener("click", handleClickOutsideOperator);
    };
  }, []);

  const brand = [
    { brand: "Amazon" },
    { brand: "eBay" },
    { brand: "Walmart" },
    { brand: "Alibaba" },
    { brand: "Shopify" },
    { brand: "Etsy" },
    { brand: "Target" },
    { brand: "Best Buy" },
    { brand: "Newegg" },
    { brand: "Rakuten" },
    { brand: "Macy’s" },
    { brand: "Nordstrom" },
    { brand: "Costco" },
    { brand: "Wayfair" },
    { brand: "Overstock" },
    { brand: "Sears" },
    { brand: "B&H Photo Video" },
    { brand: "ASOS" },
    { brand: "H&M" },
    { brand: "Zara" },
    { brand: "Uniqlo" },
    { brand: "Michael Kors" },
    { brand: "J.Crew" },
    { brand: "ModCloth" },
    { brand: "Revolve" },
    { brand: "Boohoo" },
    { brand: "Nasty Gal" },
    { brand: "Farfetch" },
    { brand: "Net-a-Porter" },
    { brand: "MatchesFashion" },
    { brand: "Anthropologie" },
    { brand: "Urban Outfitters" },
    { brand: "The Home Depot" },
    { brand: "Lowe’s" },
    { brand: "Bed Bath & Beyond" },
    { brand: "Kohl’s" },
    { brand: "Saks Fifth Avenue" },
    { brand: "Neiman Marcus" },
    { brand: "Dillard’s" },
    { brand: "Gilt" },
    { brand: "Hollister" },
    { brand: "Abercrombie & Fitch" },
    { brand: "Banana Republic" },
    { brand: "Gap" },
    { brand: "Old Navy" },
    { brand: "Jockey" },
    { brand: "Victoria’s Secret" },
    { brand: "Sephora" },
    { brand: "Ulta Beauty" },
  ];

  return (
      <form
        className="hidden lg:block w-[400px] mx-auto"
        onSubmit={handleSearchSubmit}
      >
        <div className="flex w-full ">
          <button
            id="dropdownOpen"
            onClick={toggleDropdown}
            className="relative flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s hover:bg-gray-200 focus:outline-none"
            type="button"
          >
            {brands ? brands : "All Brand"}
            <svg
              className={`transition-transform duration-500 w-2.5 h-2.5 ms-2.5 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
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
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                id="dropdown"
                className={`z-10 absolute top-10 left-0 bg-white divide-y divide-gray-100 rounded-t shadow w-[200px] dark:bg-gray-700`}
              >
                <ul
                  className="text-sm text-gray-700 dark:text-gray-200 h-[50vh] overflow-y-scroll"
                  ariaLabelledby="dropdown-button"
                >
                  {brand.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 transition duration-150  hover:bg-[#395BEF] hover:text-white dark:text-white"
                        onClick={() => setBrand(item.brand)}
                      >
                        {item.brand}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e border-s-gray-50 border-s-2 border border-gray-300 "
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
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
      </form>
  );
}

export default SearchText;
