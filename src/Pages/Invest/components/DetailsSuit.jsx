import React from "react";
import suiteImage from "/assets/invest/suite-card-image-2.png";

const DetailsSuit = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="w-full h-[400px]">
        <img className="w-full h-full object-cover" src={suiteImage} alt="" />
      </div>

      <div className="bg-[#142929] p-4">
        <h3 className="text-white text-3xl mb-4">Deluxe Suite</h3>

        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-4 mb-8">
          <div className="flex items-center flex-wrap gap-2">
            <p className="bg-[#D2DACE] text-[#142929] px-2 py-1 text-sm">
              700 SQFT
            </p>
            <p className="bg-[#D2DACE] text-[#142929] px-2 py-1 text-sm">
              Hill View
            </p>

            <p className="bg-[#D2DACE] text-[#142929] px-2 py-1 text-sm">
              Shared
            </p>

            <p className="bg-[#D2DACE] text-[#142929] px-2 py-1 text-sm">
              16 Shares
            </p>

            <p className="bg-[#D2DACE] text-[#142929] px-2 py-1 text-sm">
              3 Years EMI
            </p>
          </div>

          <div>
            <button className="px-8 py-2 bg-[#98643E] text-white">
              Compare ROI
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <p className="text-[#D2DACE] text-sm">Per Share Amount</p>
            <p className="text-white text-lg font-semibold">৳250,000</p>
          </div>

          <div>
            <p className="text-[#D2DACE] text-sm">Down Payment(30%)</p>
            <p className="text-white text-lg font-semibold">৳375,000</p>
          </div>

          <div>
            <p className="text-[#D2DACE] text-sm">Remaining Amount</p>
            <p className="text-white text-lg font-semibold">৳8,75,000</p>
          </div>

          <div>
            <p className="text-[#D2DACE] text-sm">Total Investment</p>
            <p className="text-white text-lg font-semibold">৳12,50,000</p>
          </div>

          <div>
            <p className="text-[#D2DACE] text-sm">EMI</p>
            <p className="text-green-500 text-lg font-semibold">
              ৳24,306/ <span className="text-sm">month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSuit;
