import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag, FaStarHalfAlt } from "react-icons/fa";
import { FaEye, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";

function PopularPageProduct() {
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
      description: "Latest flagship phone from Apple with advanced features.",
      image:
        "https://www.mygsm.me/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/image/23727ac4b/surface-pro-10-for-business-13-inch-core-ultra-5-8gb-ram-256gb-ssd-platinum-color.jpg",
    },
  ];

  return (
    <section className="bg-white py-4 antialiased w-[90%] mx-auto">
      <h2 className="text-lg font-bold">Popular Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-5">
        {data?.map((item, index) => (
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

export default PopularPageProduct;
