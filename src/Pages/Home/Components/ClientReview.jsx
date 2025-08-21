import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "/assets/home/slider1.jpg";

const reviews = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    designation: "Real Estate Investor ",
    review:
      "As an investor, I’m really happy with Greenwich Hill Station’s 330+ rooms, 24 amenities, and 46,500 SQFT indoor area across 18 floors. It’s set to shine in Sylhet’s tourism market.",
    clientsays: "What our clients say about us",
    image: sliderImage,
  },
  {
    id: 2,
    name: "Rafiq Ahmed",
    designation: "Real Estate Investor ",
    review:
      "As an investor, I’m really happy with Greenwich Hill Station’s 330+ rooms, 24 amenities, and 46,500 SQFT indoor area across 18 floors. It’s set to shine in Sylhet’s tourism market.",
    clientsays: "What our clients say about us",
    image: sliderImage,
  },
  {
    id: 3,
    name: "Rafiq Ahmed",
    designation: "Real Estate Investor ",
    review:
      "As an investor, I’m really happy with Greenwich Hill Station’s 330+ rooms, 24 amenities, and 46,500 SQFT indoor area across 18 floors. It’s set to shine in Sylhet’s tourism market.",
    clientsays: "What our clients say about us",
    image: sliderImage,
  },
];

const ClientReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="bg-[#F6F1ED]">
      {" "}
      <div className="w-11/12 lg:w-10/12 mx-auto pt-24 -mb-20 pb-32">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="!flex flex-col md:!flex-row gap-16 items-center p-8 rounded-xl"
            >
              <div className="relative lg:w-1/2">
                {/* Image */}
                <div
                  className="lg:h-[500px] w-full overflow-hidden "
                  style={{
                    clipPath: "polygon(0 7%, 100% 0, 100% 94%, 0% 100%)",
                  }}
                >
                  {/* Main Image */}
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Corner Overlay with different effect */}
                <div
                  className="absolute bottom-0 -right-4 lg:-right-14  w-full h-full"
                  style={{
                    clipPath: "polygon(82% 93%, 85% 81%, 100% 100%)",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src={review.image}
                    alt="smallImage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Review */}
              <div className="text-center md:text-left w-full md:w-1/2">
                <p className="text-lg italic text-gray-800 mb-2">
                  {review.clientsays}
                </p>
                <h3 className="text-2xl lg:text-4xl text-[#142929] mb-8">
                  “{review.review}”
                </h3>

                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="141"
                    viewBox="0 0 160 141"
                    fill="none"
                  >
                    <path
                      d="M44.3379 0.5H115.662C118.583 0.50013 121.283 2.05825 122.743 4.58789L158.404 66.3564C159.865 68.8863 159.865 72.0034 158.404 74.5332L122.743 136.301C121.283 138.83 118.583 140.389 115.662 140.389H44.3379C41.4168 140.389 38.7174 138.831 37.2568 136.301L1.59473 74.5322C0.134537 72.0025 0.135279 68.886 1.5957 66.3564L37.2568 4.58789C38.7174 2.05824 41.4169 0.500129 44.3379 0.5Z"
                      fill="url(#paint0_linear_475_710)"
                      fill-opacity="0.06"
                      stroke="url(#paint1_linear_475_710)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_475_710"
                        x1="4.33821"
                        y1="73.6226"
                        x2="152.656"
                        y2="72.2645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F97316" />
                        <stop
                          offset="1"
                          stop-color="#F97316"
                          stop-opacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_475_710"
                        x1="1.69352"
                        y1="70.4061"
                        x2="168.81"
                        y2="70.4061"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#98643E" />
                        <stop offset="0.5" stop-color="#FFD4B2" />
                        <stop
                          offset="1"
                          stop-color="#FFD4B2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute top-1/2 left-40 -translate-x-1/2 -translate-y-1/2">
                    <h3 className="text-2xl lg:text-4xl text-[#98643E]">
                      {review.name}
                    </h3>
                    <p className="text-sm text-[#142929]">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Small Bar Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#98643E]" : "bg-[#FFD4B2]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
