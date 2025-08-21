import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutBanner from "/assets/about-us/banner.png";
import orangeLogo from "../../../../public/assets/about-us/logo.svg";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-24 py-16 relative">
      {/* Background Orange Logo */}
      <div className="absolute top-0 -right-[10%] opacity-10 -z-10 hidden lg:block">
        <img className="h-[600px]" src={orangeLogo} alt="orange-logo" />
      </div>

      {/* Content */}
      <div className="mb-16 relative z-10" data-aos="fade-up">
        <h1 className="text-4xl lg:text-6xl text-[#142929] mb-4">
          About Greenwich Hill Station
        </h1>
        <p className="text-[#5C7069]">
          Greenwich Hill Station is a premier project by Bhaiya Hotels & Resorts
          Ltd., a key concern of the Bhaiya Group of Industries. With over 50
          years of legacy, the Bhaiya Group, founded by Maksud Ali, is a leading
          Bangladeshi conglomerate with 17 major sectors, including real estate
          and hospitality. Bhaiya Hotels & Resorts, inspired by successes like
          Eden Bay Hotel in Cox’s Bazar, brings luxury and innovation to
          Sylhet’s hills, redefining tourism with smart, high-quality
          accommodations.
        </p>
      </div>

      {/* Banner Image */}
      <div
        className="w-full h-[500px] relative z-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          className="w-full h-full object-cover"
          src={aboutBanner}
          alt="about-banner"
        />
      </div>
    </div>
  );
};

export default Banner;
