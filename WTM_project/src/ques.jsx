<QuestionItem
	icon={<MdInfoOutline />}
	question="How long does your period usually last?"
	content={
		<div
			ref={lengthDropdownRef}
			className="relative flex justify-center md:flex-none md:justify-normal mt-2"
		>
			<button
				onClick={() => setIsLengthDropdownOpen(!isLengthDropdownOpen)}
				className="shadow-sm w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
			>
				{selectedLength}
				{isLengthDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
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
							className="p-2 hover:bg-gray-200 cursor-pointer"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	}
/>;

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
							className="shadow-sm w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
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

// {Q-3}
{
	/* <div className="p-4">
				<div className="flex items-center">
					<MdInfoOutline className="text-xl" />
					<p className="ml-2 font-normal text-lg">How long is your cycle?</p>
				</div>
				<div
					ref={cycleDropdownRef}
					className="relative flex justify-center md:flex-none md:justify-normal mt-2"
				>
					<button
						onClick={() => setIsCycleDropdownOpen(!isCycleDropdownOpen)}
						className="shadow-sm w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
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
				className="shadow-sm w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
			>
				{selectedNumMonths}
				{isMonthsDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
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
							className="p-2 hover:bg-gray-200 cursor-pointer"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	}
/>;

{
	/* Q4 */
}
{
	/* <div className="p-4">
					<div className="flex items-center">
						<MdInfoOutline className="text-xl" />
						<p className="ml-2 font-normal text-lg">
							Number of months to calculate
						</p>
					</div>
					<div
						ref={monthsRef}
						className="relative flex justify-center md:flex-none md:justify-normal mt-2"
					>
						<button
							onClick={() => setIsMonthsDropdownOpen(!isMonthsDropdownOpen)}
							className="shadow-sm w-1/2 md:w-1/3 lg:w-1/3 bg-white border rounded-md p-2 flex justify-between items-center text-gray-700"
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
