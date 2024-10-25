import Image from "next/image";
import React from "react";
import camera from '../../../images/images.png'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

import offers from '../../../images/product/download__2_-removebg-preview.png'
import offers1 from '../../../images/product/download__1_-removebg-preview.png'
import offers2 from '../../../images/product/download__3_-removebg-preview.png'
import offers3 from '../../../images/product/download__4_-removebg-preview.png'
import offers4 from '../../../images/product/download__5_-removebg-preview.png'
import offers5 from '../../../images/product/download__6_-removebg-preview.png'
import offers6 from '../../../images/product/images__1_-removebg-preview.png'
import offers7 from '../../../images/product/images__2_-removebg-preview.png'

function LeftComponent() {
  return (
    <div>
      <div className="px-3 py-5 bg-[#395aef23] rounded-[4px] ">
        <div className="space-y-3">
          <h2>Samsung Galaxy Z Fold4</h2>
          <p className="font-medium">
            Series X|S, Xbox One, Windows PC, and mobile.
          </p>
        </div>
        <Image
          width={700}
          height={700}
          src={camera}
          alt="mobail"
          className="w-[300px] h-[250px]"
        />
      </div>
      <div className="mt-5 pb-5 bg-white rounded-[4px] border border-white rounded-t-[4px] space-y-3">
        <button className="text-left px-4 py-2.5 w-full rounded-t-[4px] text-white bg-[#395BEF] font-bold">
          Offers Product
        </button>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers1}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers2}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers3}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers4}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers5}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers6}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
        <div className="flex">
          <Image
            width={50}
            height={50}
            src={offers7}
            alt="laptop"
            className="w-[50px] h-[50px]"
          />
          <div className="space-y-1">
            <h2>Samsung Galaxy Z Fold4</h2>
            <div className="flex items-center gap-1 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="font-semibold">Price: 5434</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;
