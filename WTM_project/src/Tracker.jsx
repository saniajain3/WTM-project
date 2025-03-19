import { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Questions from "./Questions";
import Results from "./Results";
import PeriodCalendar from "./PeriodCalendar";
import Tips from "./Tips";
import flower from "/images/flower1.jpeg";
import tulips from "/images/tulips.jpeg";
import { add } from "date-fns";

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

	// First dropdown: period length
	const [isLengthDropdownOpen, setIsLengthDropdownOpen] = useState(false);
	const [selectedLength, setSelectedLength] = useState("5");
	const lengthDropdownRef = useRef(null);
	const lengthOptions = Array.from({ length: 10 }, (_, i) =>
		(i + 1).toString()
	);

	// Second dropdown: cycle length
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

		// the next period
		let currentStart = new Date(startDate);
		currentStart.setDate(currentStart.getDate() + cycleLength);

		const allPeriodDays = [];
		const allFertileDays = [];
		let firstNextPeriod = null;

		for (let n = 0; n < numMonths; n++) {
			// period days
			const periodDays = Array.from({ length: periodLength }, (_, i) => {
				const date = new Date(currentStart);
				date.setDate(currentStart.getDate() + i);
				return date;
			});

			//  fertile window (ovulation ± 2 days)
			const ovulationDay = new Date(currentStart);
			ovulationDay.setDate(currentStart.getDate() + 14);
			const fertileDays = Array.from({ length: 5 }, (_, i) => {
				const date = new Date(ovulationDay);
				date.setDate(ovulationDay.getDate() - 2 + i);
				return date;
			});

			allPeriodDays.push(...periodDays);
			allFertileDays.push(...fertileDays);

			// first predicted period
			if (n === 0) {
				firstNextPeriod = periodDays[0];
				setNextPeriodStart(periodDays[0]);
				setNextPeriodEndDate(periodDays[periodLength - 1]);
			}

			// next cycle
			currentStart = add(currentStart, { days: cycleLength });
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
		if (monthsRef.current && !monthsRef.current.contains(event.target)) {
			setIsMonthsDropdownOpen(false);
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

	// fourth Dropdown: how many months
	const [isMonthsDropdownOpen, setIsMonthsDropdownOpen] = useState(false);
	const [selectedNumMonths, setSelectedNumMonths] = useState("1");
	const monthsRef = useRef(null);
	const monthOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

	return (
		<div className="min-h-screen px-4 sm:px-8 md:px-16 xl:px-40 2xl:px-64">
			<div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8">
				{/* questions section */}
				<div
					className={`lg:col-span-1  md:col-span-2 ${
						!isCalculated
							? "lg:col-span-3 max-w-screen-lg mx-auto"
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

				{/* results section */}
				{isCalculated && (
					<SectionWrapper bgImage={flower}>
						{/* <div className="bg-[#ffeef9] shadow-md"> */}
						<Results
							cyclePhases={cyclePhases}
							nextPeriodStart={nextPeriodStart}
							nextPeriodEndDate={nextPeriodEndDate}
						/>

						{/* </div> */}
					</SectionWrapper>
				)}

				{/* calendar section */}
				{isCalculated && (
					<div className="lg:col-span-1 md:col-span-1 lg:max-w-screen-sm mx-auto lg:mx-0 h-full flex">
						<SectionWrapper bgImage={tulips}>
							<PeriodCalendar
								cyclePhases={cyclePhases}
								nextPeriodStart={nextPeriodStart}
								isCalculated={isCalculated}
								selectedNumMonths={selectedNumMonths}
							/>
						</SectionWrapper>
					</div>
				)}

				{/* tips section */}
			</div>
			<div className="bg-[#ffccd5] lg:col-span-3 max-w-screen-lg mx-auto w-3/5 md:px-8 sm:px-8 lg:px-4  shadow-md rounded-lg py-5 my-9">
				<Tips />
			</div>
		</div>
	);
};

export default Tracker;
