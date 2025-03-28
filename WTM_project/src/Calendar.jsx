import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
	add,
	differenceInMonths,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameMonth,
	isToday,
	parse,
	startOfDay,
	startOfToday,
	startOfMonth,
	sub,
} from "date-fns";
import { useState, useEffect } from "react";
import bulb from "/images/click-bulb.gif";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Calendar({
	onDateSelect,
	cyclePhases,
	initialMonth,
	numMonths,
}) {
	let today = startOfToday();
	let startMonth = startOfMonth(initialMonth || today);

	let endMonth = startOfDay(add(startMonth, { months: numMonths - 1 }));

	let [selectedDay, setSelectedDay] = useState(today);
	let [currentMonth, setCurrentMonth] = useState(
		format(startMonth, "MMM-yyyy")
	);

	// recalculates days whenever the currentMonth changes
	useEffect(() => {
		let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
		let days = eachDayOfInterval({
			start: firstDayCurrentMonth,
			end: endOfMonth(firstDayCurrentMonth),
		});
		setDays(days);
	}, [currentMonth]);

	const [days, setDays] = useState([]);

	const colStartClasses = [
		"",
		"col-start-2",
		"col-start-3",
		"col-start-4",
		"col-start-5",
		"col-start-6",
		"col-start-7",
	];

	const isPeriodDay = (day) =>
		cyclePhases?.periodDays.some((d) =>
			isEqual(startOfDay(d), startOfDay(day))
		);
	const isFertileDay = (day) =>
		cyclePhases?.fertileDays.some((d) =>
			isEqual(startOfDay(d), startOfDay(day))
		);

	function previousMonth() {
		const currentDate = parse(currentMonth, "MMM-yyyy", new Date());
		const prevDate = sub(currentDate, { months: 1 });

		if (startOfMonth(prevDate) >= startOfMonth(startMonth)) {
			setCurrentMonth(format(prevDate, "MMM-yyyy"));
		}
	}

	function nextMonth() {
		const currentDate = parse(currentMonth, "MMM-yyyy", new Date());
		const nextDate = add(currentDate, { months: 1 });

		if (
			differenceInMonths(startOfMonth(nextDate), startOfMonth(startMonth)) <
			numMonths
		) {
			setCurrentMonth(format(nextDate, "MMM-yyyy"));
		}
	}

	return (
		<div className="p-4 rounded-md">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center relative">
					<div className="relative group">
						<img src={bulb} className="cursor-pointer w-9" alt="info bulb" />
						<div className="absolute left-12 top-1/2 transform -translate-y-1/2 hidden group-hover:block mt-2 p-4 bg-gray-100 rounded-lg shadow-lg w-52 z-50">
							<h3 className="text-lg font-semibold text-gray-900">
								Calendar Legend
							</h3>
							<ul className="mt-2 space-y-2">
								<li className="flex items-center">
									<div className="w-4 h-4 bg-red-500 rounded-full"></div>
									<span className="ml-2 text-gray-700">Period Days</span>
								</li>
								<li className="flex items-center">
									<div className="w-4 h-4 bg-green-500 rounded-full"></div>
									<span className="ml-2 text-gray-700">Fertile Days</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<h2 className="font-semibold text-gray-900">
					{format(parse(currentMonth, "MMM-yyyy", new Date()), "MMMM yyyy")}
				</h2>
				<div className="flex items-center">
					<button
						type="button"
						onClick={previousMonth}
						className="p-1 text-gray-400 hover:text-gray-500"
						disabled={
							startOfMonth(parse(currentMonth, "MMM-yyyy", new Date())) <=
							startOfMonth(startMonth)
						}
					>
						{startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) <=
						startOfDay(startMonth) ? (
							<ChevronLeftIcon
								className="w-5 h-5 text-gray-200 cursor-default"
								aria-hidden="true"
							/>
						) : (
							<ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
						)}
					</button>

					<button
						type="button"
						onClick={nextMonth}
						className={classNames(
							"p-1",
							startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) >=
								endMonth
								? "text-gray-200 cursor-default"
								: "text-gray-400 hover:text-gray-500"
						)}
						disabled={
							differenceInMonths(
								parse(currentMonth, "MMM-yyyy", new Date()),
								startMonth
							) >=
							numMonths - 1
						}
					>
						<ChevronRightIcon
							className={classNames(
								"w-5 h-5",
								startOfDay(parse(currentMonth, "MMM-yyyy", new Date())) >=
									endMonth
									? "text-gray-200"
									: "text-gray-400"
							)}
							aria-hidden="true"
						/>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-7 mt-4 text-xs leading-6 text-center text-gray-500">
				<div>S</div>
				<div>M</div>
				<div>T</div>
				<div>W</div>
				<div>T</div>
				<div>F</div>
				<div>S</div>
			</div>

			<div className="grid grid-cols-7 mt-2 text-sm">
				{days.map((day, dayIdx) => (
					<div
						key={day.toString()}
						className={classNames(
							dayIdx === 0 && colStartClasses[getDay(day)],
							"py-1.5"
						)}
					>
						<button
							type="button"
							onClick={() => {
								setSelectedDay(day);
								onDateSelect?.(day);
							}}
							className={classNames(
								isEqual(day, selectedDay) && "text-white",
								isPeriodDay(day)
									? "bg-red-500 text-white font-bold"
									: isFertileDay(day)
									? "bg-green-500 text-white font-bold"
									: "",
								isToday(day) &&
									!isPeriodDay(day) &&
									!isFertileDay(day) &&
									"text-blue-600 font-extrabold text-xl",
								!isToday(day) &&
									!isEqual(day, selectedDay) &&
									isSameMonth(
										day,
										parse(currentMonth, "MMM-yyyy", new Date())
									) &&
									"text-gray-900",
								!isSameMonth(
									day,
									parse(currentMonth, "MMM-yyyy", new Date())
								) && "text-gray-400",
								isEqual(day, selectedDay) && "bg-gray-900",
								"mx-auto flex h-8 w-8 items-center justify-center rounded-full"
							)}
						>
							<time dateTime={format(day, "yyyy-MM-dd")}>
								{format(day, "d")}
							</time>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
