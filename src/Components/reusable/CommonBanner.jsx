import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CommonBanner = ({
  backgroundImage,
  title,
  textColor = "text-white",
  overlay = "from-black/30 to-black/40",
  height = "min-h-screen",
}) => {
  const location = useLocation();
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShrunk(true);
    }, 500);

    return () => setIsShrunk(false);
  }, [location.pathname]);

  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out ${
        isShrunk ? "min-h-[50vh]" : height
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlay} z-10`} />

      {/* Centered Text */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isShrunk ? "min-h-[50vh]" : height
        }`}
      >
        <h1 className={`text-4xl lg:text-6xl ${textColor} text-center`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CommonBanner;
