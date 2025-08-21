import React from "react";
import FeatureOverview from "./components/FeatureOverview";
import Amenities from "./components/Amenities";
import CommonBanner from "../../Components/reusable/CommonBanner";
import bannerImg from "/assets/features/banner.jpg";
const Features = () => {
  return (
    <div>
      <CommonBanner title="Feature" backgroundImage={bannerImg} />
      <FeatureOverview />
      <Amenities />
    </div>
  );
};

export default Features;
