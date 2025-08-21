import React, { useState } from "react";
import CalculatorItems from "./CalculatorItems";
import DetailsSuit from "./DetailsSuit";

const RoiCalculator = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-[#F6F1ED] pt-24 pb-16 -mt-[90px]">
      <h1 className="text-center text-4xl lg:text-6xl text-[#98643E] mb-12 mt-12 lg:mt-0">
        Calculate Your <span className="text-[#5C7069]">ROI</span>
      </h1>

      {/* Conditional Layout */}
      {!showDetails ? (
        // Initial state: Only show calculator centered
        <div className="max-w-2xl mx-auto px-4 py-6">
          <CalculatorItems />
          <div className="w-full bg-[#142929] py-4 px-4">
            <button
              onClick={() => setShowDetails(true)}
              className="bg-[#98643E] py-2 text-white w-full text-center cursor-pointer transition duration-300 hover:bg-[#7a4f32]"
            >
              Calculate
            </button>
          </div>
        </div>
      ) : (
        // Show full grid when "Calculate" is clicked
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full lg:w-10/12 mx-auto px-4 py-6 transition-all duration-500">
          <div className="col-span-7 lg:col-span-5 ">
            <CalculatorItems />
          </div>

          <div className="col-span-7 transform transition-all duration-700 ease-out opacity-100 translate-x-0">
            <DetailsSuit />
          </div>
        </div>
      )}
    </div>
  );
};

export default RoiCalculator;
