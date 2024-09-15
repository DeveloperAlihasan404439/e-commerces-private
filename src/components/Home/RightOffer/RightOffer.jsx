"use client";
import getCurrentDateTime from "@/utils/getCurrentDateTime";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";
import laptop from "../../../images/laptop.png";
import RightCarousel from "./RightCarousel/RightCarousel";

const targetDate = new Date("2024-08-31T23:59:59");

function RightOffer() {
  const [countdown, setCountdown] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  });

  useEffect(() => {
    const calculateCountdown = () => {
      setCountdown(getCurrentDateTime(targetDate));
    };

    calculateCountdown(); 

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-5">
      <div className="pb-5 bg-white space-y-3 border border-[#395BEF] rounded-t-[4px]">
        <button className="text-lg text-left px-4 py-2.5 w-full text-white bg-[#395BEF]">
          Add To Cart
        </button>
        <Image
          width={500}
          height={600}
          src="https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/199455073/xbox-wireless-controller-elite-series-2-core-white.webp"
          alt="offer"
          className="w-full h-[200px] rounded-xl"
        />
        <h2 className="text-center text-lg font-semibold">
          Xbox Wireless Controller
        </h2>
        <h2 className="text-center text-sm font-semibold">Price: 229.01</h2>
        <div className="flex items-center justify-center gap-1 text-xl pb-5 text-yellow-300">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </div>
        <p className="flex items-center gap-1 justify-center">
          <span className="text-lg px-1 py-1 w-[40px] rounded-[4px] text-white bg-[#395BEF] text-center">
            {countdown.days}
          </span>
          <span className="text-lg px-1 py-1 w-[40px] rounded-[4px] text-white bg-[#395BEF] text-center">
            {countdown.hours}
          </span>
          <span className="text-lg px-1 py-1 w-[40px] rounded-[4px] text-white bg-[#395BEF] text-center">
            {countdown.minutes}
          </span>
          <span className="text-lg px-1 py-1 w-[40px] rounded-[4px] text-white bg-[#395BEF] text-center">
            {countdown.seconds}
          </span>
        </p>
      </div>
      <div className="bg-white space-y-3 border border-[#395BEF] rounded-t-[4px]">
        <button className="text-lg text-left px-4 py-2.5 w-full text-white bg-[#395BEF]">
          Review Carousel
        </button>
        <RightCarousel />
      </div>
      <div className="pb-5 bg-[#395aef23] space-y-3 border border-[#395BEF] rounded-t-[4px]">
        <button className="text-lg text-left px-4 py-2.5 w-full text-white bg-[#395BEF]">
          Samsung Galaxy
        </button>
        <h2 className="text-lg font-semibold text-center px-3">
          Samsung Galaxy Z Fold4
        </h2>
        <p className="text-sm font-semibold text-center px-3">
          Series X|S, Xbox One, Windows PC, and mobile.
        </p>
        <div className="px-3">
          <Image
            width={500}
            height={500}
            src="https://www.mygsm.me/media/iopt/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/18274ce69/samsung-galaxy-z-fold4-5g-1tb-12gb-ram-graygreen.webp"
            alt="Samsung Galaxy Z Fold4"
            className="h-[250px]"
          />
        </div>
      </div>
      <div className="pb-5 bg-white rounded-[4px] border border-[#395BEF] rounded-t-[4px] space-y-3">
        <button className="text-lg text-left px-4 py-2.5 w-full text-white bg-[#395BEF]">
          Add To Cart
        </button>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={laptop}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-sm text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="text-sm font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={laptop}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-sm text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="text-sm font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={laptop}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-sm text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="text-sm font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={laptop}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-sm text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="text-sm font-semibold">Price: 5434</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightOffer;
