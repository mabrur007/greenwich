import React from "react";
import fullviewImg from "/assets/about-us/about-full-view.jpg";
const Fullview = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center clip-diagonal -mt-24 lg:-mb-32 -mb-16"
      style={{ backgroundImage: `url(${fullviewImg})` }}
    ></div>
  );
};

export default Fullview;
