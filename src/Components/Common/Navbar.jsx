import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Banknote, Menu, X } from "lucide-react";
import logo from "/assets/home/logo.png";
import InvestmentModal from "../reusable/InvestmentModal";
import InvestNowBtn from "../reusable/InvestNowBtn";

const Navbar = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// Scroll to top when any nav item is clicked
	const handleNavClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		if (menuOpen) setMenuOpen(false);
	};

	const navLinkClass = ({ isActive }) =>
		`relative px-2 py-1 hover:text-[#FFD4B2] transition-all duration-300 ${
			isActive
				? "text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[4px] after:bg-[#FFD4B2] after:rounded-full"
				: "text-white text-sm"
		}`;

	useEffect(() => {
		if (!isHome) return;

		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHome]);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navBg = isHome ? (scrolled ? "bg-[#142929] shadow-md" : "bg-transparent") : "bg-[#142929] shadow-md";

	return (
		<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
			<div className="w-11/12 mx-auto flex items-center justify-between px-4 py-2 md:px-8">
				{/* Logo */}
				<div className="hidden md:flex gap-6 font-medium">
					<Link to="/">
						<img className="w-14 h-14" src={logo} alt="logo" />
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-2 font-medium">
					<NavLink to="/" onClick={handleNavClick} className={navLinkClass}>
						Home
					</NavLink>
					<NavLink to="/about" onClick={handleNavClick} className={navLinkClass}>
						About Us
					</NavLink>
					<NavLink to="/features" onClick={handleNavClick} className={navLinkClass}>
						Feature
					</NavLink>
					<NavLink to="/benefits" onClick={handleNavClick} className={navLinkClass}>
						Benefit
					</NavLink>
					<NavLink to="/invest" onClick={handleNavClick} className={navLinkClass}>
						Invest
					</NavLink>
					<NavLink to="/news-and-gallery" onClick={handleNavClick} className={navLinkClass}>
						News & Gallery
					</NavLink>
					<NavLink to="/contact" onClick={handleNavClick} className={navLinkClass}>
						Get in Touch
					</NavLink>

					{/* Invest Now Button */}
					<InvestNowBtn />
				</div>

				{/* Mobile Menu Icon */}
				<div className="md:hidden flex items-center justify-between gap-4 max-w-s w-full">
					<div>
						<Link to="/">
							<img className="w-8 h-8" src={logo} alt="logo" />
						</Link>
					</div>

					<button onClick={toggleMenu}>{menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}</button>
				</div>
			</div>

			{/* Mobile Dropdown */}
			{menuOpen && (
				<div className="md:hidden bg-[#142929] text-white px-6 py-4 space-y-3">
					<Link to="/" onClick={handleNavClick} className="block">
						Home
					</Link>
					<Link to="/about" onClick={handleNavClick} className="block">
						About Us
					</Link>
					<Link to="/features" onClick={handleNavClick} className="block">
						Feature
					</Link>
					<Link to="/benefits" onClick={handleNavClick} className="block">
						Benefit
					</Link>
					<Link to="/invest" onClick={handleNavClick} className="block">
						Invest
					</Link>
					<Link to="/news-and-gallery" onClick={handleNavClick} className="block">
						News & Gallery
					</Link>
					<Link to="/contact" onClick={handleNavClick} className="block">
						Get in Touch
					</Link>

					{/* Invest Now Button */}
					<>
						<button onClick={() => setShowModal(true)} className="bg-[#F6F1ED] text-[#98643E] px-4 py-2 transition flex items-center gap-2 cursor-pointer">
							<Banknote size={18} />
							Invest Now
						</button>
						<InvestmentModal isOpen={showModal} onClose={() => setShowModal(false)} />
					</>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
