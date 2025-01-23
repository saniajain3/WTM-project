import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock-upgrade";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

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

	const menuItems = [
		{ name: "Home", route: "/" },
		{ name: "Period Tracker", route: "/tracker" },
		{ name: "Career Hub", route: "/career" },
		{ name: "About Us", route: "/about" },
	];
	const routes = ["/", "/tracker", "/career", "/about"];

	return (
		<header className="sticky top-0 z-50 left-0 shadow-md bg-white rounded py-4 w-full">
			{/* Navbar Container */}
			<div className="max-w-screen-xl mx-auto md:px-8 sm:px-8 lg:px-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex-1 flex justify-center items-center md:flex-none md:w-auto md:justify-start">
						<img
							src="images/cherry-blossom.gif"
							className="w-16 cursor-pointer"
						/>
						<button className="font-bold text-2xl font-inter">HerSpace</button>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						{/* Search Button */}
						<div>
							<button className="text-2xl hover:bg-[#fee7b1] rounded-full p-2 duration-140">
								<CiSearch />
							</button>
						</div>
						<button className="text-black p-2" onClick={toggleMenu}>
							<Hamburger />
						</button>
					</div>

					{/* Laptop Menu */}
					<div className="hidden md:flex items-center space-x-5 ml-auto">
						{/* Menu Items */}
						<ul className="flex space-x-6">
							{menuItems.map((item) => {
								return (
									<li key={item.name}>
										<Link
											to={item.route}
											className="font-bold text-gray-900 lg:text-base md:text-sm sm:text-xs hover:text-[#b8a886] transition-all duration-200"
										>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
						{/* Login Button */}
						<div>
							<button className="font-bold text-[#d3a645] border-2 border-[#bb963e]  hover:text-gray-900 hover:bg-[#ffe9bc] rounded-3xl p-2 duration-200">
								Login
							</button>
						</div>

						{/* Search Button */}
						<div>
							<button className="text-2xl hover:bg-[#fee7b1] rounded-full p-2 duration-140">
								<CiSearch />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen ? (
				<div className="flex flex-col items-center justify-center pt-4 h-screen md:hidden space-y-6">
					{/* Menu Items */}
					<MobileMenu isMenuOpen={isMenuOpen} />
				</div>
			) : null}
		</header>
	);
};
export default Navbar;

{
	/* <svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							className="w-6 h-6"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg> */
}
