"use client";
import Link from "next/link";
import BookList from "./BookList";
import Profile from "./Profile";
import SearchText from "./SearchText";
import logo from "../../../images/logo.png";
import Header from "./Header";
import Image from "next/image";
import { useEffect, useState } from "react";

import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { FaAngleDown } from "react-icons/fa6";
function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setDropdownVisible(index);
    setActiveMenu(productCategories[index].category);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
    setActiveMenu(null);
  };

  const productCategories = [
    {
      category: "Electronics",
      subMenu: [
        { brand: "Apple" },
        { brand: "Samsung" },
        { brand: "Sony" },
        { brand: "LG" },
        { brand: "Panasonic" },
        { brand: "Bose" },
        { brand: "JBL" },
        { brand: "Dell" },
        { brand: "HP" },
        { brand: "Lenovo" },
      ],
    },
    {
      category: "Clothing",
      subMenu: [
        { brand: "Nike" },
        { brand: "Adidas" },
        { brand: "Puma" },
        { brand: "Under Armour" },
        { brand: "Levi's" },
        { brand: "Ralph Lauren" },
        { brand: "Gucci" },
        { brand: "Prada" },
        { brand: "Tommy Hilfiger" },
        { brand: "Zara" },
      ],
    },
    {
      category: "Beauty",
    },
    {
      category: "Home Appliances",
      subMenu: [
        { brand: "Whirlpool" },
        { brand: "GE" },
        { brand: "Bosch" },
        { brand: "KitchenAid" },
        { brand: "Frigidaire" },
        { brand: "Samsung" },
        { brand: "LG" },
        { brand: "Dyson" },
        { brand: "Philips" },
        { brand: "Miele" },
      ],
    },
    {
      category: "Furniture",
      subMenu: [
        { brand: "Ikea" },
        { brand: "Ashley" },
        { brand: "Wayfair" },
        { brand: "Herman Miller" },
        { brand: "West Elm" },
        { brand: "CB2" },
        { brand: "Pottery Barn" },
        { brand: "La-Z-Boy" },
        { brand: "Crate & Barrel" },
        { brand: "Restoration Hardware" },
      ],
    },
    {
      category: "Footwear",
      subMenu: [
        { brand: "Nike" },
        { brand: "Adidas" },
        { brand: "Puma" },
        { brand: "Reebok" },
        { brand: "Under Armour" },
        { brand: "New Balance" },
        { brand: "Asics" },
        { brand: "Vans" },
        { brand: "Converse" },
        { brand: "Timberland" },
      ],
    },
    {
      category: "Office Supplies",
    },
    {
      category: "Pet Supplies",
    },
  ];


  return (
    <main className="bg-black text-white font-robot">
      <Header />
      <div className="hidden lg:block w-[90%] mx-auto py-3">
        <div className=" grid grid-cols-3 items-center justify-between relative">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-medium tracking-wide cursor-pointer"
            >
              Flip Mart
              {/* <Image width={200} height={200} src={logo} alt="logo" className="w-24 h-14"/> */}
            </Link>
          </div>
          <div>
            <SearchText />
          </div>
          <div className="flex items-center justify-end w-full gap-2 ">
            <Profile />
            <BookList />
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[90%] mx-auto py-3 bg-[#395BEF] px-4 rounded-t">
        <ul className="flex items-center gap-5 text-[16px] font-bold">
          {productCategories.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer flex items-center gap-1"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.category}
              {item.subMenu && (
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    activeMenu === item.category ? "rotate-180" : ""
                  }`}
                />
              )}
              {dropdownVisible === index && item.subMenu && (
                <ul
                  className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-lg p-2 z-40 w-[450px] opacity-0 animate-fadeIn font-normal grid grid-cols-2"
                  style={{ animationDelay: "0.3s" }}
                >
                  {item.subMenu.map((product, productIndex) => (
                    <li
                      key={productIndex}
                      className="py-1 px-3 hover:bg-[#395BEF] hover:text-white rounded"
                    >
                      <Link
                        href={`/products/${product.brand
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {product.brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Navbar;
