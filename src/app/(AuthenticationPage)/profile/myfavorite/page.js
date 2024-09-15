import Image from "next/image";
import Link from "next/link";
import React from "react";

import image1 from "../../../../images/product/download__1_-removebg-preview.png";
import image2 from "../../../../images/product/download__5_-removebg-preview.png";
import image3 from "../../../../images/product/download__4_-removebg-preview.png";
import image4 from "../../../../images/product/download__6_-removebg-preview.png";
import image5 from "../../../../images/product/download__1_-removebg-preview.png";
import image6 from "../../../../images/product/images__1_-removebg-preview.png";
import image from "../../../../images/product/images__4_-removebg-preview.png";

import { RiDeleteBin2Fill } from "react-icons/ri";
import FavoriteDelete from "./FavoriteDelete";
function MyFavoritePage() {
  const products = [
    {
      id: 1,
      name: "High-performance desktop with a 27-inch display.",
      image: image,
      price: 1499,
    },
    {
      id: 2,
      name: "Latest generation smartphone with advanced camera features.",
      image: image1,
      price: 1998,
    },
    {
      id: 3,
      name: "Lightweight tablet with a high-resolution display.",
      image: image2,
      price: 898,
    },
    {
      id: 4,
      name: "Next-gen gaming console offering ultra-fast load times.",
      image: image3,
      price: 4499,
    },
    {
      id: 5,
      name: "Popular gaming console known for its exclusive titles.",
      image: image4,
      price: 499,
    },
    {
      id: 6,
      name: "High-end laptop with a large display.",
      image: image5,
      price: 499,
    },
    {
      id: 7,
      name: "Smartwatch with fitness tracking, health monitoring.",
      image: image6,
      price: 799,
    },
  ];

  // Calculate the total price
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <div className="border-b border-gray-200 p-5 bg-white rounded space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">My Favorite All Product</h2>
        <p className="text-lg font-bold">
          Total Prices:{" "}
          <span className="text-[#395BEF] ml-2">${totalPrice}</span>
        </p>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left font-medium text-gray-900  md:table-fixed">
          <tbody className="divide-y divide-gray-200 ">
            {products?.map((item, index) => (
              <tr key={index}>
                <td
                  className="whitespace-nowrap py-4 "
                  style={{ width: "500px" }}
                >
                  <div className="flex items-center gap-4">
                    <Link
                      href="#"
                      className="flex items-center aspect-square w-10 h-10 shrink-0"
                    >
                      <Image
                        width={400}
                        height={400}
                        className="h-auto w-full max-h-full "
                        src={item.image}
                        alt="product image"
                      />
                    </Link>
                    <a href="#" className="hover:underline">
                      {item.name}
                    </a>
                  </div>
                </td>
                <td className="p-4 text-end text-base font-bold text-gray-900 ">
                  ${item.price}
                </td>
                <td className="p-4 h-full">
                  <div className="flex justify-end items-center h-full">
                    
                  <FavoriteDelete item={item} id = {item.id}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyFavoritePage;
