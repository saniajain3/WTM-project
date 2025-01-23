import Calendar from "./Calendar";

const PeriodCalendar = ({
	cyclePhases,
	nextPeriodStart,
	isCalculated,
	selectedNumMonths,
}) => {
	return (
		<div className=" flex flex-col items-center relative z-10">
			<img src="calendar.gif" className="w-12 cursor-pointer " />

			{/* Legend Section */}
			<div className="flex items-center justify-center relative">
				<h2 className="text-xl font-semibold text-center">
					Your Period Calendar
				</h2>
			</div>

			<div className="w-80 mx-auto mt-8">
				<Calendar
					onDateSelect={(date) => console.log("Selected Date:", date)}
					cyclePhases={cyclePhases}
					initialMonth={
						isCalculated && nextPeriodStart && !isNaN(new Date(nextPeriodStart))
							? new Date(nextPeriodStart)
							: new Date()
					}
					numMonths={parseInt(selectedNumMonths, 10)}
				/>
			</div>
		</div>
	);
};
export default PeriodCalendar;
