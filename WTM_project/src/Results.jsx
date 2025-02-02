import menstruation from "/images/menstruation.gif";
const Results = ({ cyclePhases, nextPeriodStart, nextPeriodEndDate }) => {
	return (
		<div className="flex flex-col items-center relative z-10">
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
			<div className="mb-3 text-lg text-center font-inter">
				<p>
					Your next most fertile days are from:{" "}
					<strong>{cyclePhases.fertileDays[0].toDateString()}</strong> to{" "}
					<strong>
						{cyclePhases.fertileDays[
							cyclePhases.fertileDays.length - 1
						].toDateString()}
					</strong>
				</p>
			</div>
		</div>
	);
};
export default Results;
