import React, { useState } from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import { Mail, MapPinIcon, Phone } from "lucide-react";

// Dynamic data for offices
const officeData = [
	{
		id: "corporate",
		name: "Corporate Office",
		address: "House # 106, (Level - 4th & 5th), Road-12, Block-E, Banani, Dhaka-1213.",
		email: "greenwichhillstation@gmail.com",
		phone: "+88 02 58816611",
		mapUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7740592843116!2d90.39933727417664!3d23.754696178672887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a4ac0d8a05%3A0x16b2d2f13ef96b7a!2s106%20Rd%20No.%2012%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1721648000000!5m2!1sen!2sbd",
	},
	{
		id: "head",
		name: "Head Office",
		address: "28/A-3, Toyenbee Circular Road, Sandwip Bhaban, (6th Floor), Motijheel-C/A, Dhaka.",
		email: "greenwichhillstation@gmail.com",
		phone: "+88 02 47120641 , +88 02 47120643",
		mapUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.028064774779!2d90.41831467417749!3d23.776791278673898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72d1c650101%3A0x2d18a8bb56ed63cf!2sToyenbee%20Circular%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1721648100000!5m2!1sen!2sbd",
	},
];

const OfficeLocation = () => {
	const [selectedOffice, setSelectedOffice] = useState(officeData[0]);

	return (
		<div className="bg-[#F6F1ED] pb-16">
			<div className="w-11/12 lg:w-10/12 mx-auto">
				{/* Section Title */}
				<SectionIntro
					backgroundText="Location"
					title="Our Offices"
					subtitle="Elevating Service Across Worldwide Offices"
					titleColor="text-[#98643E]"
					subtitleColor="text-[#142929]"
					subtitleSize="text-6xl"
					strokeClassName="amenities-stroke-yellow"
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Left Column */}
					<div className="md:col-span-1 space-y-8">
						{officeData.map((office) => (
							<div
								key={office.id}
								onClick={() => setSelectedOffice(office)}
								className={`p-6 border cursor-pointer transition duration-300 hover:shadow-xl hover:shadow-[#142929] ${
									selectedOffice.id === office.id ? " bg-[#142929] border-[#142929] shadow-md shadow-black text-white" : "border-[#142929] bg-transparent"
								}`}
							>
								<h3 className={`text-2xl ${selectedOffice.id === office.id ? "text-white" : "text-[#142929]"} mb-4`}>{office.name}</h3>

								<div className="flex items-start gap-2 mb-4">
									<div>
										<MapPinIcon size={20} className={`${selectedOffice.id === office.id ? "text-white" : "text-[#142929]"} `} />
									</div>

									<p className={`${selectedOffice.id === office.id ? "text-white" : "text-[#142929]"}`}>{office.address}</p>
								</div>

								<div className="flex items-center gap-2 mb-4">
									<Mail size={20} className={`${selectedOffice.id === office.id ? "text-white" : "text-[#142929]"}`} />
									<p>{office.email}</p>
								</div>

								<div className="flex items-center gap-2 mb-4">
									<Phone size={20} className={`${selectedOffice.id === office.id ? "text-white" : "text-[#142929]"}`} />
									<p>{office.phone}</p>
								</div>
							</div>
						))}
					</div>

					{/* Map Column */}
					<div className="md:col-span-2 w-full h-[500px]">
						<iframe
							key={selectedOffice.id} // Forces iframe to reload when office changes
							title={`Google Map - ${selectedOffice.name}`}
							src={selectedOffice.mapUrl}
							width="100%"
							height="100%"
							className="border-0"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OfficeLocation;
