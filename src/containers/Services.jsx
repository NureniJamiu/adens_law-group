import React from "react";

import icon1 from "../assets/icon1.png";
import pattern1 from "../assets/pattern1.png";
import cardData from "./js/cardData";
import { Link } from "react-router-dom";

import { BsArrowUpRightCircle } from "react-icons/bs";

const Services = () => {
  return (
    <section className="transition ease duration-100">
      <div className="relative bg-orange-50 py-10 px-5 md:px-12 lg:px-28">
        <div className="md:grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src={pattern1}
              alt="pattern"
              className="absolute top-0 right-0"
            />
            <img src={icon1} alt="icon1" className="mx-auto mb-4" />
            <h3 className="text-center font-bold text-2xl mb-4 md:text-xl">
              Our practice areas
            </h3>
            <p className="text-center text-black mb-6 md:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            </p>
            <Link to="/construction">
              <p className="bg-black px-2 py-3 text-center text-white mx-8 rounded-md cursor-pointer transition duration-200 border-2 mb-16 border-black hover:bg-orange-50 hover:text-black hover:border-black md:w-60 md:mx-auto">
                View all practice areas
              </p>
            </Link>
          </div>

          <div className="md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
            {React.Children.toArray(
              cardData.map((data, index) => (
                <>
                  <div className="bg-white py-10 px-2 rounded-xl md:py-7 md:col-span-1">
                    <img src={data.icon} alt="icon" className="mx-auto mb-4" />
                    <h3 className="text-center text-lg font-bold mb-4 md:text-base">
                      {data.h3}
                    </h3>
                    <p className="text-center text-gray-800 mb-4 md:px-5 md:text-sm">
                      {data.p}
                    </p>
                    <a href="#link" className="block mt-10 md:mt-6">
                      <BsArrowUpRightCircle className="mx-auto text-4xl text-gray-700 md:text-3xl" />
                    </a>
                  </div>
                  <br className="md:hidden" />
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
