"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import SidebarMenubarCarousel from "../SidebarMenubarCarousel/SidebarMenubarCarousel";
import Image from "next/image";

import image1 from "../../../images/product/71L-hEgFvtL._AC_UF1000_1000_QL80_-removebg-preview.png";
import image2 from "../../../images/product/images__4_-removebg-preview.png";
import image3 from "../../../images/product/images__1_-removebg-preview.png";
import image4 from "../../../images/product/download__2_-removebg-preview.png";
import image5 from "../../../images/product/download__1_-removebg-preview.png";
import image6 from "../../../images/product/download-removebg-preview.png";

import "./Carousel.css";

function CarouselPage() {
  // Define the slides array
  const slides = [image1, image2, image3, image4, image5, image6];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnSlideChange = (swiper) => {
    setSelectedIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="pt-5 relative lg:flex justify-between items-center gap-5 w-[90%] mx-auto h-full">
      <div className="w-full lg:w-[20%] h-[500px] lg:flex flex-col gap-5 bg-white hidden">
        <SidebarMenubarCarousel />
      </div>
      <div className="w-full lg:w-[80%] h-[500px]">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          onSlideChange={handleOnSlideChange}
          className="mySwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 bg-white shadow-md p-5 rounded">
                <div className="shrink-0 w-full">
                  <div className="w-full rounded border mb-5 bg-transparent bg-white border-white flex items-center justify-center h-[400px]">
                    <Image
                      width={500}
                      height={500}
                      className="w-[300px] h-[300px]"
                      src={slide}
                      alt=""
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <h1 className="text-xl font-semibold">
                    Apple iMac 24 All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink
                  </h1>
                  <div className="flex items-center gap-2">
                    {/* Rating section */}
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
                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                      (5.0)
                    </p>
                    <a
                      href="#"
                      className="font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                    >
                      345 Reviews
                    </a>
                  </div>
                  <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                  </p>

                  <div className="sm:items-center sm:gap-4 sm:flex">
                    <p className="text-xl font-extrabold text-[#395BEF]">
                      Price $1,249.99
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <button className="button px-4 py-2.5 border-2 border-[#395bef] bg-[#395bef] text-lg rounded-lg text-white font-semibold cursor-pointer">
                      Buy New
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselPage;
