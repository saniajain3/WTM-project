const Buttons = ({ onCalculate, onReset }) => (
	<div className="flex justify-center mt-6 space-x-4">
		<button
			className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
			onClick={onCalculate}
		>
			Calculate
		</button>
		<button
			className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
			onClick={onReset}
		>
			Reset Values
		</button>
	</div>
);

export default Buttons;
