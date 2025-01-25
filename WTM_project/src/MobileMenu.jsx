import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function MobileMenu({ isMenuOpen }) {
	const menuItems = [
		{ name: "Home", route: "/" },
		{ name: "Period Tracker", route: "/tracker" },
		{ name: "Career Hub", route: "/career" },
		{ name: "About Us", route: "/about" },
	];

	return (
		<AnimatePresence>
			{isMenuOpen && (
				<motion.div
					key="mobile-menu"
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					className="absolute top-30 left-0 w-full h-screen z-20"
				>
					<div className="text-xl font-semibold bg-[#fee7b1] py-10 m-6 rounded-3xl">
						<ul className="flex flex-col items-center space-y-5">
							{menuItems.map((item) => (
								<li key={item.name}>
									<Link
										to={item.route}
										className="font-bold text-gray-900 hover:text-[#615846] transition-all duration-200"
									>
										{item.name}
									</Link>
								</li>
							))}
							<li>
								<button className=" font-bold bg-[#000] text-[#d3a645] border-2 border-transparent hover:border-[#bb963e] hover:text-gray-900 hover:bg-[#ffe9bc] rounded-3xl p-2 duration-200">
									<p className="text-lg">LOGIN</p>
								</button>
							</li>
						</ul>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
