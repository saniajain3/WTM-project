import {
	MdInfoOutline,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from "react-icons/md";
import DatePicker from "./DatePicker";
import Buttons from "./Buttons";
import QuestionItem from "./QuestionItem";
import dayjs from "dayjs";

const Questions = ({
	startDate,
	setStartDate,
	lengthDropdownRef,
	cycleDropdownRef,
	isLengthDropdownOpen,
	setIsLengthDropdownOpen,
	isCycleDropdownOpen,
	setIsCycleDropdownOpen,
	selectedLength,
	selectedCycle,
	setSelectedCycle,
	setSelectedLength,
	cycleOptions,
	lengthOptions,
	monthOptions,
	monthsRef,
	setIsMonthsDropdownOpen,
	isMonthsDropdownOpen,
	setSelectedNumMonths,
	calculateDates,
	handleResetValues,
	selectedNumMonths,
}) => {
	return (
		<div className=" bg-[#ffeef9] shadow-md w-full  px-8 py-6 text-gray-900 text-xl font-inter rounded-lg ">
			<h1 className="font-modelica font-bold text-pink-600 text-4xl text-center mb-6">
				Period Tracker
			</h1>

			{/* Questions */}
			<div className="sm:flex sm:flex-col sm:justify-center md:flex-none md:justify-normal">
				{/* Q1 */}
				<QuestionItem
					icon={<MdInfoOutline />}
					question="First day of your last period?"
					content={
						<div className="flex justify-center  md:flex-none md:justify-normal  md:ml-0 lg:ml-0 xl:ml-0">
							<DatePicker
								// selected={startDate}
								value={dayjs(startDate)}
								onChange={(date) => setStartDate(date)}
							/>
						</div>
					}
				/>

				{/* Q2 */}
				<QuestionItem
					icon={<MdInfoOutline />}
					question="How long does it usually last?"
					content={
						<div
							ref={lengthDropdownRef}
							className="relative flex justify-center md:flex-none md:justify-normal mt-2"
						>
							<button
								onClick={() => setIsLengthDropdownOpen(!isLengthDropdownOpen)}
								className="shadow-sm w-1/2 md:w-1/3 lg:w-2/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700 font-medium"
							>
								{selectedLength}
								{isLengthDropdownOpen ? (
									<MdKeyboardArrowUp />
								) : (
									<MdKeyboardArrowDown />
								)}
							</button>
							{isLengthDropdownOpen && (
								<ul className="absolute z-10 mt-11 w-1/2 md:w-1/3 lg:w-1/3 bg-white border shadow-sm rounded-md max-h-40 overflow-y-auto">
									{lengthOptions.map((option) => (
										<li
											key={option}
											onClick={() => {
												setSelectedLength(option);
												setIsLengthDropdownOpen(false);
											}}
											className="font-medium p-2 hover:bg-gray-200 cursor-pointer"
										>
											{option}
										</li>
									))}
								</ul>
							)}
						</div>
					}
				/>

				{/* Q3 */}
				<QuestionItem
					icon={<MdInfoOutline />}
					question="How long is your cycle?"
					content={
						<div
							ref={cycleDropdownRef}
							className="relative flex justify-center md:flex-none md:justify-normal mt-2"
						>
							<button
								onClick={() => setIsCycleDropdownOpen(!isCycleDropdownOpen)}
								className="shadow-sm w-1/2 md:w-1/3 lg:w-2/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700 font-medium "
							>
								{selectedCycle}
								{isCycleDropdownOpen ? (
									<MdKeyboardArrowUp />
								) : (
									<MdKeyboardArrowDown />
								)}
							</button>
							{isCycleDropdownOpen && (
								<ul className="absolute z-10 mt-11 w-1/2 md:w-1/3 lg:w-1/3 bg-white border shadow-sm rounded-md max-h-40 overflow-y-auto">
									{cycleOptions.map((option) => (
										<li
											key={option}
											onClick={() => {
												setSelectedCycle(option);
												setIsCycleDropdownOpen(false);
											}}
											className="font-medium p-2 hover:bg-gray-200 cursor-pointer"
										>
											{option}
										</li>
									))}
								</ul>
							)}
						</div>
					}
				/>

				{/* Q4 */}
				<QuestionItem
					icon={<MdInfoOutline />}
					question="Number of months to calculate?"
					content={
						<div
							ref={monthsRef}
							className="relative flex justify-center md:flex-none md:justify-normal mt-2"
						>
							<button
								onClick={() => setIsMonthsDropdownOpen(!isMonthsDropdownOpen)}
								className="shadow-sm w-1/2 md:w-1/3 lg:w-2/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700 font-medium "
							>
								{selectedNumMonths}
								{isMonthsDropdownOpen ? (
									<MdKeyboardArrowUp />
								) : (
									<MdKeyboardArrowDown />
								)}
							</button>
							{isMonthsDropdownOpen && (
								<ul className="absolute z-10 mt-11 w-1/2 md:w-1/3 lg:w-1/3 bg-white border shadow-sm rounded-md max-h-40 overflow-y-auto">
									{monthOptions.map((option) => (
										<li
											key={option}
											onClick={() => {
												setSelectedNumMonths(option);
												setIsMonthsDropdownOpen(false);
											}}
											className="font-medium p-2 hover:bg-gray-200 cursor-pointer"
										>
											{option}
										</li>
									))}
								</ul>
							)}
						</div>
					}
				/>
			</div>

			<Buttons onCalculate={calculateDates} onReset={handleResetValues} />
		</div>
	);
};
export default Questions;
