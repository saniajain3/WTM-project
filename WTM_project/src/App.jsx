import Navbar from "./Navbar";
import Home from "./Home";
import Tracker from "./Tracker";
import Chatbot from "./Chatbot";

export default function App() {
	return (
		<div>
			<Navbar />
			<div id="home">
				<Home />
			</div>
			<div id="tracker">
				<Tracker />
			</div>
			{/* <div id="chatbot"> */}
			<Chatbot />
			{/* </div> */}
		</div>
	);
}
