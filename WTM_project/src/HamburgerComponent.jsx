import { Hamburger } from "hamburger-react";

export default function HamburgerComponent({ toggled, toggle, size = 20 }) {
	return (
		<div className="flex items-center">
			<Hamburger
				toggled={toggled}
				toggle={toggle}
				className="p-3 flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
				size={size}
				style={{
					padding: "8px",
					background: "transparent",
					border: "none",
					cursor: "pointer",
				}}
				type="tilt"
				rounded
			/>
		</div>
	);
}
