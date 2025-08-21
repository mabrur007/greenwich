import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionIntro from "../../../Components/reusable/SectionIntro";

import saltbay from "/assets/about-us/project-salt-bay.png";
import saltbayLogo from "/assets/about-us/salt-bay.svg";

import edenbay from "/assets/about-us/project-eden-bay.png";
import edenbayLogo from "/assets/about-us/eden-bay.svg";

import bayfront from "/assets/about-us/project-bay-front.png";
import bayfrontLogo from "/assets/about-us/bay-font.svg";

const OtherProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    {
      image: saltbay,
      logo: saltbayLogo,
      facebookLink: "https://facebook.com/project-one",
    },
    {
      image: edenbay,
      logo: edenbayLogo,
      facebookLink: "https://facebook.com/project-two",
    },
    {
      image: bayfront,
      logo: bayfrontLogo,
      facebookLink: "https://facebook.com/project-three",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="bg-[#F6F1ED] overflow-hidden -mt-[130px] pt-24">
      <div className="pb-16">
        <SectionIntro
          className="ml-[10%]"
          backgroundText="Showcase"
          title="Our Other Projects"
          subtitle="Expanding the Art of Luxury Living"
          titleColor="text-[#98643E]"
          subtitleColor="text-[#142929]"
          subtitleSize="text-6xl"
          strokeClassName="amenities-stroke-yellow"
        />

        <div className="relative lg:mt-8">
          <div className="hidden lg:block">
            {/* Left Arrow */}
            <div
              className="absolute top-1/2 -translate-y-1/2 left-1/5 z-20 md:flex bg-[#142929] text-white p-2 cursor-pointer hover:bg-black transition"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ArrowLeft size={20} />
            </div>

            {/* Right Arrow */}
            <div
              className="absolute top-1/2 -translate-y-1/2 right-1/5 z-20 md:flex bg-[#142929] text-white p-2 cursor-pointer hover:bg-black transition"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ArrowRight size={20} />
            </div>
          </div>

          <div className="lg:hidden">
            {/* Left Arrow */}
            <div
              className="absolute -top-12 right-24 z-20 md:flex bg-[#D2DACE] text-[#5C7069] p-2 cursor-pointer hover:bg-black transition"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ArrowLeft size={20} />
            </div>

            {/* Right Arrow */}
            <div
              className="absolute -top-12 right-12  z-20 md:flex bg-[#142929] text-white p-2 cursor-pointer hover:bg-black transition"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ArrowRight size={20} />
            </div>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-8">
                <div className="relative group overflow-hidden cursor-pointer shadow-md">
                  <img
                    src={img.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Logo Bottom Center */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <img
                      src={img.logo}
                      alt={`${img.logo} logo`}
                      className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Facebook Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-black/70 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10 flex items-center justify-center">
                    <a
                      href={img.facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm underline hover:text-[#ccc] transition"
                    >
                      Visit Facebook
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
