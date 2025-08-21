import React from "react";
import news1 from "/assets/home/news1.png";
import news2 from "/assets/home/news2.png";
import news3 from "/assets/home/news3.png";
import SectionIntro from "../../../Components/reusable/SectionIntro";

const News = () => {
	return (
		<div className="w-11/12 lg:w-10/12 mx-auto pb-8">
			<SectionIntro
				backgroundText="Updates"
				title="Latest News"
				subtitle="Bringing You Updates on Resort Excellence"
				titleColor="text-[#98643E]"
				subtitleColor="text-[#142929]"
				subtitleSize="text-4xl"
				strokeClassName="amenities-stroke-yellow"
			/>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 -mt-12 lg:mt-0">
				<div className="lg:col-span-2">
					<div>
						<img className="w-full h-[500px] object-cover" src={news1} alt="" />
					</div>
					<p className="text-lg font-medium mt-4 mb-2">Greenwich Hill Station Grand Opening Ceremony Marks New Era of Luxury</p>
					<p className="text-sm text-gray-500">10-05-2025</p>
				</div>

				<div className="grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-0">
					<div>
						<img className="w-full h-[200px] object-contain object-left" src={news2} alt="" />
						<p className="text-lg font-medium mt-2 mb-1">Motijheel Residential Fair - 2025</p>
						<p className="text-sm text-gray-500">10-05-2025</p>
					</div>
					<div>
						<img className="w-full h-[200px] object-contain object-left" src={news3} alt="" />
						<p className="text-lg font-medium mt-2 mb-1">Bangladesh International Trade Fair - 2025</p>
						<p className="text-sm text-gray-500">10-05-2025</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
