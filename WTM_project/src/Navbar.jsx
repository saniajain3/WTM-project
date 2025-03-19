import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import HamburgerComponent from "./HamburgerComponent";
import MobileMenu from "./MobileMenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock-upgrade";
import logo from "/images/cherry-blossom.gif";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// toggle mobile menu
	const toggleMenu = () => {
		if (!isMenuOpen) {
			window.scrollTo(0, 0); // reset scroll position to top when opening the menu
		}
		setIsMenuOpen(!isMenuOpen);
	};

	// body scroll lock for mobile menu
	useEffect(() => {
		if (isMenuOpen) {
			disableBodyScroll(document.body);
		} else {
			enableBodyScroll(document.body);
		}
		return () => {
			enableBodyScroll(document.body);
		};
	}, [isMenuOpen]);

	// Smooth scroll function
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Menu items with section IDs
	const menuItems = [
		{ name: "Home", id: "home" },
		{ name: "Period Tracker", id: "tracker" },
		{ name: "Career Hub", id: "career" },
		{ name: "Age Guides", id: "about" },
	];

	return (
		<header className="sticky top-0 z-50 left-0 shadow-md bg-white rounded py-1.5 w-full">
			{/* Navbar */}
			<div className="max-w-screen-xl mx-auto md:px-8 sm:px-8 lg:px-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex-1 flex justify-center items-center md:flex-none md:w-auto md:justify-start">
						<img src={logo} className="w-16 cursor-pointer" alt="Logo" />
						<button className="font-[500] text-purple-950 tracking-wider text-[28px] md:text-2xl xl:text-[28px] py-4 font-countryside">
							HerSpace
						</button>
					</div>

					{/* Mobile menu */}
					<div className="flex items-center md:hidden">
						<div>
							<button className="text-2xl hover:bg-[#fee7b1] rounded-full p-2 duration-140">
								<CiSearch />
							</button>
						</div>
						<button className="text-black p-2" onClick={toggleMenu}>
							<HamburgerComponent
								toggled={isMenuOpen}
								toggle={setIsMenuOpen}
								size={22}
							/>
						</button>
					</div>

					{/* Laptop menu */}
					<div className="hidden md:flex items-center space-x-5 ml-auto">
						<ul className="flex space-x-6">
							{menuItems.map((item) => (
								<li key={item.id}>
									<button
										onClick={() => scrollToSection(item.id)}
										className="font-bold text-gray-900 lg:text-base md:text-base sm:text-xs hover:text-[#b8a886] transition-all duration-200"
									>
										{item.name}
									</button>
								</li>
							))}
						</ul>

						<div>
							<button className="cursor-pointer font-bold text-[#fd7da7] border-2 border-[#ab5e78] hover:text-gray-900 hover:bg-[#ffe9bc] rounded-3xl p-2 duration-200">
								Login
							</button>
						</div>

						<div>
							<button className="text-2xl hover:bg-[#fee7b1] rounded-full p-2 duration-140">
								<CiSearch />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen ? (
				<div className="flex flex-col items-center justify-center pt-4 h-screen md:hidden space-y-6">
					<MobileMenu
						isMenuOpen={isMenuOpen}
						scrollToSection={scrollToSection}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</div>
			) : null}
		</header>
	);
};

export default Navbar;
