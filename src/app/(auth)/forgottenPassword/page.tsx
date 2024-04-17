import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 px-3">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">
              Forgotten Password!
            </h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              .
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-primary"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
