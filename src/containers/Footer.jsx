import React from "react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black pt-10 px-4 md:px-8 lg:px-28">
      <div className="grid gap-4 md:grid md:grid-cols-6 md:gap-4">
        <div className="col-span-2">
          <img src={logo} alt="logo" />
          <p className="text-gray-400 text-sm my-4 md:pr-8">
            We offer top level legal and business services to both local and
            international clients. Our expertise on legal issues cuts across
            borders.
          </p>
        </div>
        <div>
          <p className="text-gray-400 font-bold text-sm mb-2">Practice areas</p>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Media & entertainment
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Corporate commercial
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Real estate
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Commercial arbitration
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Regulatory & compliance
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Intellectual property law
            </p>
          </a>
        </div>
        <div className="text-gray-400 text-right md:text-left">
          <p className="text-gray-400 text-sm font-bold mb-2">Company</p>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              About us
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">Terms</p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Privacy policy
            </p>
          </a>
        </div>
        <div className="text-gray-400">
          <p className="text-gray-400 text-sm font-bold mb-2">Social Handles</p>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Twitter
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              LinkedIn
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Instagram
            </p>
          </a>
          <a href="#links">
            <p className="text-white text-xs mb-2 hover:text-gray-500">
              Youtube
            </p>
          </a>
        </div>
        <div className="text-gray-400 text-right md:text-left">
          <p className="text-gray-400 text-sm font-bold mb-2">Contact</p>

          <p className="text-white text-xs mb-2">
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </p>
          <p className="text-white text-xs mb-2">hello@adenslawgroup.com</p>
          <p className="text-white text-xs mb-2">(+234) 9160 258 105</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs pt-8 pb-4">
        ©2022 Adens Law Group - RC 1405222
      </p>
    </div>
  );
};

export default Footer;
