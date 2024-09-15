import Image from "next/image";
import React from "react";
import image from "../../images/product/download__6_-removebg-preview.png";
import image1 from "../../images/product/download__2_-removebg-preview.png";
import image2 from "../../images/product/download__1_-removebg-preview.png";
import image3 from "../../images/product/download__3_-removebg-preview.png";
import image4 from "../../images/product/download__4_-removebg-preview.png";
import Link from "next/link";
import { FaEye, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { FaShoppingBag, FaStarHalfAlt } from "react-icons/fa";
import path from "path";
import fs from "fs";

function getData() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
}
function CartProduct() {
  const products = [
    {
      image: image,
      title:
        "Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band - S/M",
      price: 399,
    },
    {
      image: image1,
      title: "Samsung Galaxy Buds Live True Wireless Earbuds",
      price: 299,
    },
    {
      image: image2,
      title: "Sony WH-1000XM4 Wireless Noise-Cancelling Over-Ear Headphones",
      price: 599,
    },
    {
      image: image3,
      title: "Google Nest Hub (2nd Gen) Smart Display with Google Assistant",
      price: 199,
    },
    {
      image: image4,
      title: "Fitbit Charge 5 Advanced Fitness & Health Tracker",
      price: 179,
    },
  ];

  const data = getData();
  return (
    <section className="bg-white py-4 antialiased w-[90%] mx-auto">
      <div className=" lg:flex lg:items-start xl:gap-5">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-3 border border-gray-100 bg-white">
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
              <h2 className="text-lg font-bold">Shopping Cart</h2>
              <h2 className="text-lg font-bold">
                Total Product :{" "}
                <span className="text-[#395BEF]">{products?.length}</span>
              </h2>
            </div>
            {products?.map((item, index) => (
              <div key={index} className="border-b px-3 py-1">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-4">
                  <a href="#" className="shrink-0 ">
                    <Image
                      width={500}
                      height={500}
                      className=" w-32 h-20 "
                      src={item.image}
                      alt="imac image"
                    />
                  </a>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <p className="text-base font-bold text-gray-900 ">
                      ${item.price}
                    </p>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:underline "
                    >
                      {item.title}
                    </a>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline  "
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                          />
                        </svg>
                        Add to Favorites
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div className="space-y-4 rounded border border-gray-200 bg-white p-4 shadow-sm ">
            <p className="text-xl font-semibold text-gray-900 ">
              Order summary
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 ">
                    Original price
                  </dt>
                  <dd className="text-base font-medium text-gray-900 ">
                    $7,592.00
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 ">
                    Savings
                  </dt>
                  <dd className="text-base font-medium text-green-600">
                    -$299.00
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 ">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium text-gray-900 ">$99</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                  <dd className="text-base font-medium text-gray-900 ">$799</dd>
                </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                <dt className="text-base font-bold text-gray-900 ">Total</dt>
                <dd className="text-base font-bold text-gray-900 ">
                  $8,191.00
                </dd>
              </dl>
            </div>

            <a
              href="#"
              className="flex w-full items-center justify-center rounded bg-[#395BEF] px-5 py-2.5 text-sm font-medium text-white "
            >
              Proceed to Checkout
            </a>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-normal text-gray-500 "> or </span>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-[#395BEF] underline hover:no-underline"
              >
                Continue Shopping
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <form className="space-y-4">
              <div>
                <label
                  for="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {" "}
                  Do you have a voucher or gift card?{" "}
                </label>
                <input
                  type="text"
                  id="voucher"
                  className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded bg-[#395BEF] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#395BEF] focus:outline-none "
              >
                Apply Code
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-5">
        {data?.slice(0, 12).map((item, index) => (
          <div key={index} className="box border">
            <div className="p-5 bg-white h-[250px] space-y-2">
              <Image
                width={500}
                height={600}
                src={item.image}
                alt={item?.title}
                className="w-full h-[100px] rounded-xl"
              />
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
  );
}

export default CartProduct;
