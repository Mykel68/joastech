"use client";
import React from "react";
import Bitcoin from "@/components/animinations/bitcoin_spining.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-[#1C2833] to-[#273746] flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pr-12 order-2 lg:order-1">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 text-center lg:text-left">
            Unlock the Power of Crypto Trading with Our Expert-Curated Platform
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 text-center lg:text-left">
            Start selling your crypto assets through our secure and reliable
            platform, backed by industry experts. Join the future of
            decentralized finance today.
          </p>
          <button className="btn btn-primary bg-[#007bff] hover:bg-[#0056b3] text-white font-bold py-3 px-8 rounded-full w-full lg:w-auto mx-auto lg:mx-0">
            Start Selling
          </button>
        </div>
        <div className="w-full lg:w-1/2 pb-10 lg:pb-0 order-1 lg:order-2">
          <div
            className="w-full"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <Lottie animationData={Bitcoin} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
