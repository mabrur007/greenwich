import React from "react";
import membershipCard from "/assets/benefits/stacked-card.svg";
import { ArrowRight, MoveRight } from "lucide-react";
const Category = () => {
  return (
    <div className="bg-[#142929] pt-24 lg:pt-0 py-16 sm:clip-diagonal-sm clip-diagonal ">
      <div className="w-11/12 lg:w-9/12 mx-auto py-16">
        {/* Background Title */}
        <div className="relative mb-16">
          <h1 className="amenities-stroke mask-gradient text-[150px] md:text-[200px] select-none pointer-events-none hidden md:block text-center">
            Membership
          </h1>

          <div className="text-center absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-4xl lg:text-6xl text-white mb-2 mt-12">
              Membership Cards
            </h3>
            <p className="text-[#D2DACE]">
              Membership That Elevates Every Visit
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="mt-16 lg:mt-0">
            <img src={membershipCard} alt="" />
          </div>

          <div>
            <p className="text-[#D2DACE] mb-6 text-justify">
              Greenwich Hill Station Membership Cards unlock a world of premium
              experiences—from priority access to resort amenities to exclusive
              deals with over 100+ partner brands. Whether you're a frequent
              guest or a loyal supporter of Bhaiya Hotels & Resorts, each
              membership tier is designed to reward you with unmatched value,
              luxury, and personalized service.
            </p>

            {/* Membership Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Platinum */}
              <div className="flex items-start gap-3">
                <ArrowRight size={24} className="text-white mt-1" />
                <div>
                  <h3 className="text-lg text-white">Platinum Membership</h3>
                </div>
              </div>

              {/* Elite */}
              <div className="flex items-start gap-3">
                <ArrowRight size={24} className="text-white mt-1" />
                <div>
                  <h3 className="text-lg text-white">Elite Membership</h3>
                </div>
              </div>

              {/* Signature */}
              <div className="flex items-start gap-3">
                <ArrowRight size={24} className="text-white mt-1" />
                <div>
                  <h3 className="text-lg text-white">Signature Membership</h3>
                </div>
              </div>

              {/* Diamond */}
              <div className="flex items-start gap-3">
                <ArrowRight size={24} className="text-white mt-1" />
                <div>
                  <h3 className="text-lg text-white">Diamond Membership</h3>
                </div>
              </div>

              {/* Gold (single full row) */}
              <div className="flex items-start gap-3 lg:col-span-2">
                <ArrowRight size={24} className="text-white mt-1" />
                <div>
                  <h3 className="text-lg text-white">Gold Membership</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
