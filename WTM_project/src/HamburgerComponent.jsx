// import Hamburger from "hamburger-react";

// export default function HamburgerComponent({ toggled, toggle, size = 20 }) {
// 	return (
// 		<div className="flex items-center">
// 			<Hamburger
// 				toggled={toggled}
// 				toggle={toggle}
// 				className="p-3 flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
// 				size={size}
// 				style={{
// 					padding: "8px",
// 					background: "transparent",
// 					border: "none",
// 					cursor: "pointer",
// 				}}
// 				type="tilt"
// 				rounded
// 			/>
// 		</div>
// 	);
// }
import { lazy, Suspense } from "react";

const Hamburger = lazy(() => import("hamburger-react"));

export default function HamburgerComponent({ toggled, toggle, size = 20 }) {
	return (
		// <Suspense fallback={<div className="p-3"></div>}>
		<Suspense
			fallback={
				<div
					className="animate-pulse bg-gray-200 rounded-md"
					style={{ width: size + 10, height: size + 10 }}
				/>
			}
		>
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
		</Suspense>
	);
}
