import React from "react";

import logo from "../assets/logo.png";

const Navbar = () => {
  // Burger menus
  document.addEventListener("DOMContentLoaded", function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var k = 0; k < close.length; k++) {
        close[k].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var l = 0; l < backdrop.length; l++) {
        backdrop[k].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });
  return (
    <div>
      <nav className="relative py-4 px-2 flex justify-between items-center bg-black md:px-10 lg:px-20">
        <a className="text-3xl font-bold leading-none" href="#links">
          <img src={logo} alt="logo" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3">
            <a
              className=" inline-block py-1 px-4 bg-black hover:bg-white hover:text-black text-sm text-white font-bold rounded-md transition duration-200 border-2 border-gray-400"
              href="#links"
            >
              Menu
            </a>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-100"
              href="#links"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-100"
              href="#links"
            >
              Practice areas
            </a>
          </li>

          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-100"
              href="#links"
            >
              The team
            </a>
          </li>

          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-100"
              href="#links"
            >
              Blog
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-blackhover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 lg:border-2 lg:border-gray-400"
          href="#links"
        >
          Get in touch
        </a>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-3xl font-bold leading-none"
              href="#links"
            >
              <img src={logo} alt="logo" />
            </a>
            <button className="navbar-close">
              <a
                className=" inline-block py-1 px-2 bg-black hover:bg-white hover:text-black text-sm text-white font-bold rounded-md transition duration-200 border-2 border-gray-400"
                href="#links"
              >
                Close
              </a>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  Practice areas
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  The team
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-black border-2 border-white hover:bg-white hover:text-black  rounded-xl"
                href="#links"
              >
                Get in touch
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
