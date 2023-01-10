import React from "react";

import icon1 from "../assets/icon1.png";
import pattern1 from "../assets/pattern1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

import { BsArrowUpRightCircle } from "react-icons/bs";

const Services = () => {
  return (
    <section>
      <div className="relative bg-orange-50 py-10 px-5">
        <div className="mx-auto md:flex md:gap-4">
          {/* FIRST FLEX */}
          <div className="md:flex-1">
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
          </div>

          {/* SECOND FLEX */}

          <div className=" md:flex-1 md:flex md:flex-col md:gap-2">
            <div className="bg-white py-10 px-2 rounded-xl">
              <img src={icon2} alt="icon" className="mx-auto mb-4" />
              <h3 className="text-center text-lg font-bold mb-4">
                Media & Entertainment
              </h3>
              <p className="text-center text-gray-800 mb-4">
                Our media and entertainment practice group cuts across
                commercial, intellectual property and litigation in the
                entertainment industry.
              </p>
              <a href="#link" className="block mt-10">
                <BsArrowUpRightCircle className="mx-auto text-4xl text-gray-700" />
              </a>
            </div>
            <br />
            <div>
              <div className="bg-white py-10 px-2 rounded-xl">
                <img src={icon4} alt="icon" className="mx-auto mb-4" />
                <h3 className="text-center text-lg font-bold mb-4">
                  Real Estate
                </h3>
                <p className="text-center text-gray-800 mb-4">
                  Our real estate practice covers a wide variety of clients and
                  interests. We engage in all aspects of real estate
                  transactions.
                </p>
                <a href="#link" className="block mt-10">
                  <BsArrowUpRightCircle className="mx-auto text-4xl text-gray-700" />
                </a>
              </div>
              <br />
            </div>
          </div>
          {/* THIRD FLEX */}

          <div className="md:flex-1 md:flex md:flex-col md:gap-2">
            <div className="bg-white py-10 px-2 rounded-xl">
              <img src={icon3} alt="icon" className="mx-auto mb-4" />
              <h3 className="text-center text-lg font-bold mb-4">
                Corporate Commercial
              </h3>
              <p className="text-center text-gray-800 mb-4">
                We provide a full range of legal advisory services with a
                creative problem-solving approach to the commercial and business
                needs of our clients.
              </p>
              <a href="#link" className="block mt-10">
                <BsArrowUpRightCircle className="mx-auto text-4xl text-gray-700" />
              </a>
            </div>
            <br />
            <div>
              <div className="bg-white py-10 px-2 rounded-xl">
                <img src={icon5} alt="icon" className="mx-auto mb-4" />
                <h3 className="text-center text-lg font-bold mb-4">
                  Commercial Arbitration
                </h3>
                <p className="text-center text-gray-800 mb-4">
                  Our dispute resolution team represents clients interests in
                  courts and tribunals located in various states in Nigeria.
                </p>
                <a href="#link" className="block mt-10">
                  <BsArrowUpRightCircle className="mx-auto text-4xl text-gray-700" />
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
