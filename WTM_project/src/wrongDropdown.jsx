{
	/* Q2 */
}
{
	/* <div className="p-4">
					<div className="flex items-center ">
						<MdInfoOutline className="text-xl" />
						<p className="ml-2 font-normal text-lg">
							How long does your period usually last?
						</p>
					</div>
					<div
						ref={lengthDropdownRef}
						className="relative flex justify-center md:flex-none md:justify-normal mt-2"
					>
						<button
							onClick={() => setIsLengthDropdownOpen(!isLengthDropdownOpen)}
							className="shadow w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
						>
							{selectedLength}
							{isLengthDropdownOpen ? (
								<MdKeyboardArrowUp />
							) : (
								<MdKeyboardArrowDown />
							)}
						</button>
						{isLengthDropdownOpen && (
							<ul className="absolute z-10 mt-11 w-1/2 md:w-1/3 lg:w-1/3 bg-white border shadow rounded-md max-h-40 overflow-y-auto">
								{lengthOptions.map((option) => (
									<li
										key={option}
										onClick={() => {
											setSelectedLength(option);
											setIsLengthDropdownOpen(false);
										}}
										className="p-2 hover:bg-gray-200 cursor-pointer"
									>
										{option}
									</li>
								))}
							</ul>
						)}
					</div>
				</div> */
}

{
	/* Q4 */
}
<div className="p-4">
	<div className="flex items-center">
		<MdInfoOutline className="text-xl" />
		<p className="ml-2 font-normal text-lg">Number of months to calculate</p>
	</div>
	<div
		ref={monthsRef}
		className="relative flex justify-center md:flex-none md:justify-normal mt-2"
	>
		<button
			onClick={() => setIsMonthsDropdownOpen(!isMonthsDropdownOpen)}
			className="shadow w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
		>
			{selectedNumMonths}
			{isMonthsDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
		</button>
		{isMonthsDropdownOpen && (
			<ul className="absolute z-10 mt-11 w-1/2 md:w-1/3 lg:w-1/3 bg-white border shadow rounded-md max-h-40 overflow-y-auto">
				{monthOptions.map((option) => (
					<li
						key={option}
						onClick={() => {
							setSelectedNumMonths(option);
							setIsMonthsDropdownOpen(false);
						}}
						className="p-2 hover:bg-gray-200 cursor-pointer"
					>
						{option}
					</li>
				))}
			</ul>
		)}
	</div>
</div>;
{
	/* <div className="p-4">
					<div className="flex items-center">
						<MdInfoOutline className="text-xl" />
						<p className="ml-2 font-normal text-lg">
							When did your last period start?
						</p>
					</div>
					<div className="flex justify-center md:flex-none md:justify-normal">
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className="shadow w-4/5 lg:w-2/3 mt-2 border rounded-md p-2 text-gray-700"
						/>
					</div>
				</div> */
}
