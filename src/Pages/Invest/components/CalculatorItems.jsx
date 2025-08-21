import React, { useState } from "react";
import sliderImage1 from "/assets/invest/suite-card-image-1.png";
import sliderImage2 from "/assets/invest/suite-card-image-2.png";
import sliderImage3 from "/assets/invest/suite-card-image-3.png";
import sliderImage4 from "/assets/invest/suite-card-image-4.png";
import sliderImage5 from "/assets/invest/suite-card-image-5.png";
import sliderImage6 from "/assets/invest/suite-card-image-6.png";
import Slider from "react-slick";
const images = [
  { id: 1, image: sliderImage1, name: "Junior Suite", size: "300-600 SQ" },
  { id: 2, image: sliderImage2, name: "Deluxe Suite", size: "700-1000 SQ" },
  { id: 3, image: sliderImage3, name: "Executive Suite", size: "800-1200 SQ" },
  {
    id: 4,
    image: sliderImage4,
    name: "Presidential Suite",
    size: "300-600 SQ",
  },
  {
    id: 5,
    image: sliderImage5,
    name: "Presidential Suite",
    size: "300-600 SQ",
  },
  { id: 6, image: sliderImage6, name: "Junior Suite", size: "300-600 SQ" },
];

const CalculatorItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [shares, setShares] = useState(5);
  const [installmentYears, setInstallmentYears] = useState(3); 

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="bg-[#142929]">
      <p className="p-4 text-[#D2DACE]">Investment Unit</p>

      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id} className="px-3 overflow-visible">
            <div className="group transition-all duration-500 ease-in-out">
              <div
                className={`relative overflow-hidden cursor-pointer h-[200px] group-hover:h-[220px] transition-all duration-500 ease-in-out border border-transparent ${
                  selectedIndex === img.id
                    ? "ring-2 ring-white ring-offset-2"
                    : ""
                }`}
                onClick={() => handleSelect(img.id)}
              >
                {/* Radio Button Top-Left */}
                <div className="absolute top-3 left-3 z-30">
                  <input
                    type="radio"
                    name="selectedImage"
                    value={img.id}
                    checked={selectedIndex === img.id}
                    onChange={() => handleSelect(img.id)}
                    className="w-4 h-4 text-white bg-transparent border-white focus:ring-white checked:bg-white checked:ring-1 rounded-full"
                  />
                </div>

                <img
                  src={img.image}
                  alt={`Project ${img.id}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Glassmorphism Label */}
                <p className="absolute bottom-12 left-4 z-20 px-3 py-1 text-sm text-white bg-white/20 backdrop-blur-md shadow-sm">
                  {img.size}
                </p>

                {/* Title */}
                <h3 className="absolute bottom-4 left-4 text-white z-20">
                  {img.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="p-4 flex flex-col lg:flex-row items-center  gap-16">
        <div>
          <p className="text-sm mb-2 text-gray-300">Suite Position</p>
          <div className="flex items-center gap-6">
            {["Hill View", "Center", "Sea View"].map((label) => (
              <label
                key={label}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="suitePosition"
                  value={label}
                  className="appearance-none w-3 h-3 border-2 border-gray-300 rounded-full checked:border-white checked:bg-white checked:ring-1 checked:ring-offset-2 checked:ring-white"
                />
                <span className="text-sm text-gray-200">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm mb-2 text-gray-300">Ownership Type</p>
          <div className="flex items-center gap-6">
            {["Full", "Shared"].map((label) => (
              <label
                key={label}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="ownershipType"
                  value={label}
                  className="appearance-none w-3 h-3 border-2 border-gray-300 rounded-full checked:border-white checked:bg-white checked:ring-1 checked:ring-offset-2 checked:ring-white"
                />
                <span className="text-sm text-gray-200">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 pb-8">
        {/* Number of Share */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white mb-2">
            <span>Number of Share</span>
            <span>{shares * 4} / 40</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min={1}
              max={10}
              value={shares}
              onChange={(e) => setShares(Number(e.target.value))}
              className="w-full appearance-none bg-transparent"
            />
            {/* Track */}
            <div className="absolute top-1/2 left-0 w-full h-2 rounded-full bg-red-500/40 -translate-y-1/2 z-0">
              {/* Track Fill with Smooth Transition */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-red-500 transition-all duration-300 ease-in-out"
                style={{ width: `${(shares / 10) * 100}%` }}
              ></div>
            </div>
            {/* Thumb Label */}

            <div
              className="absolute top-1/2 -translate-y-1/2 bg-[#FFE5C2] text-black text-xs font-medium rounded-full px-2 py-1 shadow transition-all duration-300 ease-in-out"
              style={{ left: `calc(${(shares / 10) * 100}% - 12px)` }}
            >
              {shares}
            </div>
          </div>
        </div>

        {/* Installment Years */}
        <div>
          <div className="flex justify-between text-sm text-white mb-2">
            <span>Installment Years</span>
            <span>{installmentYears} / 5</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min={1}
              max={5}
              value={installmentYears}
              onChange={(e) => setInstallmentYears(Number(e.target.value))}
              className="w-full appearance-none bg-transparent"
            />
            {/* Track */}
            <div className="absolute top-1/2 left-0 w-full h-2 rounded-full bg-gray-500/40 -translate-y-1/2 z-0">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-gray-400"
                style={{ width: `${(installmentYears / 5) * 100}%` }}
              ></div>
            </div>
            {/* Thumb Label */}
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-[#FFE5C2] text-black text-xs font-medium rounded-full px-2 py-1 shadow"
              style={{
                left: `calc(${(installmentYears / 5) * 100}% - 12px)`,
              }}
            >
              {installmentYears}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 pb-8">
        <div className="flex justify-between text-white mb-2">
          <p>Per Share Amount</p>
          <p>৳250,000</p>
        </div>

        <div className="flex justify-between text-[#D2DACE] mb-2">
          <p>Down Payment(30%)</p>
          <p>৳375,000</p>
        </div>

        <div className="flex justify-between text-white font-semibold text-lg mb-4">
          <p>Total Investment</p>
          <p>৳12,50,000</p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorItems;
