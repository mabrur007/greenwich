import React from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import stateImg from "/assets/invest/state.png";
import percantageImg from "/assets/invest/percentage.png";
import { Banknote } from "lucide-react";
import InvestmentModal from "../../../Components/reusable/InvestmentModal";
import InvestNowBtn from "../../../Components/reusable/InvestNowBtn";

const Banner = () => {
	return (
		<div className="bg-[#F6F1ED]">
			<div className="w-11/12 lg:w-10/12 mx-auto pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 place-items-end -mt-12 lg:mt-0">
					<div>
						<div className="ml-[5%] lg:ml-0">
							<SectionIntro
								backgroundText="Invest"
								title={
									<>
										Invest in <br />{" "}
										<span className="italic text-[#5C7069]">
											Bhaiya Hotels & <br /> Resorts
										</span>
									</>
								}
								subtitle="The Future of Hospitality"
								titleColor="text-[#98643E]"
								subtitleColor="text-[#5C7069]"
								subtitleSize="text-5xl"
								strokeClassName="amenities-stroke-yellow"
							/>
						</div>

						<div className="lg:mt-8 ml-[5%] lg:ml-[10%]">
							<p className="text-[#5C7069] mb-8">
								Investing in hospitality and tourism real estate offers a resilient, high-growth opportunity, especially in vibrant markets like Bangladesh.
								Bhaiya Hotels & Resorts Ltd., a division of the Bhaiya Group with over 50 years of legacy, invites investors to join its vision for excellence.
								The group transforms opportunities into professionally managed enterprises, blending traditional Bangladeshi hospitality with international
								standards. Partnering with Bhaiya Hotels & Resorts Ltd. allows investors to tap into the rising demand for premium accommodations in
								high-potential regions.
							</p>
							<p className="text-[#5C7069]">
								Property investment with Bhaiya Hotels & Resorts Ltd. offers strong advantages, outperforming traditional financial returns and hedging against
								inflation. Projects like Greenwich Hill Station highlight the group’s focus on innovative, high-return ventures in the thriving tourism sector.
								This makes Bhaiya Hotels & Resorts Ltd. an appealing choice for investors seeking growth and stability.
							</p>

							<div className="mt-8">
								<InvestNowBtn btnType="two" />
							</div>
						</div>
					</div>

					<div className="relative w-full h-full">
						<img src={stateImg} alt="" className="w-full h-full" />
						<img
							src={percantageImg}
							alt=""
							className="absolute top-3/5 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
