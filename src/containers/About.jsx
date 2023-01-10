import React from "react";

import pattern2 from "../assets/pattern2.png";
import aboutImage from "../assets/about.png";
import playIcon from "../assets/play.png";
import star from "../assets/star.png";

const About = () => {
  return (
    <div className="py-10 px-4 relative md:flex md:justify-between md:px-12 md:items-center lg:px-28 ">
      <div className="flex-1">
        <img src={pattern2} alt="pattern" className="absolute top-0 left-0" />
        <h3 className="text-2xl font-bold mb-4 md:text-xl lg:text-3xl">
          Giving our all is all we do
        </h3>
        <p className="text-gray-800 mb-5 md:text-sm md:text-justify md:w-96 lg:w-auto lg:pr-32 lg:text-base">
          "When all is said and done, more is always said than done". But that's
          not how it's done at Adens Law Group. We understand that we are legal
          practitioners in a new age and beyond doing the job, we firmly believe
          that getting the job done right is as important.
        </p>
        <p className="font-cursive italic text-xl mb-2 md:text-lg lg:text-2xl">
          Nureni Jamiu O.
        </p>
        <p className="text-xs font-bold mb-8 lg:text-sm">
          Principal Partner, Adeniyi & Co Legal
        </p>
      </div>

      <div className="md:relative">
        <img src={aboutImage} alt="aboutImage" className="relative z-10" />
        <img
          src={star}
          alt="star"
          className="absolute right-0 bottom-72 z-0 md:-left-2 md:-top-8"
        />

        <div className=" flex absolute left-6 bottom-14 z-20 gap-2 md:left-4 md:bottom-4">
          <img src={playIcon} alt="playIcon" width={40} />
          <div>
            <p className="font-bold text-white text-sm">Play this video</p>
            <p className="text-xs text-gray-200">To understand our mission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
