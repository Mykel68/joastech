"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "@/components/Drawer";
import Carousel from "@/components/static/carousel/Carousel";
import Card from "@/components/Card";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/user");
      setUser(res.data.data.name);
    } catch (error: any) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const cards = [
    {
      title: "Life Hack 1",
      description: "Learn how to park your car in a small garage",
      imageUrl:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpgf",
    },
    {
      title: "Life Hack 2",
      description: "Discover the secrets to cooking the perfect steak",
      imageUrl:
        "https://daisyui.com/images/stock/photo-1556742523-5d64e3e8ee5c.jpg",
    },
    {
      title: "Life Hack 3",
      description: "Boost your productivity with these simple tips",
      imageUrl:
        "https://daisyui.com/images/stock/photo-1556742523-5d64e3e8ee5c.jpg",
    },
    {
      title: "Life Hack 3",
      description: "Boost your productivity with these simple tips",
      imageUrl:
        "https://daisyui.com/images/stock/photo-1556742523-5d64e3e8ee5c.jpg",
    },
  ];

  return (
    <Drawer>
      <div className="navbar">Navbar content</div>
      <div className="content">
        {/* Carousel */}
        <Carousel />

        {/* Welcome message */}
        <h1 className="text-3xl mt-6 mb-4 text-center">Hello {user}</h1>

        {/* Card section */}
        <div className="flex flex-wrap gap-4 items-center justify-center ">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default Profile;
