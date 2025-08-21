import React, { useEffect, useState } from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import { ArrowUpRight, X } from "lucide-react";
import orangeLogo from "../../../../public/assets/about-us/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add form validation or API call here
		setShowPopup(true);
		// Hide popup after 3 seconds
		setTimeout(() => setShowPopup(false), 3000);
	};

	return (
		<div className="w-11/12 lg:w-10/12 mx-auto py-16 relative">
			{/* Background Logo */}
			<div className="absolute top-0 -right-[10%] opacity-10 -z-10 hidden lg:block">
				<img className="h-[600px]" src={orangeLogo} alt="orange-logo" />
			</div>

			{/* Grid Layout */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up">
				{/* Left Content */}
				<div>
					<SectionIntro
						backgroundText="Contact"
						title={
							<>
								Together, we can do <span className="text-[#5C7069]">extraordinary</span> things
							</>
						}
						titleColor="text-[#98643E]"
						subtitleColor="text-[#142929]"
						subtitleSize="text-6xl"
						strokeClassName="amenities-stroke-yellow"
					/>

					<div className="lg:ml-[11%] flex items-center gap-2 mt-6">
						<a
							href="mailto:greenwichhillstation@gmail.com"
							className="font-semibold hover:text-[#142929] text-[#5C7069] transition-all duration-100  border-b border-[#142929]"
						>
							greenwichhillstation@gmail.com
						</a>

						<a
							href="mailto:greenwichhillstation@gmail.com"
							className="benzene-button bg-[#5C7069] text-white px-2 py-2 font-semibold inline-flex items-center hover:scale-105"
						>
							<ArrowUpRight size={14} />
						</a>
					</div>
				</div>

				{/* Right Contact Form */}
				<div className="z-10 lg:mt-[15%]">
					<form className="border border-[#98643E]/40 p-6 bg-white/10 backdrop-blur-md" data-aos="zoom-in-up" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Full Name"
							className="border-b border-[#98643E] w-full py-2 mb-4 bg-transparent placeholder:text-[#5C7069] focus:outline-none"
						/>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
							<input
								type="email"
								placeholder="Email"
								className="border-b border-[#98643E] w-full py-2 bg-transparent placeholder:text-[#5C7069] focus:outline-none"
							/>
							<input
								type="number"
								placeholder="Mobile Number"
								className="border-b border-[#98643E] w-full py-2 bg-transparent placeholder:text-[#5C7069]  focus:outline-none"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-[#98643E] font-semibold mb-3">What are you interested in?*</label>
							<div className="space-y-2">
								{[
									{
										label: "Resort Investment Opportunities",
										value: "resort-investment",
									},
									{
										label: "Property Tour and Site Visits",
										value: "property-tour",
									},
									{
										label: "Investment Consultation",
										value: "investment-consultation",
									},
									{
										label: "Partnership and Collaboration",
										value: "partnership-collaboration",
									},
									{ label: "General Inquiry", value: "general-inquiry" },
								].map((option, i) => (
									<label key={i} className="flex items-center gap-2 cursor-pointer">
										<input type="radio" name="interest" value={option.value} className="text-[#98643E] focus:ring-[#98643E]" />
										<span className="text-[#5C7069]">{option.label}</span>
									</label>
								))}
							</div>
						</div>

						<textarea
							placeholder="Message"
							className="border-b border-[#98643E] w-full py-2 mb-4 bg-transparent placeholder:text-[#5C7069] focus:outline-none"
							rows={3}
						></textarea>

						<div className="mb-4">
							<label className="flex items-start gap-2 cursor-pointer">
								<input type="radio" name="privacy-policy" className="text-[#98643E] focus:ring-[#98643E] rounded-full mt-1" />
								<span className="text-[#5C7069] text-sm">
									I understand that Greenwich Hill Station will securely hold my data in accordance with their{" "}
									<span className="font-semibold">privacy policy</span>.
								</span>
							</label>
						</div>

						<button className="bg-[#142929] text-white py-2 w-full font-light cursor-pointer hover:bg-[#144040] transition-colors duration-300">
							Submit Form
						</button>
					</form>
				</div>
			</div>

			{/* Toast Popup */}
			{showPopup && (
				<div className="fixed bottom-10 right-5 z-50 flex flex-col items-end space-y-2">
					<div
						className="bg-white shadow-xl rounded-xl border-l-4 border-[#98643E] p-4 w-80 flex items-start gap-3 animate-slide-up"
						style={{ animationDuration: "0.5s" }}
					>
						<div className="flex-1">
							<h3 className="font-semibold text-[#98643E] text-lg">Thank You!</h3>
							<p className="text-[#5C7069] text-sm">Your message has been submitted successfully.</p>
						</div>
						<X size={20} className="text-[#98643E] cursor-pointer" onClick={() => setShowPopup(false)} />
					</div>
				</div>
			)}

			{/* Add this animation in your global CSS */}
			<style>
				{`
    @keyframes slide-up {
      0% { transform: translateY(50px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    .animate-slide-up {
      animation-name: slide-up;
      animation-fill-mode: forwards;
    }
  `}
			</style>
		</div>
	);
};

export default ContactForm;
