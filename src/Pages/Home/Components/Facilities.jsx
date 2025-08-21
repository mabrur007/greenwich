import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionText from "../../../Components/reusable/SectionText";
import SectionIntro from "../../../Components/reusable/SectionIntro";

import classicCottage1 from "/assets/home/classic-cottage-image-1.png";
import classicCottage2 from "/assets/home/classic-cottage-image-2.png";
import classicCottage3 from "/assets/home/classic-cottage-image-3.png";
import classicCottage4 from "/assets/home/classic-cottage-image-4.png";

import modernCottage1 from "/assets/home/modern-cottage-image-1.png";
import modernCottage2 from "/assets/home/modern-cottage-image-2.png";
import modernCottage3 from "/assets/home/modern-cottage-image-3.png";
import modernCottage4 from "/assets/home/modern-cottage-image-4.png";

import clusterCottage1 from "/assets/home/cluster-cottage-image-1.png";
import clusterCottage2 from "/assets/home/cluster-cottage-image-2.png";
import clusterCottage3 from "/assets/home/cluster-cottage-image-3.png";
import clusterCottage4 from "/assets/home/cluster-cottage-image-4.png";

import kebabStation1 from "/assets/home/kebab-station-image-1.png";
import kebabStation2 from "/assets/home/kebab-station-image-2.png";

