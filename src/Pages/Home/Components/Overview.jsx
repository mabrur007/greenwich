import React, { useEffect } from "react";
import greenWichMap from "/assets/home/greenwich-master-plan.png";
import shapedBackground from "/assets/home/shaped-background.png";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import greenWichMapMobile from "/assets/home/greenwich-map-mobile.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatedNumber } from "../../../Components/reusable/AnimatedNumber";

const Overview = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen">
      <div className="block lg:hidden">
        <img src={greenWichMapMobile} alt="" />
      </div>
      <div className="flex flex-col justify-center h-full gap-4 max-w-xl mx-auto pb-16">
        <SectionIntro
          backgroundText="About"
          title="Greenwich Hill Station"
          subtitle="Witness a Transformative Investment Opportunity"
          titleColor="text-[#98643E]"
          subtitleColor="text-[#142929]"
          subtitleSize="text-6xl"
          strokeClassName="amenities-stroke-yellow"
        />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 mb-4 -mt-12 lg:mt-12">
          <div className="relative">
            {/* SVG & Label Block */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="141"
              viewBox="0 0 160 141"
              fill="none"
            >
              <path
                d="M44.3379 1H115.662C118.404 1.00013 120.938 2.4631 122.31 4.83789L157.972 66.6064C159.343 68.9815 159.343 71.9082 157.972 74.2832L122.31 136.051C120.938 138.426 118.404 139.889 115.662 139.889H44.3379C41.5955 139.889 39.0617 138.426 37.6904 136.051L2.02832 74.2822H2.02734C0.656603 71.9073 0.657345 68.9812 2.02832 66.6064L37.6904 4.83789C39.0617 2.46309 41.5956 1.00013 44.3379 1Z"
                fill="url(#paint0_linear_1_1963)"
                fillOpacity="0.06"
                stroke="url(#paint1_linear_1_1963)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1963"
                  x1="4.33821"
                  y1="73.6226"
                  x2="152.656"
                  y2="72.2645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F97316" />
                  <stop offset="1" stopColor="#F97316" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_1963"
                  x1="1.69352"
                  y1="70.4061"
                  x2="168.81"
                  y2="70.4061"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#98643E" />
                  <stop offset="0.5" stopColor="#FFD4B2" />
                  <stop offset="1" stopColor="#FFD4B2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-6 left-12 w-full h-full">
              <h1 className="text-5xl text-[#98643E]">
                {" "}
                <AnimatedNumber value={46500} />
              </h1>
              <p className="text-[#5C7069]">Indoor Amusement (SqFT)</p>
            </div>
          </div>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="141"
              viewBox="0 0 160 141"
              fill="none"
            >
              <path
                d="M44.3379 1H115.662C118.404 1.00013 120.938 2.4631 122.31 4.83789L157.972 66.6064C159.343 68.9815 159.343 71.9082 157.972 74.2832L122.31 136.051C120.938 138.426 118.404 139.889 115.662 139.889H44.3379C41.5955 139.889 39.0617 138.426 37.6904 136.051L2.02832 74.2822H2.02734C0.656603 71.9073 0.657345 68.9812 2.02832 66.6064L37.6904 4.83789C39.0617 2.46309 41.5956 1.00013 44.3379 1Z"
                fill="url(#paint0_linear_1_1963)"
                fillOpacity="0.06"
                stroke="url(#paint1_linear_1_1963)"
                strokeWidth="2"
              />
            </svg>
            <div className="absolute top-6 left-12 w-full h-full">
              <h1 className="text-5xl text-[#98643E]">
                {" "}
                <AnimatedNumber value={24} />
              </h1>
              <p className="text-[#5C7069]">Total Amenities</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 lg:ml-[15%]">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="141"
              viewBox="0 0 160 141"
              fill="none"
            >
              <path
                d="M44.3379 1H115.662C118.404 1.00013 120.938 2.4631 122.31 4.83789L157.972 66.6064C159.343 68.9815 159.343 71.9082 157.972 74.2832L122.31 136.051C120.938 138.426 118.404 139.889 115.662 139.889H44.3379C41.5955 139.889 39.0617 138.426 37.6904 136.051L2.02832 74.2822H2.02734C0.656603 71.9073 0.657345 68.9812 2.02832 66.6064L37.6904 4.83789C39.0617 2.46309 41.5956 1.00013 44.3379 1Z"
                fill="url(#paint0_linear_1_1963)"
                fillOpacity="0.06"
                stroke="url(#paint1_linear_1_1963)"
                strokeWidth="2"
              />
            </svg>
            <div className="absolute top-6 left-12 w-full h-full">
              <h1 className="text-5xl text-[#98643E]">
                {" "}
                <AnimatedNumber value={5} suffix="+" />
              </h1>
              <p className="text-[#5C7069]">Acres of Landscaped Gardens</p>
            </div>
          </div>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="141"
              viewBox="0 0 160 141"
              fill="none"
            >
              <path
                d="M44.3379 1H115.662C118.404 1.00013 120.938 2.4631 122.31 4.83789L157.972 66.6064C159.343 68.9815 159.343 71.9082 157.972 74.2832L122.31 136.051C120.938 138.426 118.404 139.889 115.662 139.889H44.3379C41.5955 139.889 39.0617 138.426 37.6904 136.051L2.02832 74.2822H2.02734C0.656603 71.9073 0.657345 68.9812 2.02832 66.6064L37.6904 4.83789C39.0617 2.46309 41.5956 1.00013 44.3379 1Z"
                fill="url(#paint0_linear_1_1963)"
                fillOpacity="0.06"
                stroke="url(#paint1_linear_1_1963)"
                strokeWidth="2"
              />
            </svg>
            <div className="absolute top-6 left-12 w-full h-full">
              <h1 className="text-5xl text-[#98643E]">
                {" "}
                <AnimatedNumber value={330} suffix="+" />
              </h1>
              <p className="text-[#5C7069]">Rooms</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full group hidden lg:block">
        <div
          className="h-full relative overflow-visible z-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            className="h-full w-full transition-transform duration-700 ease-out hidden lg:block"
            src={shapedBackground}
            alt=""
          />
        </div>

        <div className="absolute top-8 w-full h-full flex justify-center items-center overflow-visible z-10">
          <img
            className="w-[80%] h-[80%] transition-transform duration-700 ease-out"
            src={greenWichMap}
            alt="main-tower"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
