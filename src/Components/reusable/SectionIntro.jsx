// components/SectionIntro.jsx
import React from "react";

const SectionIntro = ({
  backgroundText,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  subtitleSize,
  strokeClassName,
  className = "",
}) => {
  return (
    <div className={`relative min-h-[300px] ${className}`}>
      {/* Background Text */}
      <h1
        className={`absolute ${strokeClassName} mask-gradient text-[150px] md:text-[200px] select-none pointer-events-none hidden md:block`}
      >
        {backgroundText}
      </h1>

      {/* Gradient Fade */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#142929] to-transparent z-0" /> */}

      {/* Foreground Content */}
      <div className="relative z-10 text-left md:pl-16 pt-24 md:pt-32">
        <h2 className={`${titleColor} text-4xl md:${subtitleSize} mb-4`}>
          {title}
        </h2>
        <p className={`${subtitleColor} text-sm `}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionIntro;
