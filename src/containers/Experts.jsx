import React from "react";

import { BsLinkedin } from "react-icons/bs";

import expertsData from "./js/expertsData";

const Experts = () => {
  return (
    <div className="py-10 px-2">
      <h3 className="text-2xl text-center font-bold mb-2">Meet Our Experts</h3>
      <p className="text-center text-gray-800 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="md:flex md:flex-wrap">
        {expertsData.map((data) => (
          <>
            <div key={data.name} className="relative md:flex-1">
              <img src={data.image} alt="expert" />
              <div className="absolute left-5 bottom-5 flex justify-between items-center w-72">
                <div>
                  <p className="text-md font-semibold text-white">
                    {data.name}
                  </p>
                  <p className="text-sm text-white">{data.position}</p>
                </div>
                <a href="#links" className="block text-white text-2xl">
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Experts;
