import React from "react";

const BenifitsArchitecture = () => {
	return (
		<div className="py-16 min-h-[90vh]">
			{/* Background Title */}
			<div className="relative mb-16">
				<h1 className="amenities-stroke-yellow mask-gradient text-[150px] md:text-[200px] select-none pointer-events-none hidden md:block text-center">
					Benifits
				</h1>

				<div className="text-center absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<h3 className="text-4xl lg:text-6xl text-[#98643E] mb-2 mt-12">Ownership Benefits</h3>
					<p className="text-[#142929]">Structural Excellence</p>
				</div>
			</div>

			{/* First Row */}
			<div className="w-11/12 lg:w-10/12 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
					{[
						{
							title: "Flexible Check-In/Check-Out",
							desc: "Enjoy tailored arrival and departure schedules to suit your personal travel needs.",
							index: 1,
						},
						{
							title: "Seamless Ownership Registration",
							desc: "Benefit from streamlined legal processes with local authorities for a hassle-free investment. ",
							index: 2,
						},
						{
							title: "Luxurious Vacation Ownership",
							desc: "Relish exclusive stays in your own premium resort with top-tier amenities.",
							index: 3,
						},
						{
							title: "Exclusive Property Expansion",
							desc: "Gain access to purchase additional resort suites or condominiums for future growth. ",
							index: 4,
						},
						{
							title: "Lifelong Cash Flow",
							desc: "Secure a steady income stream for life, fueled by the resort’s thriving tourist appeal.",
							index: 5,
						},
						{
							title: "Flexible Ownership Transfer",
							desc: "Benefit from the ability to transfer or resell your ownership anytime, ensuring liquidity during emergencies.",
							index: 6,
						},
					].map((item, i) => (
						<div key={i} className="border-t border-[#98643E] flex items-center justify-center relative group mt-16 lg:mt-0">
							<div className="absolute -top-[2px] right-0">
								<p className="w-12 h-1 bg-[#98643E] rounded-full"></p>
							</div>
							<div>
								<h3 className="text-2xl text-[#98643E] mb-2">{item.title}</h3>
								<p className="text-[#5C7069]">{item.desc}</p>
							</div>
							<div>
								<h1
									className="text-[150px] md:text-[200px] select-none pointer-events-none text-center
    text-transparent bg-clip-text 
    transition-all duration-800 ease-in-out 
    group-hover:text-transparent 
    group-hover:bg-gradient-to-b 
    group-hover:from-[#C6A893] 
    group-hover:to-[#F5ECE6]"
									style={{
										WebkitTextStroke: "1px rgba(234, 179, 8, 0.3)",
									}}
								>
									{item.index}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BenifitsArchitecture;
