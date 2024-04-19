"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

import Link from "next/link";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    location: "",
    image: "",
  });

  const [loading, setLoading] = React.useState(false);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!isValidEmail(formData.email)) {
        return "Invalid Email";
        toast.error("Invalid Email");
      }
      const response = await axios.post("/api/register", formData);
      toast.success("Registration successful. Please verify your email.");
      router.push("/login");

      // Add your additional validation logic here
    } catch (error: any) {
      console.error("Registration error:", error.message);
      toast.error("Registration failed. Please try again.");
      // Handle error, e.g., show error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-5 px-3">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-center lg:text-left">
          {loading ? "Processing" : "Register"}
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
                value={formData.confirm_password}
                onChange={(e) =>
                  setFormData({ ...formData, confirm_password: e.target.value })
                }
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
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
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
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm  mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                value={formData.image}
                className="file-input input input-bordered input-primary w-full py-2 px-4 rounded-lg"
                // onChange={(e) =>
                //   setFormData({ ...formData, image: e.target.files[0] })
                // }
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
          <Toaster position="top-right" richColors />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
