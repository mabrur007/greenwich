import React from "react";
import backgroundImg from "/assets/home/background-image-v2.png";
const Invest = () => {
  return (
    <div
      className="min-h-[100vh] clip-top-diagonal bg-gradient-to-t from-secondary to-transparent bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    ></div>
  );
};

export default Invest;
