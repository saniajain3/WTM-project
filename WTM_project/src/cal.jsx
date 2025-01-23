// import React, { useState } from "react";

// const Calendar = () => {
// 	const [currentDate, setCurrentDate] = useState(new Date());

// 	// Get current month and year
// 	const currentMonth = currentDate.getMonth();
// 	const currentYear = currentDate.getFullYear();

// 	// Days of the week array
// 	const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// 	// Function to get the number of days in the current month
// 	const getDaysInMonth = (month, year) => {
// 		return new Date(year, month + 1, 0).getDate();
// 	};

// 	// Get first day of the month (Sunday-Saturday)
// 	const getFirstDayOfMonth = (month, year) => {
// 		return new Date(year, month, 1).getDay();
// 	};

// 	// Generate an array of all the days in the month
// 	const generateCalendarDays = () => {
// 		const daysInMonth = getDaysInMonth(currentMonth, currentYear);
// 		const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
// 		let daysArray = [];

// 		// Add empty spaces for the days before the first day of the month
// 		for (let i = 0; i < firstDay; i++) {
// 			daysArray.push(null);
// 		}

// 		// Add the days of the month
// 		for (let i = 1; i <= daysInMonth; i++) {
// 			daysArray.push(i);
// 		}

// 		return daysArray;
// 	};

// 	const handlePrevMonth = () => {
// 		setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
// 	};

// 	const handleNextMonth = () => {
// 		setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
// 	};

// 	const calendarDays = generateCalendarDays();

// 	return (
// 		<div className="w-4/5 max-w-md mx-auto p-4 border bg-[#ffffe8] border-gray-300 rounded-lg shadow-lg">
// 			<div className="flex items-center justify-between mb-4">
// 				<button
// 					className="text-xl font-bold text-gray-700"
// 					onClick={handlePrevMonth}
// 				>
// 					&lt;
// 				</button>
// 				<h2 className="text-xl font-bold text-gray-800">
// 					{currentDate.toLocaleString("default", { month: "long" })}{" "}
// 					{currentYear}
// 				</h2>
// 				<button
// 					className="text-xl font-bold text-gray-700"
// 					onClick={handleNextMonth}
// 				>
// 					&gt;
// 				</button>
// 			</div>

// 			<div className="grid grid-cols-7 gap-1 text-center">
// 				{weekdays.map((day, index) => (
// 					<div key={index} className="font-semibold text-gray-600">
// 						{day}
// 					</div>
// 				))}
// 				{calendarDays.map((day, index) => (
// 					<div
// 						key={index}
// 						className={`${
// 							day ? "text-gray-800" : "text-transparent"
// 						} p-2 rounded-md cursor-pointer hover:bg-[#fee7b1]`}
// 					>
// 						{day}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Calendar;