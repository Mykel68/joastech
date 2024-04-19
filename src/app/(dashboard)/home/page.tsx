import React from "react";
import Drawer from "@/components/Drawer";

import Carousel from "@/components/static/carousel/Carousel";

const Profile = () => {
  return (
    <Drawer>
      <div className="navbar">Navbar content</div>
      <div className="content">
        {/* Home page content */}
        <Carousel />
        <h1>Home Page</h1>
        <p>This is the home page content.</p>
      </div>
      <div className="footer">Footer content</div>
    </Drawer>
  );
};

export default Profile;
