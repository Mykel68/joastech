// Profile.js
import React from "react";
import Drawer from "@/components/Drawer";

const Profile = () => {
  return (
    <Drawer>
      <div className="navbar">Navbar content</div>
      <div className="content">
        {/* Profile page content */}
        <h1>Home Page</h1>
        <p>This is the profile page content.</p>
      </div>
      <div className="footer">Footer content</div>
    </Drawer>
  );
};

export default Profile;
