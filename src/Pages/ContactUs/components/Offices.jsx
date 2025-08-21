import React from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";

// Import office images
import office1Img from "/assets/contact-us/corporate-office.png";
import office2Img from "/assets/contact-us/head-office.png";
import office3Img from "/assets/contact-us/dubai-office.png";

const officeLocations = [
  {
    id: "office1",
    officeName: "Corporate Office",
    address:
      "House # 106, (Level - 4th & 5th), Road-12, Block-E, Banani, Dhaka-1213.",
    location: "Google Maps",
    numbers: ["+88 02 58816611"],
    image: office1Img,
  },
  {
    id: "office2",
    officeName: "Head Office",
    address:
      "28/A-3, Toyenbee Circular Road, Sandwip Bhaban, (6th Floor), Motijheel-C/A, Dhaka.",
    location: "Google Maps",
    numbers: ["+88 02 47120641", "+88 02 47120643"],
    image: office2Img,
  },
  {
    id: "office3",
    officeName: "Dubai Office",
    address: "Twin Towers (Rolex), 12th Floor, Office 06, Deira, Dubai, UAE.",
    location: "Google Map",
    numbers: ["+971505420642"],
    image: office3Img,
  },
];

const Offices = () => {
  return (
    <div className="bg-[#F6F1ED] py-16">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* Section Title */}
        <SectionIntro
          backgroundText="Location"
          title="Our Offices"
          subtitle="Elevating Service Across Worldwide Offices"
          titleColor="text-[#98643E]"
          subtitleColor="text-[#142929]"
          subtitleSize="text-6xl"
          strokeClassName="amenities-stroke-yellow"
        />

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {officeLocations.map((office) => (
            <div
              key={office.id}
              className="bg-[#D2DACE] overflow-hidden border border-[#98643E]/20"
            >
              {/* Office Image */}
              <img
                src={office.image}
                alt={`${office.officeName} Image`}
                className="w-full h-[200px] object-cover
                "
              />

              {/* Office Info */}
              <div className="space-y-3 p-4">
                <h3 className="text-2xl font-semibold text-[#142929] mt-4">
                  {office.officeName}
                </h3>
                <p className="text-[#5C7069] text-sm">{office.address}</p>

                <div className="text-sm text-[#5C7069]">
                  <span className="font-semibold block mb-1">Contact:</span>
                  {office.numbers.map((num, idx) => (
                    <p key={idx}>{num}</p>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-block text-[#98643E] text-sm underline font-medium"
                >
                  {office.location}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;
