import React from "react";
import { Navbar } from "../components";
import { Footer } from "../containers";
import { Link } from "react-router-dom";
import construction from "../assets/construction.jpg";

const Construction = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-4 py-8 md:flex-row md:items-center md:mx-10 lg:mx-24">
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-2">Oops!</h3>
          <p className="text-2xl font-bold mb-2">
            Under<span className="text-red-500 "> Construction</span>
          </p>
          <p className="text-gray-800 mb-4">
            This site is temporarily under construction. Please check back
            later!
          </p>
          <Link to="/">
            <p className="my-2 bg-black border-2 border-black text-white w-44 rounded-md py-2 text-center transition ease-out duration-200 hover:bg-white hover:border-black hover:text-black">
              Back to homepage
            </p>
          </Link>
        </div>
        <div className="flex-1 mt-2">
          <img
            src={construction}
            alt="construction site"
            className="rounded-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
