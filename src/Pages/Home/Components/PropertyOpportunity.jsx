import React, { useEffect, useState } from "react";

import { Banknote, Calendar } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import InvestmentModal from "../../../Components/reusable/InvestmentModal";
import AnimatedNumber from "../../../Components/reusable/AnimatedNumber";
import InvestNowBtn from "../../../Components/reusable/InvestNowBtn";

const PropertyOpportunity = () => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<div className="bg-[#F6F1ED]">
			{" "}
			<div className="w-11/12 lg:w-10/12 mx-auto lg:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					{/* Left Section */}
					<div className="relative">
						<SectionIntro
							backgroundText="Invest"
							title="Seize Your Property Opportunity"
							subtitle="Discover the potential of Greenwich Hill Station with proven growth and returns."
							titleColor="text-[#98643E]"
							subtitleColor="text-[#142929]"
							subtitleSize="text-4xl"
							strokeClassName="amenities-stroke-yellow"
						/>

						<div className="absolute left-16 top-1/2 -translate-y-1/2 hidden md:block mt-6">
							<InvestNowBtn btnType="two" />
						</div>

						{/* Render modal outside of any positioned container */}
						<InvestmentModal isOpen={showModal} onClose={() => setShowModal(false)} />
					</div>

					{/* Right Stats Section */}
					<div className="flex flex-col justify-center lg:flex-row">
						<div className="flex flex-col items-center gap-8 lg:mt-32">
							{/* Card 1 */}
							<div className="relative hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="100">
								<SVGBlock fill="#5C7069" />
								<StatContent number="75+" color="#5C7069" label="Share Sold" />
							</div>

							{/* Card 2 */}
							<div className="relative hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="200">
								<SVGBlock fill="#5C7069" />
								<StatContent number="8%" color="#5C7069" label="ROI" />
							</div>
						</div>

						<div className="flex flex-col items-center gap-8 mt-8 lg:mt-0">
							{/* Card 3 */}
							<div className="relative hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="300">
								<SVGBlock fill="#F97316" />
								<StatContent number="150+" color="#98643E" label="Total Investments" />
							</div>

							{/* Card 4 */}
							<div className="relative hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="400">
								<SVGBlock fill="#F97316" />
								<StatContent number="6%" color="#98643E" label="Tourism Growth" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// SVG Shape Component
const SVGBlock = ({ fill }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="250" height="200" viewBox="0 0 366 323" fill="none">
		<path
			d="M84.2353 10.2988C87.7807 4.15791 94.3329 0.375 101.424 0.375H264.576C271.667 0.375 278.219 4.15791 281.765 10.2988L363.341 151.593C366.886 157.734 366.886 165.3 363.341 171.44L281.765 312.735C278.219 318.876 271.667 322.658 264.576 322.658H101.424C94.3329 322.658 87.7807 318.876 84.2353 312.735L2.65906 171.44C-0.886355 165.3 -0.886353 157.734 2.65906 151.593L84.2353 10.2988Z"
			fill={`url(#gradient-${fill})`}
			fillOpacity="0.14"
		/>
		<defs>
			<linearGradient id={`gradient-${fill}`} x1="85.5" y1="5.5" x2="283.5" y2="295.5" gradientUnits="userSpaceOnUse">
				<stop stopColor={fill} />
				<stop offset="1" stopColor={fill} stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

// Content inside the stat card
const StatContent = ({ number, color, label }) => (
	<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
		<h1 className={`text-6xl`} style={{ color }}>
			<AnimatedNumber value={number} suffix="+" />
		</h1>
		<p className="text-[#142929] text-sm font-semibold">{label}</p>
	</div>
);

export default PropertyOpportunity;
