import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Common/ScrollToTop";
import { MessageSquareText, Phone, X } from "lucide-react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa6";

const MainLayout = () => {
	const [showChatOptions, setShowChatOptions] = useState(false);

	return (
		<div>
			<ScrollToTop />
			<Navbar />

			<div className="relative min-h-screen">
				<Outlet />

				{/* Floating Buttons Bar */}
				<div>
					{/* Call Button */}
					<div className="fixed bottom-12 lg:left-20 left-10 z-50">
						<a href="tel:+8801-938886333" className="ml-[2%] md:ml-[4%]">
							<div className="w-14 h-14 flex items-center justify-center bg-[#FFD4B2] rounded-full shadow-lg cursor-pointer border-8 border-[#98643E] hover:bg-[#F6F1ED] transition-colors duration-300 blink-border">
								<Phone size={20} className="text-[#98643E]" />
							</div>
						</a>
					</div>

					{/* Chat Section */}
					<div className="fixed bottom-12 lg:right-20 right-10 z-50">
						<div className="relative flex flex-col items-center gap-2">
							{/* Extra buttons wrapper */}
							<div
								className={`flex flex-col items-center gap-2 transform transition-all duration-500 ${
									showChatOptions ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
								}`}
							>
								<a href="https://wa.me/8801938886333" target="_blank" rel="noopener noreferrer">
									<div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-lg cursor-pointer hover:bg-green-400 transition-colors duration-300">
										<FaWhatsapp size={20} className="text-white" />
									</div>
								</a>

								<a
									href="https://m.facebook.com/msg/106933012428933/?show_interstitial=0&mdotme_uri=https%3A%2F%2Fm.me%2Fedenbaybd&source_id=1441792&handler=m.me&referer&refsrc=deprecated&_rdr"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full shadow-lg cursor-pointer hover:bg-blue-400 transition-colors duration-300">
										<FaFacebookMessenger size={20} className="text-white" />
									</div>
								</a>
							</div>

							{/* Main chat toggle button */}
							<div
								onClick={() => setShowChatOptions((prev) => !prev)}
								className="w-14 h-14 flex items-center justify-center bg-[#FFD4B2] rounded-full shadow-lg cursor-pointer border-8 border-[#98643E] hover:bg-[#F6F1ED] transition-colors duration-300 blink-border"
							>
								{!showChatOptions ? <MessageSquareText size={20} className="text-[#98643E]" /> : <X size={24} className="text-[#98643E]" />}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
