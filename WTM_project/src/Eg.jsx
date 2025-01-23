import axios from "axios";
import { useState } from "react";
const Eg = () => {
	const [data, setData] = useState([]);
	const getData = async () => {
		// const response = axios.get("https://picsum.photos/v2/list"); // a promise
		const response = await axios.get("https://picsum.photos/v2/list"); // a promise
		setData(response.data);
		console.log(data);
	};
	return (
		<div className="p-10">
			<button
				onClick={getData}
				className="bg-teal-700 text-white font-semibold text-2xl px-3 py-3 rounded-sm active:scale-90"
			>
				Get Data
			</button>
			<div className="p-5 mt-5">
				{data.map(function (idx) {
					return <h1 key={idx}>Hello</h1>;
				})}
			</div>
		</div>
	);
};

export default Eg;
