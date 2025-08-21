import React from "react";
import Banner from "./components/Banner";
import Architecture from "./components/Architecture";
import CommonBanner from "../../Components/reusable/CommonBanner";
import bannerImg from "/assets/invest/invest-banner.jpg";
import RoiCalculator from "./components/RoiCalculator";
import OtherProjects from "./components/OtherProjects";

const Invest = () => {
	return (
		<div>
			<CommonBanner backgroundImage={bannerImg} title="Invest" />
			<Architecture />
			<RoiCalculator />
			<Banner />

			<OtherProjects />
		</div>
	);
};

export default Invest;
