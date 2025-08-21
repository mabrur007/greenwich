import React from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import ambassadorImage from "../../../../public/assets/home/ambassador-image.png";

const Ambassador = () => {
  return (
    <div className="bg-[#F6F1ED]">
      <div className="w-11/12 lg:w-10/12 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <SectionIntro
              backgroundText="Ambassador"
              title="Pride of Greenwich Hill Station"
              titleColor="text-[#142929]"
              subtitleColor="text-[#142929]"
              subtitleSize="text-5xl"
              strokeClassName="amenities-stroke-yellow"
            />

            <div className="lg:ml-[10%] -mt-16">
              <p className="text-lg text-[#142929] mb-8">
                Bhaiya Group’s legacy of over 50 years as a pioneering force in
                Bangladesh’s industrial landscape is truly inspiring. I feel
                honored and proud to be associated with a conglomerate that
                stands for vision, innovation, and impact. One of the most
                exciting projects I’ve witnessed is Greenwich Hill Station—a
                luxurious,
              </p>

              <p className="text-lg font-semibold text-[#98643E] mb-2">
                Samira Khan Mahi
              </p>
              <p className="text-[#142929]">
                Ambassador of Greenwich Hill Station
              </p>
            </div>
          </div>

          <div className="z-10">
            <img src={ambassadorImage} alt="ambassador" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
