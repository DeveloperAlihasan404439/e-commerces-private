import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import './RightCarousel.css'
function RightCarousel() {
  return (
    <div className="pb-2">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <h2 className="p-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            veniam tenetur incidunt, porro accusantium totam vel dolorem. Animi
            possimus repudiandae dolorum, voluptates sit aliquid corrupti
            pariatur, inventore minima aut ad!
          </h2>
          <div className="flex items-center gap-2 px-2 mb-2">
            <Image
              width={300}
              height={300}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjxRQj30EfI6RL6tf48xHQM6yZcA381t5zEJ81CzwWsU5MDfWxhbfSUXO3cgsdY_qYQU&usqp=CAU"
              alt="carouse 1"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2>Ali Hasan</h2>
              <h2>Front End</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="p-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            veniam tenetur incidunt, porro accusantium totam vel dolorem. Animi
            possimus repudiandae dolorum, voluptates sit aliquid corrupti
            pariatur, inventore minima aut ad!
          </h2>
          <div className="flex items-center gap-2 px-2">
            <Image
              width={300}
              height={300}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuVF1JBeNhZXun04ii-_8Mtf7fGs7-o5rlFYRAxKTKcnuS-ngwcybPVw8IRSVTHczfng&usqp=CAU"
              alt="carouse 1"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2>Ali Hasan</h2>
              <h2>React Developer</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="p-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            veniam tenetur incidunt, porro accusantium totam vel dolorem. Animi
            possimus repudiandae dolorum, voluptates sit aliquid corrupti
            pariatur, inventore minima aut ad!
          </h2>
          <div className="flex items-center gap-2 px-2 mb-2">
            <Image
              width={300}
              height={300}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjxRQj30EfI6RL6tf48xHQM6yZcA381t5zEJ81CzwWsU5MDfWxhbfSUXO3cgsdY_qYQU&usqp=CAU"
              alt="carouse 1"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2>Ali Hasan</h2>
              <h2>Full Stack</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RightCarousel;
