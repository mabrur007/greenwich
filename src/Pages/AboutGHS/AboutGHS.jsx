import React from "react";
import FounderMessage from "./components/FounderMessage";

import CommonBanner from "../../Components/reusable/CommonBanner";
import bannerImg from "/assets/about-us/about-banner.jpg";
import Fullview from "./components/Fullview";
import Cofounder from "./components/Cofounder";

import Description from "./components/Description";

const AboutGHS = () => {
  return (
    <div>
      <CommonBanner backgroundImage={bannerImg} title={"About Us"} />
      <Description />
      <FounderMessage />
      <Fullview />

      <Cofounder />
    </div>
  );
};

export default AboutGHS;
