import React from "react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black pt-10 px-4">
      <img src={logo} alt="logo" />
      <p className="text-gray-400 text-sm my-4">
        We offer top level legal and business services to both local and
        international clients. Our expertise on legal issues cuts across
        borders.
      </p>

      <p className="text-center text-gray-400 text-xs pt-8 pb-4">
        ©2022 Adens Law Group - RC 1405222
      </p>
    </div>
  );
};

export default Footer;
