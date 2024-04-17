import React from "react";

const confirmOTP = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="block ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Confrim OTP</h1>
          <p className="text-center">Check your mail and confirm OTP</p>
        </div>

        <div className="flex  items-center justify-center">
          <input
            type="text"
            className="input input-bordered input-primary w-12 max-w-xs m-2 "
            max={1}
          />
          <input
            type="text"
            className="input input-bordered input-primary w-12 max-w-xs m-2"
          />
          <input
            type="text"
            className="input input-bordered input-primary w-12 max-w-xs m-2"
          />
          <input
            type="text"
            className="input input-bordered input-primary w-12 max-w-xs m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default confirmOTP;
