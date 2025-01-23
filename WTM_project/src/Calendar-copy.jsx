// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import {
// 	add,
// 	eachDayOfInterval,
// 	endOfMonth,
// 	format,
// 	getDay,
// 	isEqual,
// 	isToday,
// 	parse,
// 	startOfDay,
// 	startOfToday,
// } from "date-fns";
// import { useState, useEffect } from "react";

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(" ");
// }

// export default function Calendar({
// 	onDateSelect,
// 	cyclePhases,
// 	initialMonth,
// 	numMonths,
// }) {
// 	let today = startOfToday();

// 	// Dynamically calculate start and end months
// 	const [startMonth, setStartMonth] = useState(initialMonth || today);
// 	const [endMonth, setEndMonth] = useState(
// 		add(initialMonth || today, { months: numMonths - 1 })
// 	);

// 	const [currentMonth, setCurrentMonth] = useState(
// 		format(initialMonth || today, "MMM-yyyy")
// 	);

// 	const [days, setDays] = useState([]);

// 	useEffect(() => {
// 		// Update startMonth and endMonth dynamically
// 		setStartMonth(initialMonth || today);
// 		setEndMonth(add(initialMonth || today, { months: numMonths - 1 }));
// 	}, [initialMonth, numMonths]);

// 	useEffect(() => {
// 		// Recompute days when currentMonth changes
// 		let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
// 		let days = eachDayOfInterval({
// 			start: firstDayCurrentMonth,
// 			end: endOfMonth(firstDayCurrentMonth),
// 		});
// 		setDays(days);
// 	}, [currentMonth]);

// 	const colStartClasses = [
// 		"",
// 		"col-start-2",
// 		"col-start-3",
// 		"col-start-4",
// 		"col-start-5",
// 		"col-start-6",
// 		"col-start-7",
// 	];

// 	const isPeriodDay = (day) =>
// 		cyclePhases?.periodDays.some((d) =>
// 			isEqual(startOfDay(d), startOfDay(day))
// 		);
// 	const isFertileDay = (day) =>
// 		cyclePhases?.fertileDays.some((d) =>
// 			isEqual(startOfDay(d), startOfDay(day))
// 		);

// 	// Navigation: Previous Month
// 	function previousMonth() {
// 		const firstDayPrevMonth = add(parse(currentMonth, "MMM-yyyy", new Date()), {
// 			months: -1,
// 		});

// 		if (startOfDay(firstDayPrevMonth) >= startOfDay(startMonth)) {
// 			setCurrentMonth(format(firstDayPrevMonth, "MMM-yyyy"));
// 		} else {
// 			console.log("Cannot scroll back past startMonth");
// 		}
// 	}

// 	// Navigation: Next Month
// 	function nextMonth() {
// 		const firstDayNextMonth = add(parse(currentMonth, "MMM-yyyy", new Date()), {
// 			months: 1,
// 		});

// 		if (startOfDay(firstDayNextMonth) <= startOfDay(endMonth)) {
// 			setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
// 		} else {
// 			console.log("Cannot scroll past endMonth");
// 		}
// 	}

// 	return (
// 		<div className="p-4 rounded-md">
// 			<div className="flex items-center justify-between">
// 				<h2 className="font-semibold text-gray-900">
// 					{format(parse(currentMonth, "MMM-yyyy", new Date()), "MMMM yyyy")}
// 				</h2>
// 				<div className="flex items-center">
// 					<button
// 						type="button"
// 						onClick={previousMonth}
// 						className="p-1 text-gray-400 hover:text-gray-500"
// 						disabled={
// 							startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) <=
// 							startOfDay(startMonth)
// 						}
// 					>
// 						{startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) <=
// 						startOfDay(startMonth) ? (
// 							<ChevronLeftIcon
// 								className="w-5 h-5 text-gray-200 cursor-default"
// 								aria-hidden="true"
// 							/>
// 						) : (
// 							<ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
// 						)}
// 					</button>

// 					<button
// 						type="button"
// 						onClick={nextMonth}
// 						className="p-1 text-gray-400 hover:text-gray-500"
// 						disabled={
// 							startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) >=
// 							startOfDay(endMonth)
// 						}
// 					>
// 						{startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) >=
// 						startOfDay(endMonth) ? (
// 							<ChevronRightIcon
// 								className="w-5 h-5 text-gray-200 cursor-default"
// 								aria-hidden="true"
// 							/>
// 						) : (
// 							<ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
// 						)}
// 					</button>
// 				</div>
// 			</div>

// 			<div className="grid grid-cols-7 gap-1 mt-6 text-sm">
// 				{days.map((day, index) => (
// 					<div
// 						key={index}
// 						className={classNames(
// 							colStartClasses[getDay(day)],
// 							"h-8 w-8 flex items-center justify-center text-gray-900",
// 							isPeriodDay(day) && "bg-red-400",
// 							isFertileDay(day) && "bg-green-500",
// 							isToday(day) && "ring-2 ring-blue-500"
// 						)}
// 					>
// 						{format(day, "d")}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
