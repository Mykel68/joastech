"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Toaster, toast } from "sonner";
import axios from "axios";
import Image from "next/image";
import Prelaoder from "@/components/animinations/preloader.gif";

const LoginForm: React.FC = () => {
  // Changed component name to start with uppercase
  const router = useRouter();
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/login", formData);
      const token = response.data.token;

      // Store the token in sessionStorage
      sessionStorage.setItem("token", token);

      toast.success("Login success");
      router.push("/home");
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        toast.error("Email not verified");
      } else {
        toast.error("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        {loading ? (
          <Image src={Prelaoder} alt="Loading" />
        ) : (
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-primary">Login</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered input-primary"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered input-primary"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <div className="flex flex-row justify-between">
                    <label className="label">
                      <Link
                        href="/register"
                        className="label-text-alt link link-hover text-lg"
                      >
                        New Here?
                      </Link>
                    </label>
                    <label className="label">
                      <Link
                        href="/forgottenPassword"
                        className="label-text-alt link link-hover text-secondary  "
                      >
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-1">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <Toaster position="top-right" richColors />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
