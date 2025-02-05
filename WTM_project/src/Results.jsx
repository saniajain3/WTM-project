import menstruation from "/images/menstruation.gif";
import bulb from "/images/click-bulb.gif";
const Results = ({ cyclePhases, nextPeriodStart, nextPeriodEndDate }) => {
	return (
		<div className="relative flex flex-col items-center  z-10">
			<img src={menstruation} className="w-12 cursor-pointer " />
			<h1 className="text-2xl font-semibold pt-2 pb-6 text-center">
				Calculated Results
			</h1>
			<div className="text-lg text-center mt-4 mb-3 font-inter">
				<p>
					Your next period is expected to start on:{" "}
					<strong>{nextPeriodStart?.toDateString()}</strong>
				</p>
			</div>
			<div className="mb-4 text-lg text-center font-inter">
				<p>
					It is expected to end on:{" "}
					<strong>{nextPeriodEndDate?.toDateString()}</strong>
				</p>
			</div>
			<div className="mb-3  text-center font-inter">
				<p className="text-lg">
					Your next most fertile days are from:{" "}
					<strong>{cyclePhases.fertileDays[0].toDateString()}</strong> to{" "}
					<strong>
						{cyclePhases.fertileDays[
							cyclePhases.fertileDays.length - 1
						].toDateString()}
					</strong>
				</p>
			</div>

			<div className=" bottom-0 left-0 flex py-8 font-inter">
				<p
					className=" text-pink-700 text-xl mr-1"
					style={{ marginBottom: "35px" }}
				>
					&#9733;
				</p>{" "}
				{/* Solid Star (★) */}
				<p className="text-gray-900 text-[16px] ">
					{/* Just a heads-up! This tracker estimates your cycle, but everyone’s
					different—so use it as your guide! 😊 */}
					Just a heads-up! This tracker gives you an estimate, but your body
					knows best—so take it as a handy guide. Stay kind to yourself! 💖
				</p>
			</div>
		</div>
	);
};
export default Results;
