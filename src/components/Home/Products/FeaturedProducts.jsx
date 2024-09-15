import Image from "next/image";
import "./Products.css";
import path from "path";
import fs from "fs";
import { FaEye, FaRegHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import Link from "next/link";
function getData() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
}

function FeaturedProducts() {
  const data = getData();
  return (
    <div>
      <div className="pb-3 mb-5 border-b border-[#395BEF] flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-wider">Featured Products</h2>
        <Link href='/featured' className="text-lg px-4 py-2 rounded-[4px] text-white bg-[#395BEF]">
          Show All
        </Link>
      </div>
      <div className="box-area grid grid-cols-1 md:grid-cols-2 gap-5">
        {data?.slice(0, 6).map((item, index) => (
          <div key={index} className="box">
            <div className="p-5 flex items-center gap-2">
              <Image
                width={500}
                height={600}
                src={item.image}
                alt={item?.title}
                className="w-[50%] h-[100px] rounded-xl"
              />
              {item.new && (
                <div className="new">
                  <h2>{item.new}</h2>
                </div>
              )}
              <div className="w-[50%]">
                <h2 className="text-[160x]">{item.title}</h2>
                <div className="flex items-center gap-1 text-xl pb-5 text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <h2 className="text-[16px] font-medium ">
                  Price: ${item.price}
                </h2>
              </div>
            </div>
            <div className="overlay_featured">
              <div className="flex items-center justify-center gap-3 mt-4">
                <button className="text-[16px] px-2 py-1 rounded text-white bg-[#395BEF]">
                  <FaRegHeart />
                </button>
                <button className="text-[16px] px-2 py-1 rounded text-black border border-[#395BEF] hover:text-white bg-gray-50 hover:bg-[#395BEF]">
                  <FaEye />
                </button>
              </div>
              <h2>{item.title}</h2>
              <Link href={`/product/${item.id}`} className="btn">
                <FaShoppingBag /> Add to Card
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
