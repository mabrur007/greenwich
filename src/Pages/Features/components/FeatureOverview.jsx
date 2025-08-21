import React from "react";
import overviewImage1 from "/assets/features/feature-overview-image-1.jpg";
import overviewImage2 from "/assets/features/feature-overview-image-2.png";
import overviewImage3 from "/assets/features/feature-overview-image-3.jpg";
import keyFeatureImage1 from "/assets/features/key-feature-image-1.png";
import keyFeatureImage2 from "/assets/features/key-feature-image-2.png";
import keyFeatureImage3 from "/assets/features/key-feature-image-3.png";
import keyFeatureImage4 from "/assets/features/key-feature-image-4.png";

const FeatureOverview = () => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div>
						<img className="h-[516px] w-full" src={overviewImage1} alt="" />
					</div>

					<div className="space-y-4">
						<img className="h-[250px] w-full object-cover" src={overviewImage2} alt="" />
						<img className="h-[250px] w-full object-cover" src={overviewImage3} alt="" />
					</div>
				</div>

				<div className="ml-[12%] lg:ml-0">
					<h1 className="text-4xl lg:text-6xl w-5/6 text-[#142929] mb-4">Features Greenwich Hill Station</h1>
					<p className="w-3/4 text-[#5C7069]">
						Indulge in luxurious cottages, exquisite kebab dining, a refreshing spa, and activities like hill camping and infinity pool relaxation. Exceptional
						service guarantees memorable stays at Greenwich Hill Station.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
				{/* Sticky Text Column */}
				<div className="flex flex-col items-center justify-center sticky top-20 h-fit">
					<h1 className="text-4xl text-[#142929] w-3/4 mx-auto mb-4">Key Experiences at Greenwich Hill Station</h1>
					<p className="w-3/4 mx-auto text-[#5C7069]">
						Discover the essence of Greenwich Hill Station through unique experiences that blend luxury with nature. From serene hill camping under the stars to
						thrilling water park adventures, every moment is crafted to inspire. Enjoy cultural dining at the Kebab Station and unwind at the infinity pool, all
						enhanced by impeccable service.
					</p>
				</div>

				{/* Scrollable Image Column */}
				<div className="h-[80vh] overflow-y-auto space-y-24 pr-2 scroll-smooth" data-lenis-prevent>
					{/* Section 1 */}
					<div className="relative h-[80vh]">
						<img className="w-full h-full object-cover" src={keyFeatureImage1} alt="" />
						<div className="bg-[#142929] p-6 absolute bottom-8 left-8 max-w-md">
							<h3 className="text-[#98643E] text-2xl mb-2">11 Storeys Mother Tower</h3>
							<p className="text-[#D2DACE] text-sm">
								Rise to new heights with the 11 Storeys Mother Tower, a stunning architectural centerpiece offering premium accommodations and breathtaking
								views.
							</p>
						</div>
					</div>

					{/* Section 2 */}
					<div className="relative h-[80vh]">
						<img className="w-full h-full object-cover" src={keyFeatureImage2} alt="" />
						<div className="bg-[#142929] p-6 absolute bottom-8 left-8 max-w-md">
							<h3 className="text-[#98643E] text-2xl mb-2">Infinity Pool</h3>
							<p className="text-[#D2DACE] text-sm">Refresh and relax in the luxurious infinity pool with panoramic views of lush landscapes.</p>
						</div>
					</div>

					{/* Section 3 */}
					<div className="relative h-[80vh]">
						<img className="w-full h-full object-cover" src={keyFeatureImage3} alt="" />
						<div className="bg-[#142929] p-6 absolute bottom-8 left-8 max-w-md">
							<h3 className="text-[#98643E] text-2xl mb-2">Kebab Station</h3>
							<p className="text-[#D2DACE] text-sm">Taste authentic cuisine at the Kebab Station, where local flavors meet fine dining.</p>
						</div>
					</div>

					{/* Section 4 */}
					<div className="relative h-[80vh]">
						<img className="w-full h-full object-cover" src={keyFeatureImage4} alt="" />

						<div className="bg-[#142929] p-6 absolute bottom-8 left-8 max-w-md">
							<h3 className="text-[#98643E] text-2xl mb-2">Hill Camping</h3>
							<p className="text-[#D2DACE] text-sm">Experience the thrill of camping under the stars in the picturesque hills.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureOverview;
