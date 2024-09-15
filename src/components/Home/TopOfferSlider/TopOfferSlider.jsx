"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import slider from "../../../images/product/download__6_-removebg-preview.png";
import slider1 from "../../../images/product/download__5_-removebg-preview.png";
import slider2 from "../../../images/product/download__4_-removebg-preview.png";
import slider3 from "../../../images/product/images__4_-removebg-preview.png";
import slider4 from "../../../images/product/images__1_-removebg-preview.png";
import slider5 from "../../../images/product/images__2_-removebg-preview.png";
import slider6 from "../../../images/product/images__3_-removebg-preview.png";
import slider7 from "../../../images/product/images__4_-removebg-preview.png";
import slider8 from "../../../images/product/download__1_-removebg-preview.png";

import useTimeCountdown from "@/utils/useTimeCountdown";

function TopOfferSlider() {
  const targetDate = new Date("2024-08-31T23:59:59");
  const countdown = useTimeCountdown(targetDate);

  const slides = [slider, slider1, slider2, slider3];
  const subSlides = [
    slider,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider7,
    slider8,
  ];

  return (
    <div className="border shadow-md bg-white ">
      <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-fit"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="md:grid grid-cols-12 items-center gap-5 p-5 relative border-b-2 h-auto sm:h-auto">
            <div className="col-span-5 pl-3">
              <Image width={500} height={500} src={slide} alt="offer" />
            </div>

            <div className="absolute top-0 left-4 px-4 py-2 bg-[#395BEF] text-white uppercase font-bold tracking-widest rounded-b-lg shadow-lg shadow-[#395aef69]">
              <h2>{`today's Deals`} </h2>
            </div>

            <div className="col-span-7 space-y-5 relative pr-3">
              <h1 className="text-xl font-semibold">Apple iMac</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
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
                Studio quality three mic array for crystal clear calls and voice
                recordings. Six-speaker sound system for a remarkably robust and
                high-quality audio experience. Up to 256GB of ultrafast SSD
                storage.
              </p>

              <div className="sm:items-center sm:gap-4 sm:flex">
                <p className="text-xl font-extrabold text-[#395BEF]">
                  $549.99
                </p>
                <del className="text-xl font-extrabold text-[#395BEF]">
                  $1,249.99
                </del>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col justify-center w-fit space-y-1 items-center">
                  <h2 className="flex items-center px-6 py-2 rounded-full font-semibold text-xl text-[#395BEF] bg-gray-100 w-fit">
                    {countdown.days}
                  </h2>
                  <p>Day</p>
                </div>

                <div className="flex flex-col justify-center w-fit space-y-1 items-center">
                  <h2 className="flex items-center px-6 py-2 rounded-full font-semibold text-xl text-[#395BEF] bg-gray-100 w-fit">
                    {countdown.hours}
                  </h2>
                  <p>Hours</p>
                </div>

                <div className="flex flex-col justify-center w-fit space-y-1 items-center">
                  <h2 className="flex items-center px-6 py-2 rounded-full font-semibold text-xl text-[#395BEF] bg-gray-100 w-fit">
                    {countdown.minutes}
                  </h2>
                  <p>Minutes</p>
                </div>

                <div className="flex flex-col justify-center w-fit space-y-1 items-center">
                  <h2 className="flex items-center px-6 py-2 rounded-full font-semibold text-xl text-[#395BEF] bg-gray-100 w-fit">
                    {countdown.seconds}
                  </h2>
                  <p>Seconds</p>
                </div>
              </div>

              <div className="absolute -top-8 -right-3">
                <h2 className="p-3 text-lg rounded-full bg-[#395BEF] text-white">
                  50%
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

      <div className="m-5 border-2 rounded p-5 ">
        <Swiper
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          pagination={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3, // Show 2 slides
            },
            1024: {
              slidesPerView: 3, // Show 3 slides
            },
            1280: {
              slidesPerView: 4, // Show 4 slides
            },
          }}
        >
          {subSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="col-span-2 relative border-2 rounded flex items-center flex-nowrap flex-col"
              >
                <div>
                  <Image
                    width={300}
                    height={300}
                    src={item}
                    alt="offer children "
                    className="w-[200px] h-[150px]"
                  />
                </div>
                <div className="absolute -top-[1px] -right-[1px] ">
                  <h2 className=" py-2 px-1 offer bg-[#395BEF] text-white">
                    40%
                  </h2>
                </div>
                <h2>Apple iMac</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TopOfferSlider;
