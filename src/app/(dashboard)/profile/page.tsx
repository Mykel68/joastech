"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Drawer from "@/components/Drawer";

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/user");
      console.log("User details:", res);
      setUser(res.data.data.name);
    } catch (error: any) {
      console.error("Error fetching user details:", error.message);
    }
  };

  return (
    <Drawer>
      <div className="navbar">Navbar content</div>
      <div className="content">
        <h1>Profile Page</h1>
      </div>
      <div className="footer">Footer content</div>
    </Drawer>
  );
};

export default Home;
