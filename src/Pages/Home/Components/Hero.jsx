import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Desktop images
import heroImage1 from "/assets/home/hero-slider-image-1.jpg";
import heroImage2 from "/assets/home/hero-slider-image-2.png";
import heroImage3 from "/assets/home/hero-slider-image-3.png";
import heroImage4 from "/assets/home/hero-slider-image-4.png";

// Mobile images
import heroImageMobile1 from "/assets/home/hero-slider-image-1-mobile.png";
import heroImageMobile2 from "/assets/home/hero-slider-image-2-mobile.png";
import heroImageMobile3 from "/assets/home/hero-slider-image-3-mobile.png";
import heroImageMobile4 from "/assets/home/hero-slider-image-4-mobile.png";

const slidesData = [
  {
    desktopImage: heroImage1,
    mobileImage: heroImageMobile1,
    title: "Stay in Luxury & Invest in Something Real",
    description:
      "Half an hour drive from Osmani International Airport is all it takes to get you to this holiday haven. Greenwich Hill Station is all about luxury aesthetics offering a serene escape with a soul.",
  },
  {
    desktopImage: heroImage2,
    mobileImage: heroImageMobile2,
    title: "A landmark of luxury and investment potential",
    description:
      "Wake up to breathtaking views and fall asleep under starlit skies. Our luxurious hill station is your perfect weekend retreat.",
  },
  {
    desktopImage: heroImage3,
    mobileImage: heroImageMobile3,
    title: "Indulge in Lakeside Residences with Unrivaled Amenities",
    description:
      "Step into a lifestyle designed for peace, purpose, and prosperity. Greenwich offers a home away from home.",
  },
  {
    desktopImage: heroImage4,
    mobileImage: heroImageMobile4,
    title: "Invest in Creating Unforgettable Experience for Discerning Guests",
    description:
      "Escape the noise and embrace a new pace. Invest in timeless serenity and a lifetime of memories.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount & resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <div
              className="h-screen bg-cover bg-center relative bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  isMobile ? slide.mobileImage : slide.desktopImage
                })`,
              }}
            >
              <div className="absolute inset-0 bg-black/40 z-0" />
              <div className="relative z-10 flex items-end justify-start h-full pb-16 md:pb-24 max-w-6xl mx-auto">
                <div className="text-left text-white space-y-4 max-w-3xl px-4 select-text">
                  <h1 className="text-4xl md:text-6xl">{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Slider Counter - Only for large screens */}
      <div className="absolute bottom-[20%] right-[10%] -translate-x-1/2 z-20 hidden lg:block">
        <div className="flex items-center gap-4 text-white font-medium text-lg">
          {slidesData.map((_, index) => (
            <React.Fragment key={index}>
              <p
                className={`transition-opacity ${
                  currentIndex === index ? "opacity-100" : "opacity-80"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </p>

              {/* Progress line */}
              {currentIndex === index && index !== slidesData.length - 1 && (
                <div className="relative w-12 h-[2px] bg-white/50 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-white filler-animation" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
