import { Banknote, Calendar, MapPin } from "lucide-react";
import React from "react";
import circularText from "/assets/home/circular-text2.svg";
import mapBackground from "/assets/home/map-background.png";
import map2 from "/assets/home/greenwich-map-gif.gif";
import InvestNowBtn from "../../../Components/reusable/InvestNowBtn";

const Luxury = () => {
	return (
		<div className="min-h-screen bg-gradient-to-t from-[#142929] to-[#142929]/50 lg:py-24 py-16">
			<div className="w-11/12 lg:w-10/12 mx-auto">
				<div className="flex items-end justify-between mb-12">
					<h2 className="text-4xl lg:text-6xl text-white">
						Ready to Invest in <br /> Luxury?
					</h2>

					{/* Button over circular SVG */}
					<div className="relative w-[200px] h-[150px] flex items-center justify-center">
						<img src={circularText} alt="circular text" className="w-full h-full object-contain" />

						<div className="absolute top-1/2 -right-4 lg:-right-6">
							<InvestNowBtn />
						</div>
					</div>
				</div>
			</div>

			<div
				className="bg-cover bg-center bg-no-repeat lg:min-h-screen relative h-[500px]"
				style={{
					backgroundImage: `url(${mapBackground})`,
				}}
			>
				<div className="w-3/4 mx-auto">
					<img src={map2} alt="map" />

					<div className=""></div>
				</div>
				<div className="absolute bottom-24 translate-x-[42%] hidden lg:block z-10">
					<div className="p-6 bg-white/10 backdrop-blur-3xl text-white">
						<div className="flex items-start gap-2 text-[#FFD4B2]">
							<MapPin size={20} className="mt-1" />
							<div>
								<p className="mb-1 font-semibold underline decoration-[#FFD4B2]/60">Greenwich Hill Station</p>
								<p className="text-sm text-white/90 leading-tight">Dhapnatila, Kadimnagar, Sylhet Sadar, Sylhet</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Luxury;
