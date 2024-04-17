"use client";
import React, { useState } from "react";
import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      // Handle success, e.g., show success message, redirect to login page, etc.

      if (!isValidEmail(formData.email)) {
        return;
      }

      // Add your additional validation logic here
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error, e.g., show error message to user
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200 py-5 px-3">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-center lg:text-left">
          Register!
        </h1>
        <div className="shadow-lg bg-base-100 rounded-lg p-6 lg:p-10 w-full max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                className="file-input input input-bordered input-primary w-full py-2 px-4 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <button className="btn btn-primary w-full py-2 rounded-lg font-semibold">
                Sign up
              </button>
            </div>
            <div className="divider text-center mb-4">OR</div>
            <p className="text-center">
              Already Have an Account?{" "}
              <Link href="/login" className="link text-primary font-semibold">
                Login
              </Link>
            </p>
          </form>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
