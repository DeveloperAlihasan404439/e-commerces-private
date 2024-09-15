"use client";

import Image from "next/image";
import {
  FaEye,
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";

import Link from "next/link";
import { FaShoppingBag, FaStarHalfAlt } from "react-icons/fa";

import "./ProductPage.css";
import ReviewsAdded from "@/components/Reviews/ReviewsAdded";
import SelectDetails from "@/components/Reviews/SelectDetails";
import AllReviews from "@/components/Reviews/AllReviews";
import { useState } from "react";
function ProductPage({ params }) {
  const [rom, setRom] = useState("8GB");
  const [ram, setRam] = useState("32GB");
  const [color, setColor] = useState("Red");
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const details = {
    image:
      "https://img.freepik.com/free-photo/close-up-alarm-clock-black-background_23-2147943901.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
    sub_product: [
      "https://img.freepik.com/free-photo/close-up-alarm-clock-black-background_23-2147943901.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/alarm-clock_144627-19770.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/design-illustration-alarm-clock_1151123-40837.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/3d-render-time-icon_23-2151653212.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/circular-clock-outdoors-still-life_23-2150436180.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/close-up-clock-against-white-background_1048944-17002252.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/close-up-clock-table_1048944-21208413.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/design-illustration-alarm-clock_1151123-40814.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/alarm-clock_144627-19770.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/design-illustration-alarm-clock_1151123-40837.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/free-psd/3d-render-time-icon_23-2151653212.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/circular-clock-outdoors-still-life_23-2150436180.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/close-up-clock-against-white-background_1048944-17002252.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/close-up-clock-table_1048944-21208413.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/design-illustration-alarm-clock_1151123-40814.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid",
    ],
  };

  const data = [
    {
      id: 1,
      title: "Samsung Galaxy Z Fold4 5G",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: " 8,499.00",
      rating: 5,
      new: "new",
      warranty: "1 Year Warranty",
      inch: [
        "7.6 inch Foldable Dynamic AMOLED 2X, 120Hz",
        "6.2 inch Dynamic AMOLED 2X, 120Hz Cover display",
        "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
        "50 MP+10 MP+12 MP Triple Camera",
        "Li-Po 4400 mAh, non-removable Battery",
      ],
      delivery: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/18274ce69/samsung-galaxy-z-fold4-5g-1tb-12gb-ram-graygreen.webp",
    },
    {
      id: 2,
      title: "Apple Watch SE (2023)",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "899.00",
      rating: 3.5,
      warranty: "1 Year Warranty",
      inch: [
        "40mm Aluminum case size",
        "Retina LTPO OLED display",
        "S8 SiP with 64-bit dual-core processor",
        "2-core Apple Neural Engine",
        "32GB capacity",
      ],
      display: [
        "Same day free delivery in U.A.E",
        "4 to 6 days delivery to Saudi Arabia,Bahrain,Oman,Kuwait",
        "3 to 5 Days Express delivery to Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/22030bc11/apple-watch-se-2023-gps-40mm-starlight-aluminium-case-with-starlight-sport-band.webp",
    },
    {
      id: 3,
      title: "Samsung Galaxy Fit3",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "229.01",
      rating: 5,
      warranty: "",
      new: "new",
      inch: [
        "1.6' AMOLED Display",
        "208mAh Battery",
        "Aluminum Body",
        "2-56MB/16MB RAM",
        "Bluetooth v5.3",
      ],
      display: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/23013ca66/samsung-galaxy-fit3-black.webp",
    },
    {
      id: 4,
      title: "Xbox Wireless Controller",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "479.00",
      rating: 5,
      warranty: "",
      new: "new",
      inch: [
        "Switch between devices",
        "Series X|S, Xbox One, Windows PC, and mobile.",
        "Use Xbox Wireless, Bluetooth or the included USB-C cable to play across your Xbox",
      ],
      display: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/199455073/xbox-wireless-controller-elite-series-2-core-white.webp",
    },
    {
      id: 5,
      title: "Surface Pro 10 for Business",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "5,049.00",
      rating: 4.5,
      warranty: "1 Year Warranty",
      inch: [
        "Intel Core Ultra 5 processor 135U",
        "Microsoft Surface Pro 10 for Business",
        "13 inch PixelSense Flow display",
        "256GB SSD/8GB RAM/Intel Graphics",
      ],
      display: [
        "Same day free delivery in U.A.E",
        "4 to 6 days delivery to Saudi Arabia,Bahrain,Oman,Kuwait",
        "3 to 5 Days Express delivery to Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/23727ac4b/surface-pro-10-for-business-13-inch-core-ultra-5-8gb-ram-256gb-ssd-platinum-color.jpg",
    },
    {
      id: 6,
      title: "Samsung Galaxy Z Fold4",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: " 8,499.00",
      rating: 4.5,
      warranty: "1 Year Warranty",
      new: "new",
      inch: [
        "7.6 inch Foldable Dynamic AMOLED 2X, 120Hz",
        "6.2 inch Dynamic AMOLED 2X, 120Hz Cover display",
        "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
        "50 MP+10 MP+12 MP Triple Camera",
        "Li-Po 4400 mAh, non-removable Battery",
      ],
      delivery: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/18274ce69/samsung-galaxy-z-fold4-5g-1tb-12gb-ram-graygreen.webp",
    },
    {
      id: 7,
      title: "Apple Watch SE (2023)",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "899.00",
      rating: 3.5,
      warranty: "1 Year Warranty",
      inch: [
        "40mm Aluminum case size",
        "Retina LTPO OLED display",
        "S8 SiP with 64-bit dual-core processor",
        "2-core Apple Neural Engine",
        "32GB capacity",
      ],
      display: [
        "Same day free delivery in U.A.E",
        "4 to 6 days delivery to Saudi Arabia,Bahrain,Oman,Kuwait",
        "3 to 5 Days Express delivery to Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/22030bc11/apple-watch-se-2023-gps-40mm-starlight-aluminium-case-with-starlight-sport-band.webp",
    },
    {
      id: 8,
      title: "Samsung Galaxy Fit3",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "229.01",
      rating: 5,
      warranty: "",
      inch: [
        "1.6' AMOLED Display",
        "208mAh Battery",
        "Aluminum Body",
        "2-56MB/16MB RAM",
        "Bluetooth v5.3",
      ],
      display: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/23013ca66/samsung-galaxy-fit3-black.webp",
    },
    {
      id: 9,
      title: "Xbox Wireless Controller Elite Series 2 – Core (White)",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "479.00",
      rating: 3.5,
      warranty: "",
      inch: [
        "Switch between devices",
        "Series X|S, Xbox One, Windows PC, and mobile.",
        "Use Xbox Wireless, Bluetooth or the included USB-C cable to play across your Xbox",
      ],
      display: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/199455073/xbox-wireless-controller-elite-series-2-core-white.webp",
    },
    {
      id: 10,
      title: "Surface Pro 10 ",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "5,049.00",
      rating: 4.5,
      warranty: "1 Year Warranty",
      inch: [
        "Intel Core Ultra 5 processor 135U",
        "Microsoft Surface Pro 10 for Business",
        "13 inch PixelSense Flow display",
        "256GB SSD/8GB RAM/Intel Graphics",
      ],
      display: [
        "Same day free delivery in U.A.E",
        "4 to 6 days delivery to Saudi Arabia,Bahrain,Oman,Kuwait",
        "3 to 5 Days Express delivery to Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/23727ac4b/surface-pro-10-for-business-13-inch-core-ultra-5-8gb-ram-256gb-ssd-platinum-color.jpg",
    },

    {
      id: 11,
      title: "Xbox Wireless Controller Elite Series 2 – Core (White)",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "479.00",
      rating: 3.5,
      warranty: "",
      inch: [
        "Switch between devices",
        "Series X|S, Xbox One, Windows PC, and mobile.",
        "Use Xbox Wireless, Bluetooth or the included USB-C cable to play across your Xbox",
      ],
      display: [
        "Same-day free delivery in U.A.E",
        "4 to 5 days delivery to Saudi Arabia, Bahrain, Oman, Kuwait",
        "3 to 4 Days Express Delivery to the Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/199455073/xbox-wireless-controller-elite-series-2-core-white.webp",
    },
    {
      id: 12,
      title: "Surface Pro 10 ",
      review: "Be the first to review this product",
      vat: "All prices include UAE VAT",
      price: "5,049.00",
      rating: 4.5,
      warranty: "1 Year Warranty",
      inch: [
        "Intel Core Ultra 5 processor 135U",
        "Microsoft Surface Pro 10 for Business",
        "13 inch PixelSense Flow display",
        "256GB SSD/8GB RAM/Intel Graphics",
      ],
      display: [
        "Same day free delivery in U.A.E",
        "4 to 6 days delivery to Saudi Arabia,Bahrain,Oman,Kuwait",
        "3 to 5 Days Express delivery to Rest of the world",
      ],
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/23727ac4b/surface-pro-10-for-business-13-inch-core-ultra-5-8gb-ram-256gb-ssd-platinum-color.jpg",
    },
  ];

  return (
    <div className="w-[90%] mx-auto font-robot">
      <section className="py-8 md:py-16 text-black antialiased">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 bg-white shadow-md p-5 rounded">
          <div className="shrink-0 w-full">
            <div className="w-full rounded border mb-5 bg-transparent bg-white border-white">
              <Image
                width={500}
                height={500}
                className="w-full h-[400px]"
                src="https://img.freepik.com/free-photo/close-up-alarm-clock-black-background_23-2147943901.jpg?size=626&ext=jpg&ga=GA1.1.1053088745.1709813754&semt=ais_hybrid"
                alt=""
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-semibold">
              Apple iMac 24 All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
              Mac OS, Pink
            </h1>
            <div className="flex items-center justify-between">
              {/* Rating section */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {/* Star icons */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-7 h-7 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">
                  (5.0)
                </p>
                <span className="font-medium text-gray-900  dark:text-white">
                  345 Reviews
                </span>
              </div>
            </div>
            <p className="text-xl font-extrabold text-[#395BEF]">
              Price $1,249.99
            </p>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </p>
            <div>
              {/* ROM Select Field */}
              <div className="space-y-1">
                <label htmlFor="ram" className="block font-semibold text-black">
                  RAM
                </label>
                <div className="flex items-center gap-1 flex-wrap">
                  <p
                    onClick={() => setRam("64GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      ram === "64GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    64GB
                  </p>
                  <p
                    onClick={() => setRam("32GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      ram === "32GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    32GB
                  </p>
                  <p
                    onClick={() => setRam("16GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      ram === "16GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    16GB
                  </p>
                  <p
                    onClick={() => setRam("8GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      ram === "8GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    8GB
                  </p>
                  <p
                    onClick={() => setRam("4GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      ram === "4GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    4GB
                  </p>
                </div>

                {/* <select
                    id="ram"
                    name="ram"
                    className="block w-full p-2 border border-[#395bef] rounded shadow-sm sm:text-sm"
                    value={ram}
                    onChange={(e) => setRam(e.target.value)}
                  >
                    <option value="" disabled>
                      Select RAM size
                    </option>
                    <option value="2GB">2GB</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                    <option value="16GB">16GB</option>
                  </select> */}
              </div>
              <div className="space-y-1 mt-2">
                <label htmlFor="rom" className="block font-semibold text-black">
                  ROM
                </label>
                {/* <select
                    id="rom"
                    name="rom"
                    className="block w-full p-2 border border-[#395bef] rounded shadow-sm sm:text-sm"
                    value={rom}
                    onChange={(e) => setRom(e.target.value)}
                  >
                    <option value="" disabled>
                      Select ROM size
                    </option>
                    <option value="16GB">16GB</option>
                    <option value="32GB">32GB</option>
                    <option value="64GB">64GB</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                  </select> */}
                <div className="flex items-center gap-1 flex-wrap">
                  <p
                    onClick={() => setRom("64GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      rom === "64GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    64GB
                  </p>
                  <p
                    onClick={() => setRom("32GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      rom === "32GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    32GB
                  </p>
                  <p
                    onClick={() => setRom("16GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      rom === "16GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    16GB
                  </p>
                  <p
                    onClick={() => setRom("8GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      rom === "8GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    8GB
                  </p>
                  <p
                    onClick={() => setRom("4GB")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      rom === "4GB"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    4GB
                  </p>
                </div>
              </div>
              {/* RAM Select Field */}

              {/* Color Select Field */}
              <div className="space-y-1 mt-2">
                <label
                  htmlFor="color"
                  className="block font-semibold text-black"
                >
                  Color
                </label>
                <div className="flex items-center gap-1">
                  <p
                    onClick={() => setColor("Blue")}
                    className={`px-2 py-1 border w-fit  rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      color === "Blue"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    Blue
                  </p>
                  <p
                    onClick={() => setColor("Green")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      color === "Green"
                        ? "bg-[#395BEF] text-white border-[#395BEF] "
                        : "bg-gray-100"
                    }`}
                  >
                    Green
                  </p>
                  <p
                    onClick={() => setColor("Red")}
                    className={`px-2 py-1 border w-fit rounded hover:bg-[#395bef] hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                      color === "Red"
                        ? "bg-[#395BEF] text-white border-[#395BEF]"
                        : "bg-gray-100"
                    }`}
                  >
                    Red
                  </p>
                  {/* <div
                    className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer"
                    onClick={() => setColor("Blue")}
                  ></div>
                  <div
                    className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"
                    onClick={() => setColor("Red")}
                  ></div>
                  <div
                    className="w-5 h-5 bg-green-600 rounded-full cursor-pointer"
                    onClick={() => setColor("Green")}
                  ></div> */}
                </div>
              </div>

              {/* Quantity Select Field */}
              {/* <div className="space-y-2 flex items-center gap-5">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-black"
                >
                  Quantity
                </label>
                <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-md text-gray-700">
                  <div
                    className="bg-white text-xl w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={decrement}
                  >
                    <FaMinus />
                  </div>
                  <h2>{quantity}</h2>
                  <div
                    className="bg-white text-xl w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={increment}
                  >
                    <FaPlus />
                  </div>
                </div>
              </div> */}
            </div>

            <div className="flex items-center flex-wrap justify-between pt-5 gap-2">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center gap-4 bg-gray-100 px-4 py-2.5 rounded-md text-gray-700">
                  <div
                    className="bg-white text-xl w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={decrement}
                  >
                    <FaMinus />
                  </div>
                  <h2>{quantity}</h2>
                  <div
                    className="bg-white text-xl w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={increment}
                  >
                    <FaPlus />
                  </div>
                </div>

                <button className="button px-4 py-2 border-2 border-[#395bef] text-lg rounded hover:bg-[#395bef] hover:text-white font-semibold cursor-pointer">
                  Add To Cart
                </button>

                <button className="button px-4 py-2.5 border-2 border-[#395bef] text-xl rounded hover:bg-[#395bef] hover:text-white font-semibold cursor-pointer">
                  <FaHeart />
                </button>
              </div>
              <SelectDetails />
            </div>
          </div>
        </div>

        <AllReviews />
        <div className="box-area grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {data?.slice(0, 12).map((item, index) => (
            <div key={index} className="box">
              <div className="p-5 bg-white h-[250px] space-y-2">
                <Image
                  width={500}
                  height={600}
                  src={item.image}
                  alt={item?.title}
                  className="w-full h-[100px] rounded-xl"
                />
                {item.new && (
                  <div className="new">
                    <h2>{item.new}</h2>
                  </div>
                )}
                <h2 className="text-center text-sm font-semibold ">
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </h2>
                <div className="flex items-center justify-center gap-1 text-lg text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <h2 className="text-sm font-medium text-center">
                  Price: ${item.price}
                </h2>
              </div>
              <div className="overlay">
                <div className="flex items-center justify-center gap-3 mt-4">
                  <button className="text-sm px-2 py-1 rounded-[4px] text-white bg-[#395BEF]">
                    <FaRegHeart />
                  </button>
                  <button className="text-sm px-2 py-1 rounded-[4px] text-black border border-[#395BEF] hover:text-white bg-gray-50 hover:bg-[#395BEF]">
                    <FaEye />
                  </button>
                </div>
                <h2 className="px-3 text-xs">
                  {item.title.length > 15
                    ? item.title.slice(0, 15) + "..."
                    : item.title}
                </h2>
                <Link href={`/product/${item.id}`} className="btn">
                  <FaShoppingBag /> Add to Card
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
