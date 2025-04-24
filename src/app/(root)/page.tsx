"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Dropzone from "@/components/Dropzone";

const Home = () => {
  return (
    <div className="space-y-4 pb-1">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-10 px-6 lg:px-20 rounded-xl">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Ultimate Free File Converter
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Easily convert images, audio, and video files with no limits.
            Simple. Fast. Free.
          </p>
        </div>

        {/* Right Section - Lottie Animation */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/696e3545-4d3b-415a-97bc-9c68761488aa/ZOPr92Tp2i.lottie"
            loop
            autoplay
            style={{ height: "350px", width: "350px" }}
          />
        </div>
      </div>

      {/* Dropzone Section */}
      <Dropzone />
    </div>
  );
};

export default Home;
