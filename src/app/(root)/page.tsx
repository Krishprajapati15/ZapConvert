"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaImage, FaMusic, FaVideo, FaInfinity } from "react-icons/fa";
import Dropzone from "@/components/Dropzone";

const Home = () => {
  return (
    <div className="pb-2 -mt-20">
      {/* Main Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-white px-4 md:px-8 py-10 rounded-xl gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Convert Files Effortlessly and Free
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl">
            ZapConvert makes it super simple to convert images, videos, and
            audio files — all for free and without any limits. Just upload, and
            we’ll handle the rest!
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg shadow-sm">
              <FaImage className="text-blue-500 text-xl shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Image to Image</h3>
                <p className="text-sm text-gray-500">PNG, JPG, WebP etc...</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg shadow-sm">
              <FaMusic className="text-purple-500 text-xl shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Audio Formats</h3>
                <p className="text-sm text-gray-500">MP3, WAV, FLAC, etc.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
              <FaVideo className="text-green-500 text-xl shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Video Support</h3>
                <p className="text-sm text-gray-500">MP4, AVI, MOV</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-pink-50 p-4 rounded-lg shadow-sm">
              <FaInfinity className="text-pink-500 text-xl shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Unlimited Free</h3>
                <p className="text-sm text-gray-500">No signup. No limits.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="h-auto w-full max-w-[650px] sm:max-w-[750px] md:max-w-[800px] min-h-[400px]">
            <DotLottieReact
              src="https://lottie.host/696e3545-4d3b-415a-97bc-9c68761488aa/ZOPr92Tp2i.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Dropzone Section */}
      <div className="px-4 sm:px-8 mt-6 mb-6">
        <Dropzone />
      </div>
    </div>
  );
};

export default Home;
