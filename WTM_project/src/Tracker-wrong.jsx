import Calendar from "./Calendar";
import { useState, useRef, useEffect } from "react";
import { MdInfoOutline } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Tracker = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const lengthDropdownRef = useRef(null);
	// const cycleDropdownRef = useRef(null);

	const lengthOptions = Array.from({ length: 10 }, (_, i) =>
		(i + 1).toString()
	);
	const defaultLengthOption = lengthOptions[4];

	const handleClickOutside = (e) => {
		if (
			lengthDropdownRef.current &&
			!lengthDropdownRef.current.contains(e.target)
		) {
			setIsDropdownOpen(false); // Close the dropdown
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// const toggleDropdown = () => {
	// 	setIsDropdownOpen((prev) => !prev); // Toggle dropdown
	// };

	const options = Array.from({ length: 45 - 21 + 1 }, (_, i) =>
		(21 + i).toString()
	);
	const defaultCycleOption = options[0];

	return (
		<div className="pl-20 pr-20 ml-10 mr-10 py-5 flex">
			<div className="bg-[#ffeef9] shadow-md w-full px-10 py-10 text-gray-900 text-xl font-bold font-10">
				<h1 className="font-modelica font-bold text-blue-900 tracking-wide text-3xl text-center">
					Period Tracker
				</h1>

				<p className="pt-4 font-modelica font-normal text-lg">
					Periods normally arrive once a month (every 28-30 days). But for many
					women, it isn’t an exact science. Predicting the precise date and
					length of your next period is sometimes tricky. That's where our
					period due date calculator comes in.
				</p>

				{/* Ques-1 */}
				<div className="p-4 flex flex-col hover:text-blue-900 transition duration-300">
					<div className="flex items-center">
						<MdInfoOutline style={{ fontSize: "24px" }} />
						<p className="px-2 font-modelica font-normal text-lg">
							When did your last period start?
						</p>
					</div>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						className="shadow ml-9 w-1/3 border rounded-md p-2 font-normal font-inter text-md text-gray-700"
					/>
				</div>

				{/* Ques-2 */}
				<div className="p-4 flex flex-col hover:text-blue-900 transition duration-300">
					<div className="flex items-center">
						<MdInfoOutline style={{ fontSize: "24px" }} />
						<p className="px-2 font-modelica font-normal text-lg">
							How long does your period usually last?
						</p>
					</div>
					<div ref={lengthDropdownRef}>
						<Dropdown
							options={lengthOptions}
							value={defaultLengthOption}
							controlClassName="shadow ml-9 border w-1/3 rounded-md font-normal font-inter text-md text-gray-700"
							menuClassName={
								isDropdownOpen ? "dropdown-menu-open" : "dropdown-menu-closed"
							}
							onFocus={toggleDropdown} // Open dropdown on focus
							onBlur={() => setIsDropdownOpen(false)} // Close dropdown on blur
						/>
					</div>
				</div>

				{/* Ques-3 */}
				<div className="p-4 flex flex-col hover:text-blue-900 transition duration-300">
					<div className="flex items-center">
						<MdInfoOutline style={{ fontSize: "24px" }} />
						<p className="px-2 font-modelica font-normal text-lg">
							How long is your cycle?
						</p>
					</div>
					<div>
						<Dropdown
							options={options}
							value={defaultCycleOption}
							controlClassName="shadow ml-9 border w-1/3 rounded-md font-normal font-inter text-md text-gray-700"
							// onFocus={() => setIsDropdownOpen(true)} // Open dropdown on focus
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tracker;
