import React from "react";

import tick from "../assets/tick.png";
import expert6 from "../assets/expert6.png";
import expert7 from "../assets/expert7.png";
import expert9 from "../assets/expert9.png";
import expert10 from "../assets/expert10.png";
import expert4 from "../assets/expert4.png";
import expert2 from "../assets/expert2.png";

const Hire = () => {
  return (
    <div className="my-10 mx-2 md:flex">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-center">
          If you find yourself in trouble, our lawyers can guide you
        </h3>
        <p className="text-center my-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          officia reprehenderit aut error aspernatur iure quo praesentium,
          eveniet facilis
        </p>
        <a href="#link">
          <p className="text-center cursor-pointer bg-black text-white px-6 py-4 mx-20 rounded-lg mb-6 border-2 transition duration-200 border-black hover:bg-white hover:text-black">
            Hire an Expert
          </p>
        </a>
        <div className="flex align-middle justify-around mb-6">
          <div className="flex align-middle gap-1">
            <img src={tick} alt="tick" width={20} />
            <span>Experienced lawyers</span>
          </div>
          <div className="flex align-middle gap-1">
            <img src={tick} alt="tick" width={20} />
            <span>Reasonable prices</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex-1">
        <div className="flex gap-2 flex-wrap md:grid md:grid-cols-3">
          <img src={expert6} alt="expert" className=" flex-1 w-40" />
          <img src={expert7} alt="expert" className="flex-1 w-40" />
          <img src={expert9} alt="expert" className="flex-1" />
          <div className="flex gap-2">
            <img src={expert10} alt="expert" className="flex-1" />
            <div className="flex flex-col gap-2">
              <img src={expert4} alt="expert" className="flex-1" />
              <img src={expert2} alt="expert" className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
