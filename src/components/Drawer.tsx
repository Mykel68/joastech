"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import Link from "next/link";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faBell,
  faBars,
  faSignOutAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      sessionStorage.removeItem("token");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div data-theme={theme} className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <div className="container mx-auto px-5 min-h-screen pb-10">
          {children}
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button md:hidden"
          style={{ position: "fixed", top: "5px", left: "20px" }}
        >
          <FontAwesomeIcon icon={faBars} className="mr-2" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="mb-4">
            <a className="btn btn-ghost text-xl">
              Joas{" "}
              <span
                className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-2xl"
                style={{ marginLeft: "-10px" }}
              >
                Tech
              </span>
            </a>
          </div>
          <div className="divider"></div>
          <ul className="menu">
            <li>
              <Link href="/home" className="btn btn-ghost justify-start">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="btn btn-ghost justify-start">
                <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                Profile
              </Link>
            </li>
            <li>
              <Link href="/wallet" className="btn btn-ghost justify-start">
                <FontAwesomeIcon icon={faWallet} className="mr-2" />
                Wallet
              </Link>
            </li>
            <li>
              <Link
                href="/notification"
                className="btn btn-ghost justify-start"
              >
                <FontAwesomeIcon icon={faBell} className="mr-2" />
                Notification
              </Link>
            </li>
            <li>
              <Link href="/history" className="btn btn-ghost justify-start">
                <FontAwesomeIcon icon={faBell} className="mr-2" />
                Transaction History
              </Link>
            </li>
          </ul>
          <div className="drawer-footer bg-base-200 mt-auto">
            <div className="divider"></div>
            <div className="menu">
              <li>
                <button
                  onClick={logout}
                  className="btn btn-ghost justify-start"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Logout
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
