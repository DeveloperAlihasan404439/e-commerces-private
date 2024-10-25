import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function MobileMenu() {
  const [sidebar, setSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  const handleDropdownClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
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
        { brand: "Lenovo" }
      ]
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
        { brand: "Zara" }
      ]
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
        { brand: "Miele" }
      ]
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
        { brand: "Restoration Hardware" }
      ]
    },
    {
      category: "Sports",
      subMenu: [
        { brand: "Nike" },
        { brand: "Adidas" },
        { brand: "Puma" },
        { brand: "Reebok" },
        { brand: "Under Armour" },
        { brand: "Columbia" },
        { brand: "Patagonia" },
        { brand: "North Face" },
        { brand: "New Balance" },
        { brand: "Asics" }
      ]
    },
    {
      category: "Toys & Games",
    },
    {
      category: "Books",
      subMenu: [
        { brand: "Penguin" },
        { brand: "HarperCollins" },
        { brand: "Simon & Schuster" },
        { brand: "Hachette" },
        { brand: "Macmillan" },
        { brand: "Random House" },
        { brand: "Scholastic" },
        { brand: "Bloomsbury" },
        { brand: "Oxford University Press" },
        { brand: "Pearson" }
      ]
    },
    {
      category: "Automotive",
      subMenu: [
        { brand: "Ford" },
        { brand: "Toyota" },
        { brand: "Honda" },
        { brand: "Chevrolet" },
        { brand: "BMW" },
        { brand: "Mercedes-Benz" },
        { brand: "Audi" },
        { brand: "Tesla" },
        { brand: "Nissan" },
        { brand: "Hyundai" }
      ]
    },
    {
      category: "Health & Wellness",
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
        { brand: "Timberland" }
      ]
    },
    {
      category: "Office Supplies",
    },
    {
      category: "Pet Supplies",
    }
  ];
  
  return (
    <div className="block lg:hidden">
      <div className="text-center">
        <button
          onClick={toggleSidebar}
          className="text-2xl py-3 rounded text-white"
        >
          <IoMenu />
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto bg-white w-64 dark:bg-gray-800 transform transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
      >
        <div className="overflow-y-auto relative h-screen p-4">
          <div
            onClick={toggleSidebar}
            className="absolute z-50 top-0 right-0 w-7 h-7 bg-[#395BEF] text-white flex items-center justify-center text-2xl cursor-pointer"
            style={{ borderRadius: "0 0 0 14px" }}
          >
            <IoMdClose />
          </div>
          <ul className="space-y-[1px] font-medium">
            {productCategories.map((menu, index) => (
              <li key={index} className="relative">
                <div
                  onClick={() => handleDropdownClick(menu.category)}
                  className="flex items-center justify-between py-2 px-3 text-black hover:bg-[#395BEF] hover:text-white rounded cursor-pointer mb-[1px]"
                >
                  <span>{menu.category}</span>
                  {menu.subMenu && (
                    <FaAngleDown
                      className={`transition-transform duration-300 ${
                        activeMenu === menu.category ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {menu.subMenu && (
                  <ul
                    className={`space-y-[1px] ml-4 font-medium transition-all duration-300 ease-in-out overflow-hidden ${
                      activeMenu === menu.category
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {menu.subMenu.map((item, idx) => (
                      <li
                        key={idx}
                        className="py-2 px-3 text-black hover:bg-[#395BEF] hover:text-white rounded cursor-pointer"
                      >
                        <Link href="#">{item.brand}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
