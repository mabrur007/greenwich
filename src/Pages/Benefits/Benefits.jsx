import React from "react";
import CommonBanner from "../../Components/reusable/CommonBanner";
import bannerImg from "../../../public/assets/benefits/benefits-banner.png";
import Category from "./components/Category";
import Facilities from "./components/Facilities";
import BenifitsArchitecture from "./components/BenifitsArchitecture";
// import MembershipCards from "./components/MembershipCards";
const Benefits = () => {
  return (
    <div>
      <CommonBanner backgroundImage={bannerImg} title={"Benefit"} />
      <BenifitsArchitecture />
      <Category />
      <Facilities />
      {/* <MembershipCards /> */}
    </div>
  );
};

export default Benefits;
