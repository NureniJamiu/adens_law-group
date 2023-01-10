import React from "react";

import { BsLinkedin } from "react-icons/bs";

import expert1 from "../assets/expert1.png";
import expert2 from "../assets/expert2.png";
import expert3 from "../assets/expert3.png";
import expert4 from "../assets/expert4.png";
import expert5 from "../assets/expert5.png";
import expert6 from "../assets/expert6.png";
import expert7 from "../assets/expert7.png";
import expert8 from "../assets/expert8.png";

const Experts = () => {
  return (
    <div className="py-10 px-2">
      <h3 className="text-2xl text-center font-bold mb-2 md:hidden">
        Meet Our Experts
      </h3>
      <p className="text-center text-gray-800 mb-4 md:hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="flex flex-col gap-2">
        {/* FLEX ONE */}
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="relative md:flex-1">
            <img src={expert1} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">Ademola M. A</p>
                <p className="text-sm text-white">Principal Partner</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="relative md:flex-1">
            <img src={expert2} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">
                  Kendrick Lawrence
                </p>
                <p className="text-sm text-white">Managing Partner</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="relative md:flex-1">
            <img src={expert3} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">
                  Elizabeth Curry
                </p>
                <p className="text-sm text-white">Senior Associate</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* FLEX TWO */}
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="relative md:flex-1">
            <img src={expert4} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">Janet Dorsey</p>
                <p className="text-sm text-white">Senior Associate</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="hidden md:block md:relative md:flex-1">
            <h3 className="text-center text-2xl font-bold px-8 pt-16">
              Meet Our Experts
            </h3>
            <p className="text-center text-gray-700 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="relative md:flex-1">
            <img src={expert5} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">
                  Theressa Jacobs
                </p>
                <p className="text-sm text-white">Senior Associate</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* FLEX THREE */}
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="relative md:flex-1">
            <img src={expert6} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">Mariah Jack</p>
                <p className="text-sm text-white">Senior Associate</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="relative md:flex-1">
            <img src={expert7} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">
                  Stephanie Anderson
                </p>
                <p className="text-sm text-white">Senior Associate</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="relative md:flex-1">
            <img src={expert8} alt="expert" />
            <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
              <div>
                <p className="text-md font-semibold text-white">Stella Smith</p>
                <p className="text-sm text-white">Associate</p>
              </div>
              <a href="#links" className="block text-white text-2xl">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-wrap"></div>
    </div>
  );
};

export default Experts;
