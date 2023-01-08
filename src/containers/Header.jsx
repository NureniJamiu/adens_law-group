import React from "react";

import headerImage from "../assets/header.png";
import stamp from "../assets/stamp.png";

const Header = () => {
  return (
    <div className="relative bg-black px-10 py-8 text-center">
      <img
        src={headerImage}
        alt="header"
        className="hidden md:block md:mx-auto md:w-60 md:h-10 md:object-cover md:mb-6 md:rounded-md"
      />
      <h3 className="text-center text-white text-2xl font-bold mb-6 md:w-96 md:mx-auto md:mb-2">
        Advocating for both local and international clients since ‘90s
      </h3>
      <p className="text-gray-300 text-center mb-6 md:w-80 md:mx-auto md:text-sm">
        We offer top level legal and business services to both local and
        international clients. Our expertise on legal issues cuts across
        borders.
      </p>
      <p className="bg-gray-300 text-center rounded-md py-4 mb-10 cursor-pointer md:inline-block md:text-sm md:px-6">
        Request a consultation
      </p>
      <div>
        <img src={headerImage} alt="header" className="md:hidden" />
        <img
          src={stamp}
          alt="stamp"
          className="absolute right-5 bottom-1 md:right-20 md:bottom-8"
        />
      </div>
    </div>
  );
};

export default Header;
