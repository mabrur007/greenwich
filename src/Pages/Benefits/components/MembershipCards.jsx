import React, { useEffect, useState } from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import bronzeCard from "/assets/benefits/bronze-card.png";
import silverCard from "/assets/benefits/silver-card.png";
import goldCard from "/assets/benefits/gold-card.png";
import diamondCard from "/assets/benefits/diamond-card.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const MembershipCards = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pb-16">
      <SectionIntro
        backgroundText="Membership"
        title="Membership Cards"
        subtitle="Membership That Elevates Every Visit"
        titleColor="text-[#98643E]"
        subtitleColor="text-[#142929]"
        subtitleSize="text-6xl"
        strokeClassName="amenities-stroke-yellow"
     
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-[#142929] text-2xl mb-8">
            Diamond Membership Cards
          </h3>
          <p className="text-[#5C7069] mb-4">
            The Diamond Membership Card represents the pinnacle of luxury at
            Greenwich Hill Station, crafted for discerning individuals who seek
            exclusivity and unparalleled experiences. With lifetime validity,
            this card ensures long-term access to the resort’s most premium
            amenities, such as the Infinity Pool, Spa, and Water Park,
            complemented by personalized services that reflect the Bhaiya
            Group’s 50-year legacy of excellence.
          </p>

          <ul className="text-[#5C7069] list-disc pl-8">
            <li>Unlimited Access to Premium Amenities</li>
            <li>Priority Booking</li>
            <li>Complimentary Upgrades and Dining</li>
          </ul>
        </div>

        <div className="max-w-xl mx-auto">
          {isMounted && (
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper effect-cards h-[500px]"
            >
              <SwiperSlide>
                <img
                  src={bronzeCard}
                  alt="Bronze Card"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={silverCard}
                  alt="Silver Card"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={goldCard}
                  alt="Gold Card"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={diamondCard}
                  alt="Diamond Card"
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipCards;
