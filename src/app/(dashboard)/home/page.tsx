import React from "react";
import Drawer from "@/components/Drawer";
import { useRouter } from "next/router";

const Profile = () => {
  return (
    <Drawer>
      <div className="navbar">Navbar content</div>
      <div className="content">
        {/* Home page content */}
        <h1>Home Page</h1>
        <p>This is the home page content.</p>
      </div>
      <div className="footer">Footer content</div>
    </Drawer>
  );
};

export default Profile;
