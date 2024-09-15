"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

function OffersProducts() {
  return (
    <div className="pb-5">
      <div className="pb-3 mb-5 border-b border-[#395BEF] flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-wider">Offers Products</h2>
        <button className="text-lg px-4 py-2 rounded-[4px] text-white bg-[#395BEF]">
          Show All
        </button>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          pagination={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="box">
              <div className=" bg-white relative">
                <Image
                  width={500}
                  height={600}
                  src="https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039300.jpg?semt=ais_hybrid"
                  alt=""
                  className="w-full h-[100px]"
                />
                <div className="offer_box">
                  <h2>47%</h2>
                </div>
                <div className="flex flex-col items-center justify-center pb-5">
                  <h2 className="text-center text-[16px] font-semibold pt-2">
                    Dell XPS 15 9500
                  </h2>
                  <h2 className="text-[14px]  text-center">Price: 456345</h2>
                  <div className="w-[100px] pb-1 bg-[#395BEF] mt-2"></div>
                </div>
                <p className="px-3">
                  The Dell XPS 15 9500 is a high-performance laptop designed
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className=" bg-white relative">
                <Image
                  width={500}
                  height={600}
                  src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?ga=GA1.1.139978101.1723207588&semt=ais_hybrid"
                  alt=""
                  className="w-full h-[100px]"
                />
                <div className="offer_box">
                  <h2>47%</h2>
                </div>
                <div className="flex flex-col items-center justify-center pb-5">
                  <h2 className="text-center text-[16px] font-semibold pt-2">
                    Dell XPS 15 9500
                  </h2>
                  <h2 className="text-[14px]  text-center">Price: 456345</h2>
                  <div className="w-[100px] pb-1 bg-[#395BEF] mt-2"></div>
                </div>
                <p className="px-3">
                  The Dell XPS 15 9500 is a high-performance laptop designed
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className=" bg-white relative">
                <Image
                  width={500}
                  height={600}
                  src="https://img.freepik.com/premium-photo/front-view-young-male-ironing-board-with-holding-iron-blue-background-color-housework-clean-laundry-man-machine-wash-emotion_461922-25492.jpg?ga=GA1.1.139978101.1723207588&semt=ais_hybrid"
                  alt=""
                  className="w-full h-[100px]"
                />
                <div className="offer_box">
                  <h2>47%</h2>
                </div>
                <div className="flex flex-col items-center justify-center pb-5">
                  <h2 className="text-center text-[16px] font-semibold pt-2">
                    Whirlpool WTW8127LC
                  </h2>
                  <h2 className="text-[14px]  text-center">Price: 456345</h2>
                  <div className="w-[100px] pb-1 bg-[#395BEF] mt-2"></div>
                </div>
                <p className="px-3">
                  The Dell XPS 15 9500 is a high-performance laptop designed
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className=" bg-white relative">
                <Image
                  width={500}
                  height={600}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdjgdnxNZKgeWmF2h3JdWCgkskEELI6iBbg&s"
                  alt=""
                  className="w-full h-[100px]"
                />
                <div className="offer_box">
                  <h2>47%</h2>
                </div>
                <div className="flex flex-col items-center justify-center pb-5">
                  <h2 className="text-center text-[16px] font-semibold pt-2">
                    Dell XPS 15 9500
                  </h2>
                  <h2 className="text-[14px] text-center">Price: 456345</h2>
                  <div className="w-[100px] pb-1 bg-[#395BEF] mt-2"></div>
                </div>
                <p className="px-3">
                  The Dell XPS 15 9500 is a high-performance laptop designed
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className=" bg-white relative">
                <Image
                  width={500}
                  height={600}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdjgdnxNZKgeWmF2h3JdWCgkskEELI6iBbg&s"
                  alt=""
                  className="w-full h-[100px]"
                />
                <div className="offer_box">
                  <h2>47%</h2>
                </div>
                <div className="flex flex-col items-center justify-center pb-5">
                  <h2 className="text-center text-[16] font-semibold pt-2">
                    Dell XPS 15 9500
                  </h2>
                  <h2 className="text-[14px]  text-center">Price: 456345</h2>
                  <div className="w-[100px] pb-1 bg-[#395BEF] mt-2"></div>
                </div>
                <p className="px-3">
                  The Dell XPS 15 9500 is a high-performance laptop designed
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OffersProducts;
