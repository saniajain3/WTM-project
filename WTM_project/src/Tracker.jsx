import { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Questions from "./Questions";
import Results from "./Results";
import PeriodCalendar from "./PeriodCalendar";

// wrapper for background and blur
const SectionWrapper = ({ bgImage, children }) => (
	<div
		className="relative flex flex-col bg-white shadow-md w-fit py-8 px-5 rounded-lg"
		style={{ position: "relative" }}
	>
		<div
			className="absolute inset-0 bg-cover bg-center z-0 rounded-xl"
			style={{
				backgroundImage: `url('${bgImage}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		></div>
		<div className="absolute inset-0 backdrop-blur-[2px] bg-white/40 z-0 rounded-lg"></div>
		<div className="relative z-10">{children}</div>
	</div>
);
const Tracker = () => {
	const [startDate, setStartDate] = useState(new Date());

	// First Dropdown: Period Length
	const [isLengthDropdownOpen, setIsLengthDropdownOpen] = useState(false);
	const [selectedLength, setSelectedLength] = useState("5");
	const lengthDropdownRef = useRef(null);
	const lengthOptions = Array.from({ length: 10 }, (_, i) =>
		(i + 1).toString()
	);

	// Second Dropdown: Cycle Length
	const [isCycleDropdownOpen, setIsCycleDropdownOpen] = useState(false);
	const [selectedCycle, setSelectedCycle] = useState("21");
	const cycleDropdownRef = useRef(null);
	const cycleOptions = Array.from({ length: 25 }, (_, i) =>
		(21 + i).toString()
	);

	const [nextPeriodStart, setNextPeriodStart] = useState(null);
	const [nextPeriodEndDate, setNextPeriodEndDate] = useState(null);

	const [isCalculated, setIsCalculated] = useState(false);

	const [cyclePhases, setCyclePhases] = useState({
		periodDays: [], // for period days
		fertileDays: [], //for fertile window
	});

	const calculateDates = () => {
		const periodLength = parseInt(selectedLength, 10);
		const cycleLength = parseInt(selectedCycle, 10);
		const numMonths = parseInt(selectedNumMonths, 10);

		let currentStart = new Date(startDate);
		const allPeriodDays = [];
		const allFertileDays = [];

		for (let n = 0; n < numMonths; n++) {
			// calculate period days for current cycle
			const periodDays = [];
			for (let i = 0; i < periodLength; i++) {
				const date = new Date(currentStart);
				date.setDate(currentStart.getDate() + i);
				periodDays.push(date);
			}
			allPeriodDays.push(...periodDays);

			const fertileStart = new Date(currentStart);
			fertileStart.setDate(currentStart.getDate() + 14); //adjust ovulation
			const fertileDays = [];
			for (let j = -2; j <= 2; j++) {
				// Calculate fertile days for the curren cyle
				const date = new Date(fertileStart);
				date.setDate(fertileStart.getDate() + j);
				fertileDays.push(date);
			}
			allFertileDays.push(...fertileDays);

			// Move to the next cycle
			currentStart.setDate(currentStart.getDate() + cycleLength);

			// Update the next period start and end date for the first cycle

			if (n === 0) {
				setNextPeriodStart(periodDays[0]);
				const nextEnd = new Date(periodDays[0]);
				nextEnd.setDate(periodDays[0].getDate() + periodLength - 1);
				setNextPeriodEndDate(nextEnd);
			}
		}

		setCyclePhases({ periodDays: allPeriodDays, fertileDays: allFertileDays });

		setIsCalculated(true);
	};

	const handleClickOutside = (event) => {
		if (
			lengthDropdownRef.current &&
			!lengthDropdownRef.current.contains(event.target)
		) {
			setIsLengthDropdownOpen(false);
		}
		if (
			cycleDropdownRef.current &&
			!cycleDropdownRef.current.contains(event.target)
		) {
			setIsCycleDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleResetValues = () => {
		setIsCalculated(false);
		setStartDate(new Date());
		setSelectedLength("5");
		setSelectedCycle("21");
	};

	// fourth Dropdown: Period length
	const [isMonthsDropdownOpen, setIsMonthsDropdownOpen] = useState(false);
	const [selectedNumMonths, setSelectedNumMonths] = useState("1");
	const monthsRef = useRef(null);
	const monthOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

	return (
		<div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 2xl:px-64">
			<div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8">
				{/* questions section */}
				<div
					className={`lg:col-span-1 ${
						!isCalculated
							? "flex justify-center items-center lg:col-span-3 lg:w-3/5  h-screen"
							: "lg:col-span-1 "
					}`}
				>
					<Questions
						startDate={startDate}
						setStartDate={setStartDate}
						lengthDropdownRef={lengthDropdownRef}
						cycleDropdownRef={cycleDropdownRef}
						isLengthDropdownOpen={isLengthDropdownOpen}
						setIsLengthDropdownOpen={setIsLengthDropdownOpen}
						isCycleDropdownOpen={isCycleDropdownOpen}
						setIsCycleDropdownOpen={setIsCycleDropdownOpen}
						selectedLength={selectedLength}
						selectedCycle={selectedCycle}
						setSelectedCycle={setSelectedCycle}
						setSelectedLength={setSelectedLength}
						cycleOptions={cycleOptions}
						lengthOptions={lengthOptions}
						monthOptions={monthOptions}
						monthsRef={monthsRef}
						setIsMonthsDropdownOpen={setIsMonthsDropdownOpen}
						isMonthsDropdownOpen={isMonthsDropdownOpen}
						setSelectedNumMonths={setSelectedNumMonths}
						calculateDates={calculateDates}
						handleResetValues={handleResetValues}
						selectedNumMonths={selectedNumMonths}
					/>
				</div>

				{/* results Section */}
				{isCalculated && (
					<SectionWrapper bgImage="cherry.jpeg">
						<Results
							cyclePhases={cyclePhases}
							nextPeriodStart={nextPeriodStart}
							nextPeriodEndDate={nextPeriodEndDate}
						/>
					</SectionWrapper>
				)}

				{/* Calendar Section */}
				{isCalculated && (
					<div className="flex">
						<SectionWrapper bgImage="tulips.jpeg">
							<PeriodCalendar
								cyclePhases={cyclePhases}
								nextPeriodStart={nextPeriodStart}
								isCalculated={isCalculated}
								selectedNumMonths={selectedNumMonths}
							/>
						</SectionWrapper>
					</div>
				)}

				{/* tips Section */}
			</div>
			<Tips />
		</div>
	);
};

export default Tracker;

//bg-gradient-to-r from-pink-100 to-purple-100
