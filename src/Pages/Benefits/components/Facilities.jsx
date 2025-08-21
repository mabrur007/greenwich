import React from "react";
import Slider from "react-slick";

import ownershipFacilitiesImage1 from "/assets/benefits/ownership-facilities-images - 1.png";
import ownershipFacilitiesImage2 from "/assets/benefits/ownership-facilities-images - 2.png";
import ownershipFacilitiesImage3 from "/assets/benefits/ownership-facilities-images - 3.png";
import ownershipFacilitiesImage4 from "/assets/benefits/ownership-facilities-images - 4.png";
import ownershipFacilitiesImage5 from "/assets/benefits/ownership-facilities-images - 5.png";
import ownershipFacilitiesImage6 from "/assets/benefits/ownership-facilities-images - 6.png";

import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionIntro from "../../../Components/reusable/SectionIntro";

const NextArrow = ({ onClick }) => (
	<div className="absolute -top-20 right-4 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
		<div className="bg-[#D2DACE] hover:bg-[#142929] hover:text-white p-1">
			{" "}
			<ArrowRight />{" "}
		</div>
	</div>
);

const PrevArrow = ({ onClick }) => (
	<div className="absolute -top-20 right-20 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
		<div className="bg-[#D2DACE] hover:bg-[#142929] hover:text-white text-[#5C7069] p-1">
			{" "}
			<ArrowLeft />{" "}
		</div>
	</div>
);

const Facilities = () => {
	const images = [
		{
			image: ownershipFacilitiesImage1,
			title: "Shared Ownership Options",
			description: "Benefit from co-ownership opportunities with flexible investment plans and reduced costs.",
		},
		{
			image: ownershipFacilitiesImage2,
			title: "Property Management Services",
			description: "Enjoy hassle-free property upkeep, security, and maintenance handled by professionals.",
		},
		{
			image: ownershipFacilitiesImage3,
			title: "Amenities and Utilities",
			description: "Access top-tier facilities including pools, gyms, and 24/7 essential utility services.",
		},
		{
			image: ownershipFacilitiesImage4,
			title: "Customization and Upgrades",
			description: "Personalize your unit with design upgrades, interior modifications, and premium materials.",
		},
		{
			image: ownershipFacilitiesImage5,
			title: "Investment and Financial Services",
			description: "Get expert financial advice, rental income options, and attractive return on investment.",
		},
		{
			image: ownershipFacilitiesImage6,
			title: "Specialized Ownership Benefits",
			description: "Benefit from priority bookings, VIP access to amenities, and exclusive discounts.",
		},
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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
		<div className="">
			{" "}
			<div
				className="lg:ml-[10%] pb-16
"
			>
				<div className="ml-[5%] lg:ml-0">
					<SectionIntro
						backgroundText="Facilities"
						title="Membership Benefits"
						subtitle="Invest in fractional ownership, leasehold, or timeshare agreements."
						titleColor="text-[#98643E]"
						subtitleColor="text-[#142929]"
						subtitleSize="text-6xl"
						strokeClassName="amenities-stroke-yellow"
					/>
				</div>

				<div className="overflow-visible">
					<Slider {...settings}>
						{images.map((img, index) => (
							<div key={index} className="px-3 overflow-visible">
								<div className="group transition-all duration-500 ease-in-out">
									<div className="relative overflow-hidden cursor-pointer h-[250px] group-hover:h-[350px] transition-all duration-500 ease-in-out">
										<img src={img.image} alt={`Project ${index + 1}`} className="w-full h-full object-cover transition-all duration-500" />

										{/* Always-visible Title */}
										<h3 className="absolute bottom-14 group-hover:bottom-24 left-4 text-white text-xl z-20">{img.title}</h3>

										{/* Gradient Overlay with Description */}
										<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10 p-4 flex flex-col justify-end">
											<p className="text-white text-sm">{img.description}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Facilities;
