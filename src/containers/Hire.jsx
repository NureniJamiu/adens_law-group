import React from "react";

import tick from "../assets/tick.png";
import expert6 from "../assets/expert6.png";
import expert7 from "../assets/expert7.png";
import expert5 from "../assets/expert5.png";
import expert3 from "../assets/expert3.png";
import expert4 from "../assets/expert4.png";
import expert2 from "../assets/expert2.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Hire = () => {
  return (
    <div className=" mt-20 mb-10 mx-2 md:flex md:items-center lg:mt-20 lg:px-28">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-center md:pl-4 md:w-96 md:text-left md:font-bold lg:px-0">
          If you find yourself in trouble, our lawyers can guide you
        </h3>
        <p className="text-center my-4 text-gray-800 md:pl-4 md:text-left md:w-96 lg:px-0 lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          officia reprehenderit aut error aspernatur iure quo praesentium,
          eveniet facilis
        </p>
        <a href="#link">
          <p className="text-center cursor-pointer bg-black text-white px-6 py-4 mx-20 rounded-lg mb-6 border-2 transition duration-200 border-black hover:bg-white hover:text-black md:px-2 md:py-3 md:ml-3 md:w-52 lg:w-64 lg:mx-0">
            Hire an Expert
          </p>
        </a>
        <div className="flex align-middle justify-around mb-6 md:justify-start md:ml-3 md:gap-3 lg:mx-0">
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle className="text-green-500" />
            <span>Experienced lawyers</span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle className="text-green-500" />
            <span>Reasonable prices</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col gap-4 md:flex-1 md:grid md:grid-cols-2 lg:grid-cols-3">
        <img src={expert6} alt="experts" />
        <img src={expert7} alt="experts" />
        <img src={expert5} alt="experts" />
        <img src={expert3} alt="experts" />
        <img src={expert4} alt="experts" />
        <img src={expert2} alt="experts" />
      </div>
    </div>
  );
};

export default Hire;