import hilltop from "/assets/home/hill.svg";
import hillModern from "/assets/home/modern-cottage-hill.svg";
import hillCluster from "/assets/home/cluster-cottage-hill.svg";
import hillKebab from "/assets/home/kebab-station-hill.svg";

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const classicCottages = [
    classicCottage1,
    classicCottage2,
    classicCottage3,
    classicCottage4,
  ];

  const modernCottages = [
    modernCottage1,
    modernCottage2,
    modernCottage3,
    modernCottage4,
  ];

  const clusterCottages = [
    clusterCottage1,
    clusterCottage2,
    clusterCottage3,
    clusterCottage4,
  ];

  const kebabStation = [kebabStation1, kebabStation2];

  const settings = {
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    speed: 800,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="bg-[#142929] pb-16 md:pb-48 clip-bottom-diagonal-sm lg:clip-bottom-diagonal -pt-8 ">
      <div className="relative w-10/12 mx-auto min-h-screen">
        <SectionIntro
          backgroundText="Cottages"
          title="Cottages"
          subtitle="Explore a Variety of Luxurious Stays Amidst Breathtaking Natural Beauty "
          titleColor="text-white"
          subtitleColor="text-[#D2DACE]"
          subtitleSize="text-7xl"
          strokeClassName="amenities-stroke"
        />

        <div className="relative flex flex-col gap-16 lg:gap-64 lg:mt-16">
          {/* Classic Cottages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative">
            <div className="relative flex items-center">
              <div className="absolute left-6 bottom-6 flex flex-col items-center gap-2 z-10 bg-black/20 backdrop-blur-md px-4 py-6 border border-white/10 shadow-md">
                {classicCottages.map((_, index) => (
                  <React.Fragment key={index}>
                    <p
                      className={`transition-opacity ${
                        currentSlide === index
                          ? "opacity-100 text-lg text-white"
                          : "text-white/60"
                      }`}
                    >
                      {String(index + 1).padStart(2)}
                    </p>

                    {/* Line with filler */}
                    {currentSlide === index &&
                      index !== classicCottages.length - 1 && (
                        <div className="relative w-1 h-12 bg-white/50 overflow-hidden">
                          {/* Filler animation */}
                          <div className="absolute top-0 left-0 w-full bg-white animate-slide-fill" />
                        </div>
                      )}
                  </React.Fragment>
                ))}
              </div>

              {/* Slider */}
              <div className="h-[400px] overflow-hidden">
                <Slider {...settings} className="h-full">
                  {classicCottages.map((img, index) => (
                    <div key={index}>
                      <img
                        className="w-full h-[400px] object-cover"
                        src={img}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <SectionText
              title="Classic Cottages"
              description="The Classic Cottages at Greenwich Hill Station Resort embody timeless charm with cozy stays. Featuring a two-story design with large glass walls, these retreats include a living room, well-equipped kitchen, dining area, and a cozy bedroom with an en-suite, all opening onto a private deck with a refreshing swimming pool. The first floor offers a second bedroom with a balcony, complemented by additional amenities. Elevated on sturdy stilts with a scenic walkway and staircase, they ensure privacy and stunning lake views."
            />

            {/* Floating Decorative Image */}
            <div className="absolute -bottom-32 right-0 hidden lg:block">
              <img
                className="w-[500px] h-[200px]"
                src={hilltop}
                alt="hilltop"
              />
            </div>
          </div>

          {/* Modern Cottages */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-start relative">
            <SectionText
              title="Modern Cottages"
              description="The Modern Cottages offer sleek accommodations with contemporary amenities. Nestled on a lush hillside, these two-story retreats feature expansive glass windows and a minimalist aesthetic, providing panoramic forest and lake views. The ground floor includes a cozy living room, a compact kitchenette, a toilet with shower, and a balcony, while the mezzanine floor houses a stylish bedroom with a private balcony and table area. Built on stilts with a scenic walkway, they provide a tranquil escape."
            />
            <div className="relative flex items-center">
              <div className="absolute left-6 bottom-6 flex flex-col items-center gap-2 z-10 bg-black/20 backdrop-blur-md px-4 py-6 border border-white/10 shadow-md">
                {modernCottages.map((_, index) => (
                  <React.Fragment key={index}>
                    <p
                      className={`transition-opacity ${
                        currentSlide === index
                          ? "opacity-100 text-lg text-white"
                          : "text-white/60"
                      }`}
                    >
                      {String(index + 1).padStart(2)}
                    </p>

                    {/* Line with filler */}
                    {currentSlide === index &&
                      index !== modernCottages.length - 1 && (
                        <div className="relative w-1 h-12 bg-white/50 overflow-hidden">
                          {/* Filler animation */}
                          <div className="absolute top-0 left-0 w-full bg-white animate-slide-fill" />
                        </div>
                      )}
                  </React.Fragment>
                ))}
              </div>

              {/* Slider */}
              <div className="h-[400px] overflow-hidden">
                <Slider {...settings} className="h-full">
                  {modernCottages.map((img, index) => (
                    <div key={index}>
                      <img
                        className="w-full h-[400px] object-cover"
                        src={img}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="absolute -bottom-32 left-0 hidden lg:block">
              <img
                className="w-[500px] h-[200px]"
                src={hillModern}
                alt="hillModern"
              />
            </div>
          </div>

          {/* Cluster Cottages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative">
            <div className="relative flex items-center">
              <div className="absolute left-6 bottom-6 flex flex-col items-center gap-2 z-10 bg-black/20 backdrop-blur-md px-4 py-6 border border-white/10 shadow-md">
                {clusterCottages.map((_, index) => (
                  <React.Fragment key={index}>
                    <p
                      className={`transition-opacity ${
                        currentSlide === index
                          ? "opacity-100 text-lg text-white"
                          : "text-white/60"
                      }`}
                    >
                      {String(index + 1).padStart(2)}
                    </p>

                    {/* Line with filler */}
                    {currentSlide === index &&
                      index !== clusterCottages.length - 1 && (
                        <div className="relative w-1 h-12 bg-white/50 overflow-hidden">
                          {/* Filler animation */}
                          <div className="absolute top-0 left-0 w-full bg-white animate-slide-fill" />
                        </div>
                      )}
                  </React.Fragment>
                ))}
              </div>

              {/* Slider */}
              <div className="h-[400px] overflow-hidden">
                <Slider {...settings} className="h-full">
                  {clusterCottages.map((img, index) => (
                    <div key={index}>
                      <img
                        className="w-full h-[400px] object-cover"
                        src={img}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <SectionText
              title="Cluster Cottages"
              description="The Cluster Cottages are ideal for groups, combining shared and private spaces. Elevated on a verdant hillside, this multi-unit retreat features sleek, modern design with large glass windows, offering stunning forest and lake views. Each unit includes a living room, dining area, kitchenette, and bedroom with a private balcony, all centered around a shared open-to-sky deck. Built on stilts with a scenic walkway, it blends privacy with a sense of community."
            />
            <div className="absolute -bottom-32 right-0 hidden lg:block">
              <img
                className="w-[500px] h-[200px]"
                src={hillCluster}
                alt="hillCluster"
              />
            </div>
          </div>

          {/* Kebab Station */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-start relative">
            <SectionText
              title="Kebab Station"
              description="The Kebab Station provides a vibrant outdoor dining experience at Greenwich Hill Station Resort. Featuring a modern, curved pavilion with an open roof and seating area, it is surrounded by lush greenery, palm trees, and a scenic pool nearby. The space offers a perfect setting to enjoy delicious kebabs under the open sky, with winding stone pathways and a serene atmosphere enhanced by natural beauty."
            />
            <div className="relative flex items-center">
              <div className="absolute left-6 bottom-6 flex flex-col items-center gap-2 z-10 bg-black/20 backdrop-blur-md px-4 py-6 border border-white/10 shadow-md">
                {kebabStation.map((_, index) => (
                  <React.Fragment key={index}>
                    <p
                      className={`transition-opacity ${
                        currentSlide === index
                          ? "opacity-100 text-lg text-white"
                          : "text-white/60"
                      }`}
                    >
                      {String(index + 1).padStart(2)}
                    </p>

                    {/* Line with filler */}
                    {currentSlide === index &&
                      index !== kebabStation.length - 1 && (
                        <div className="relative w-1 h-12 bg-white/50 overflow-hidden">
                          {/* Filler animation */}
                          <div className="absolute top-0 left-0 w-full bg-white animate-slide-fill" />
                        </div>
                      )}
                  </React.Fragment>
                ))}
              </div>

              {/* Slider */}
              <div className="h-[400px] overflow-hidden">
                <Slider {...settings} className="h-full">
                  {kebabStation.map((img, index) => (
                    <div key={index}>
                      <img
                        className="w-full h-[400px] object-cover"
                        src={img}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="absolute -bottom-32 left-0 hidden lg:block">
              <img
                className="w-[500px] h-[200px]"
                src={hillKebab}
                alt="hillKebab"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
