import React from "react";

import icon1 from "../assets/icon1.png";
import pattern1 from "../assets/pattern1.png";
import cardData from "./js/cardData";

import { BsArrowUpRightCircle } from "react-icons/bs";

const Services = () => {
  return (
    <section>
      <div className="relative bg-orange-50 py-10 px-5">
        <div className="mx-auto">
          <img
            src={pattern1}
            alt="pattern"
            className="absolute top-0 right-0"
          />
          <img src={icon1} alt="icon1" className="mx-auto mb-4" />
          <h3 className="text-center font-bold text-2xl mb-4">
            Our practice areas
          </h3>
          <p className="text-center text-black mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          </p>
          <p className="bg-black px-2 py-3 text-center text-white mx-8 rounded-md cursor-pointer transition duration-200 border-2 mb-16 border-black hover:bg-orange-50 hover:text-black hover:border-black md:w-60 md:mx-auto">
            View all practice areas
          </p>

          <div className="md:flex md:flex-wrap md:gap-2 md:items-stretch">
            {cardData.map((data) => (
              <div className="flex-1">
                <div className="bg-white py-10 px-2 rounded-xl" key={data.icon}>
                  <img src={data.icon} alt="icon" className="mx-auto mb-4" />
                  <h3 className="text-center text-lg font-bold mb-4">
                    {data.h3}
                  </h3>
                  <p className="text-center text-gray-800 mb-4">{data.p}</p>
                  <a href="#link" className="block mt-10">
                    <BsArrowUpRightCircle className="mx-auto text-4xl text-gray-700" />
                  </a>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;