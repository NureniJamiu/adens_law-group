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
        backdrop[l].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });

  return (
    <div>
      <nav className="relative py-4 px-4 flex justify-between items-center bg-black md:px-10 lg:px-28">
        <a class="text-3xl font-bold leading-none" href="#links">
          <img src={logo} alt="logo" width={150} />
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-white p-3">
            <a
              className=" inline-block py-1 px-4  bg-gray-300 text-black text-sm hover:text-white font-bold rounded-md transition duration-200 border-2 border-black  hover:bg-black  hover:border-gray-400"
              href="#links"
            >
              Menu
            </a>
          </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              class="text-sm text-white font-bold hover:text-white"
              href="#links"
            >
              Home
            </a>
          </li>

          <li>
            <a class="text-sm text-gray-400 hover:text-white" href="#links">
              Practice areas
            </a>
          </li>

          <li>
            <a class="text-sm text-gray-400 hover:text-white" href="#links">
              The team
            </a>
          </li>

          <li>
            <a class="text-sm text-gray-400 hover:text-white" href="#links">
              Blog
            </a>
          </li>
        </ul>
        <a
          class="hidden py-2 px-6 bg-black border-2 border-white  text-sm text-white font-bold rounded transition duration-200 hover:bg-gray-300 hover:border-gray-300 hover:text-black lg:inline-block"
          href="#links"
        >
          Get in touch
        </a>
      </nav>
      <div class="navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="mr-auto text-3xl font-bold leading-none" href="#links">
              <img src={logo} alt="logo" width={150} />
            </a>
            <button class="navbar-close">
              <a
                className=" inline-block py-1 px-4 bg-gray-300 text-black text-sm hover:text-white font-bold rounded-md transition duration-200 border-2 border-black hover:bg-black hover:border-gray-200"
                href="#links"
              >
                Close
              </a>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold transition duration-200 text-white hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  Home
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold transition duration-200 text-white hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  Practice areas
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold transition duration-200 text-white hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  The team
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold transition duration-200 text-white hover:bg-blue-50 hover:text-black rounded"
                  href="#links"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-black font-semibold bg-white transition duration-200 border-2 border-black hover:bg-black hover:text-white hover:border-white rounded-xl"
                href="#links"
              >
                Get in touch
              </a>
            </div>
            <p class="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
