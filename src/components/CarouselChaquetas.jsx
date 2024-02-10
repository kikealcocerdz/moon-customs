// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <h3 className="text-3xl text-white relative top-3/4 font-bold">
            CHAQUETAS
          </h3>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img src="./chaqueta1rm.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./chaqueta2rm.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./chaqueta3rm.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./chaqueta4rm.png"></img>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl text-white relative top-3/4 font-bold">
            ZAPATILLAS
          </h3>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img src="./airforce2rm.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./airforce1rm.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./zapatillas4rm.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./zapatillas5rm.png"></img>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl text-white relative top-3/4 font-bold">
            TOTES
          </h3>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img src="./bolsa1.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./bolsa2.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./bolsa3.png"></img>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
