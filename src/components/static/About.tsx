"use client";
import React from "react";
import coins from "@/components/animinations/coins.json";
import bitcoin from "@/components/animinations/bitcoin.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-4">
            <div
              className="w-full md:max-w-xs mx-auto"
              style={{ maxWidth: "400px", height: "200px" }}
            >
              <Lottie animationData={coins} loop={true} />
            </div>
          </div>

          <div className="w-full md:w-1/3 pt-1 md:px-0 px-4">
            <p className="text-2xl mb-4 text-center md:text-left">
              Welcome to our Crypto Trading Platform. We are a team of
              experienced crypto enthusiasts who are dedicated to providing you
              with the best trading experience.
            </p>
            <p className="text-2xl text-center md:text-left">
              Our platform is designed to be user-friendly and intuitive, making
              it easy for you to trade your favorite crypto assets with
              confidence.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <div
              className="w-full md:max-w-xs mx-auto"
              style={{ maxWidth: "400px", height: "200px" }}
            >
              <Lottie animationData={bitcoin} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
