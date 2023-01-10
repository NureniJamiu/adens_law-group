import React from "react";

import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";

const Clients = () => {
  return (
    <div className="mb-10 md:px-12 lg:px-0">
      <h3 className="text-3xl font-semibold text-center mb-8 md:font-bold ">
        Our clients
      </h3>
      <div className="flex overflow-auto gap-2 h-20 px-2 md:grid md:grid-cols-7 md:h-auto lg:px-28">
        <img src={partner5} alt="partner" className="bg-black rounded-lg" />
        <img src={partner3} alt="partner" className="bg-gray-300 rounded-lg" />
        <img src={partner4} alt="partner" className="rounded-lg" />
        <img src={partner2} alt="partner" className="bg-gray-300 rounded-lg" />
        <img src={partner1} alt="partner" className="rounded-lg" />
        <img src={partner6} alt="partner" className="bg-gray-300 rounded-lg" />
        <img src={partner7} alt="partner" className="bg-black rounded-lg" />
      </div>
    </div>
  );
};

export default Clients;
