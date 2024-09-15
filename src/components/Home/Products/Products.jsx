import PopularProducts from "./PopularProducts";
import FeaturedProducts from "./FeaturedProducts";
import laptop from "../../../images/laptop.png";
import mobail from "../../../images/mobail.png";
import Image from "next/image";
import RightOffer from "../RightOffer/RightOffer";
import LeftComponent from "../LeftComponent/LeftComponent";
import OffersProducts from "./OffersProducts";
import TopOfferSlider from "../TopOfferSlider/TopOfferSlider";
function Products() {
  return (
    <div className="w-[90%] mx-auto lg:grid grid-cols-10 gap-5 mt-10">
      <div className="hidden lg:block lg:col-span-2">
        <LeftComponent />
      </div>
      <div className="w-full lg:col-span-6 space-y-7">
        <div>
          <div className="pb-3 mb-5 border-b border-[#395BEF] flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-wider">
              Offers Products
            </h2>
            <button className="text-lg px-4 py-2 rounded-[4px] text-white bg-[#395BEF]">
              Show All
            </button>
          </div>
          <TopOfferSlider />
        </div>
        <PopularProducts />
        <FeaturedProducts />
      </div>
      <div className="hidden lg:block lg:col-span-2">
        <RightOffer />
      </div>
    </div>
  );
}

export default Products;