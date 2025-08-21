import React from "react";

import founderImage from "/assets/about-us/maksud-ali.png";
import SectionIntro from "../../../Components/reusable/SectionIntro";

const FounderMessage = () => {
  return (
    <div className="bg-[#142929] clip-bottom-diagonal">
      <div className="w-11/12 lg:w-10/12 mx-auto pt-16 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div>
            <SectionIntro
              backgroundText="Founder"
              title="One of the biggest conglomerates in Bangladesh."
              titleColor="text-white"
              subtitleSize="text-4xl"
              strokeClassName="amenities-stroke"
            />
            <p className="text-[#D2DACE] font-medium mb-8">
              The legacy of BHAIYA GROUP is over half a century old and over the
              years Maksud Ali has established itself as the full of confidence
              and much revered industrial family of Bangladesh. It consists of
              17 big concerns with diverse activities & different products. The
              Bhaiya Group started the venture more than 50 years ago.
            </p>

            <div>
              <p className="text-white font-semibold text-lg">Maksud Ali</p>
              <p className="text-[#D2DACE]">Founder, Bhaiya Group</p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="z-10 relative lg:mt-16 flex justify-center">
            <img
              className="lg:w-[600px] lg:h-[500px] w-full h-full object-cover"
              src={founderImage}
              alt="founder-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
