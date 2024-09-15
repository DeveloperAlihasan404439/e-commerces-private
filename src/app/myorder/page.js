import Image from "next/image";
import Link from "next/link";
import React from "react";

// image
import image from "../../images/product/images__1_-removebg-preview.png";
import image1 from "../../images/product/images__2_-removebg-preview.png";
import image2 from "../../images/product/images__3_-removebg-preview.png";
import image3 from "../../images/product/images__4_-removebg-preview.png";
import image4 from "../../images/product/71L-hEgFvtL._AC_UF1000_1000_QL80_-removebg-preview.png";
import image5 from "../../images/product/download__2_-removebg-preview.png";
import image6 from "../../images/product/download__1_-removebg-preview.png";
import image7 from "../../images/product/download__3_-removebg-preview.png";
import image8 from "../../images/product/download__4_-removebg-preview.png";
import image9 from "../../images/product/download__5_-removebg-preview.png";
import image10 from "../../images/product/download__6_-removebg-preview.png";
function page() {
  const products = [
    {
      image: image,
      name: 'Apple MacBook Pro 17"',
      totalItem: 1,
      category: "Laptop",
      price: "$2999",
    },
    {
      image: image2,
      name: "Microsoft Surface Pro",
      totalItem: 1,
      category: "Laptop PC",
      price: "$1999",
    },
    {
      image: image3,
      name: "Magic Mouse 2",
      totalItem: 1,
      category: "Accessories",
      price: "$99",
    },
    {
      image: image4,
      name: "Google Pixel Phone",
      totalItem: 1,
      category: "Phone",
      price: "$799",
    },
    {
      image: image5,
      name: "Apple Watch 5",
      totalItem: 1,
      category: "Wearables",
      price: "$999",
    },
    {
      image: image6,
      name: "Samsung Galaxy S21",
      totalItem: 1,
      category: "Phone",
      price: "$999",
    },
    {
      image: image7,
      name: "Sony WH-1000XM4",
      totalItem: 1,
      category: "Headphones",
      price: "$349",
    },
    {
      image: image8,
      name: "Dell XPS 13",
      totalItem: 1,
      category: "Laptop",
      price: "$1399",
    },
    {
      image: image9,
      name: 'iPad Pro 11"',
      totalItem: 1,
      category: "Tablet",
      price: "$1099",
    },
    {
      image: image10,
      name: "Amazon Echo Dot",
      totalItem: 1,
      category: "Smart Home",
      price: "$49",
    },
  ];

  return (
    <div className="w-[90%] mx-auto my-5 border bg-gray-50 rounded shadow-md">
      <div className="flex justify-between gap-5 md:flex-row-reverse">
        <div className="w-full lg:w-[20%] bg-gray-50 py-8 px-4">
          <h2 className="text-lg font-bold border-b-2 pb-2 border-gray-200">
            Order Summary
          </h2>
          <div className="space-y-2 font-semibold py-5">
            <h2>
              Item : <span className="text-[#395BEF]"> 10</span>
            </h2>
            <h2>
              Total Prices : <span className="text-[#395BEF]"> 3000</span>
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-[80%] bg-white p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold mb-3">My Order List</h2>
            <h2 className="text-lg font-bold mb-3">
              Total Item :<span className="text-[#395BEF]"> 10</span>
            </h2>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Photo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">
                      <Image
                        width={300}
                        height={300}
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.name}
                    </td>
                    <td className="px-6 py-4">{product.totalItem}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
