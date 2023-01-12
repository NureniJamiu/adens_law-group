import React from "react";

import { Accordion } from "../components";
import { GiSelfLove } from "react-icons/gi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black pt-10 px-4 md:px-12 lg:px-28">
      <img src={logo} alt="logo" className="md:hidden" />
      <p className="text-gray-400 text-sm mt-4 md:hidden">
        We offer top level legal and business services to both local and
        international clients. Our expertise on legal issues cuts across
        borders.
      </p>
      <Accordion />
      {/*  REMEMBER TO ADD GRID TO THE CLASSNAME BELOW */}
      <div className="hidden gap-4 md:grid md:grid-cols-6 md:gap-4">
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
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Media & entertainment
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Corporate commercial
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Real estate
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Commercial arbitration
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Regulatory & compliance
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Intellectual property law
            </p>
          </a>
        </div>
        <div className="text-gray-400 text-right md:text-left">
          <p className="text-gray-400 text-sm font-bold mb-2">Company</p>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              About us
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Terms
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Privacy policy
            </p>
          </a>
        </div>
        <div className="text-gray-400">
          <p className="text-gray-400 text-sm font-bold mb-2">Social Handles</p>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Twitter
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              LinkedIn
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Instagram
            </p>
          </a>
          <a href="#links">
            <p className="text-gray-400 text-xs mb-2 hover:text-gray-500">
              Youtube
            </p>
          </a>
        </div>
        <div className="text-gray-400 text-right md:text-left">
          <p className="text-gray-400 text-sm font-bold mb-2">Contact</p>

          <p className="text-gray-400 text-xs mb-2">
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </p>
          <p className="text-gray-400 text-xs mb-2">hello@adenslawgroup.com</p>
          <p className="text-gray-400 text-xs mb-2">(+234) 9160 258 105</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs pt-8 pb-2">
        ©2022 Adens Law Group - RC 1405222
      </p>
      <p className="text-center text-gray-400 text-xs pb-4">
        Made &nbsp; with &nbsp;{" "}
        <GiSelfLove style={{ color: "red", display: "inline" }} />
        &nbsp; by &nbsp;
        <a
          href="https://dhulnurein.netlify.app"
          className="text-blue-400 tracking-wide font-bold"
          target="_blank"
          rel="noreferrer"
        >
          dhulnurein
        </a>
      </p>
    </div>
  );
};

export default Footer;
