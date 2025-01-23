import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Tracker from "./Tracker";
// import Eg from "./Eg";

export default function App() {
	return (
		<div className="min-h-screen">
			<Navbar />

			<Routes>
				<Route path="/" element={<Tracker />} /> {/* Default route */}
				<Route path="/tracker" element={<Tracker />} />
				{/* <Route path="/eg" element={<Eg />} /> */}
			</Routes>
		</div>
	);
}
