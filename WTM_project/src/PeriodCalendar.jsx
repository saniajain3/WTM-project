import { startOfDay, startOfToday } from "date-fns";
import Calendar from "./Calendar";
import calendar from "/images/calendar.gif";
const PeriodCalendar = ({
	cyclePhases,
	nextPeriodStart,
	isCalculated,
	selectedNumMonths,
}) => {
	return (
		<div className=" flex flex-col items-center relative z-10">
			<img src={calendar} className="w-12 cursor-pointer " />

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
						isCalculated && nextPeriodStart
							? startOfDay(new Date(nextPeriodStart))
							: startOfToday()
					}
					numMonths={Number(selectedNumMonths) || 3}
				/>
			</div>
		</div>
	);
};
export default PeriodCalendar;
