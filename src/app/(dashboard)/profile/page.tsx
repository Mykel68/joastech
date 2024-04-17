
import React from "react";
import Drawer from "@/components/Drawer";

const Home = () => {
  return (
    <Drawer>
      <div className="navbar">Navbar content</div>
      <div className="content">
        {/* Home page content */}
        <h1>Profile Page</h1>
        <p>This is the home page content.</p>
      </div>
      <div className="footer">Footer content</div>
    </Drawer>
  );
};

export default Home;
