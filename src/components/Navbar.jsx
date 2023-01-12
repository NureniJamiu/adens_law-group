import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  const navigation = [
    { name: "Home" },
    { name: "Practice areas" },
    { name: "The team" },
    { name: "Blog" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-black md:px-12 lg:px-28 lg:py-1">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden sm:top-[-20rem]"></div>
      <div className="px-6 py-3 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to="/">
                <span className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8" src={logo} alt="" />
                </span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FiMenu
                  className="h-6 w-6"
                  style={{
                    color: "white",
                  }}
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:justify-center lg:gap-x-10">
              {React.Children.toArray(
                navigation.map((item) => (
                  <Link to="/construction">
                    <span className="font-semibold text-gray-400 hover:text-white text-sm">
                      {item.name}
                    </span>
                  </Link>
                ))
              )}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#links"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white border-2 transition ease-out duration-200 border-gray-300 hover:bg-gray-300 hover:text-black"
              >
                Get in touch
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-50 overflow-y-auto bg-black px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#links" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8" src={logo} alt="logo" />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only text-white">Close menu</span>
                    <MdOutlineClose
                      className="h-6 w-6"
                      style={{ color: "white" }}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {React.Children.toArray(
                      navigation.map((item) => (
                        <Link to="/construction">
                          <span
                            key={item.name}
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-400/10"
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))
                    )}
                  </div>
                  <div className="py-6">
                    <a
                      href="#links"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 border-2 border-bg-gray-400 w-32 text-gray-300 transition-all ease-out duration-200 hover:bg-gray-300 hover:text-black"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
