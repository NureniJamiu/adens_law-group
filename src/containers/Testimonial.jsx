import React from "react";

import hustlerCapital from "../assets/hustlerCapital.png";
import testimonialData from "./js/testimonialData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div>
      <h3 className="text-2xl text-center font-semibold px-4 mb-5">
        Here's what some of our clients have to say
      </h3>
      <div className="bg-black pb-4">
        {/* swiper start */}

        <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonialData.map((data) => (
              <SwiperSlide>
                <div className="swiper">
                  <img src={data.image} alt="client1" />
                  <p className="text-white text-center mt-8 mb-4 px-8 font-bold">
                    {data.testimonial}
                  </p>
                  <p className="text-gray-300 text-center text-sm font-semibold mb-4">
                    {data.name}
                  </p>
                </div>
                <img
                  src={hustlerCapital}
                  alt="Hustler Capital"
                  className="mx-auto mb-6"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>

        {/* swiper end */}
      </div>
    </div>
  );
};

export default Testimonial;
