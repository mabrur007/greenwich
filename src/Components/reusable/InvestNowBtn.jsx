import React, { useState } from "react";
import InvestmentModal from "../reusable/InvestmentModal";
import { Banknote } from "lucide-react";

const InvestNowBtn = ({ btnType }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<button
				onClick={() => setShowModal(true)}
				className={`before:ease cursor-pointer relative px-4 py-[10px] overflow-hidden  ${
					btnType === "two" ? "text-[#F6F1ED] bg-[#142929]" : "text-[#98643E] bg-[#F6F1ED]"
				}   before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#98643E] before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180`}
			>
				<p class="relative z-10 flex justify-center items-center gap-2">
					<Banknote size={18} />
					<p>Invest Now</p>
				</p>
			</button>
			<InvestmentModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</div>
	);
};

export default InvestNowBtn;
