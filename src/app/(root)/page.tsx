"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaImage, FaMusic, FaVideo, FaInfinity } from "react-icons/fa";

import Dropzone from "@/components/Dropzone";

const Home = () => {
  return (
    <div className="pb-2 -mt-48">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-4 lg:px-2 py-6 lg:py-10 rounded-xl space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Convert Files Effortlessly and Free
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            ZapConvert makes it super simple to convert images, videos, and
            audio files — all for free and without any limits. Just upload, and
            we’ll handle the rest!
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg shadow-sm">
              <FaImage className="text-blue-500 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Image to Image</h3>
                <p className="text-sm text-gray-500">PNG, JPG, WebP etc...</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg shadow-sm">
              <FaMusic className="text-purple-500 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Audio Formats</h3>
                <p className="text-sm text-gray-500">MP3, WAV, FLAC, etc.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg shadow-sm">
              <FaVideo className="text-green-500 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Video Support</h3>
                <p className="text-sm text-gray-500">MP4, AVI, MOV</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-pink-50 p-4 rounded-lg shadow-sm">
              <FaInfinity className="text-pink-500 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Unlimited Free</h3>
                <p className="text-sm text-gray-500">No signup. No limits.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/696e3545-4d3b-415a-97bc-9c68761488aa/ZOPr92Tp2i.lottie"
            loop
            autoplay
            style={{ height: "700px", width: "600px" }}
          />
        </div>
      </div>

      <div className="-mt-8 mb-6">
        <Dropzone />
      </div>
    </div>
  );
};

export default Home;
