import React from "react";
import Slider from "react-slick";

import mosque from "/assets/home/mosque-image.png";
import parking from "/assets/home/parking-image.png";
import playground from "/assets/home/playground-image.png";
import reception from "/assets/home/reception-image.png";
import spa from "/assets/home/spa-image.png";
import waterpark from "/assets/home/waterpark-image.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionIntro from "../../../Components/reusable/SectionIntro";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -top-20 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-[#D2DACE] hover:bg-[#142929] hover:text-white text-[#5C7069] p-1">
      {" "}
      <ArrowRight />{" "}
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -top-20 right-20 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-[#D2DACE] hover:bg-[#142929] hover:text-white text-[#5C7069] p-1">
      {" "}
      <ArrowLeft />{" "}
    </div>
  </div>
);

const Showcase = () => {
  const images = [
    {
      image: mosque,
      title: "Mosque",
      description:
        "A Highly Spiritual prayer Space and an exclusively modern-designed mosque are included",
    },
    {
      image: parking,
      title: "Parking",
      description:
        "Parking and shuttle services: Ample parking space and in-resort shuttle options",
    },
    {
      image: playground,
      title: "Playground",
      description:
        "Modern play equipment in a safe and exciting space with shaded seating for parents to relax nearby",
    },
    {
      image: reception,
      title: "Reception",
      description:
        "A grand welcoming space where tourists are greeted, guided amd provided with information. Exclusive waiting lounge & lake side cafe",
    },
    {
      image: spa,
      title: "Spa",
      description: "Offering world-class Therapists and Luxurious Treatments",
    },
    {
      image: waterpark,
      title: "Waterpark",
      description:
        "Thrilling water slides and rides for all ages family-friendly splash zones and relaxing pools, with dedicated lifeguard supervision for safety",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F6F1ED] -mt-[60px]">
      {" "}
      <div className="w-11/12 lg:w-10/12 mx-auto lg:pb-16 pt-12">
        <SectionIntro
          backgroundText="Facilities"
          title="Other Facilities"
          subtitle="Enjoy Additional Amenities and Services "
          titleColor="text-[#98643E]"
          subtitleColor="text-[#142929]"
          subtitleSize="text-6xl"
          strokeClassName="amenities-stroke-yellow"
        />

        <div className="relative mt-8">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-3">
                {" "}
                {/* <-- this creates horizontal gap */}
                <div className="relative group overflow-hidden cursor-pointer">
                  <img
                    src={img.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                  />

                  {/* Always-visible Title */}
                  <h3 className="absolute bottom-18 left-4 text-white text-xl font-semibold z-20 group-hover:ml-8 transition-all duration-500 ease-in-out">
                    {img.title}
                  </h3>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10 p-4 flex flex-col justify-end">
                    <p className="text-white text-sm">{img.description}</p>
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

export default Showcase;
