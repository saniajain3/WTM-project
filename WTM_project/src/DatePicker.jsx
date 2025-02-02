import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function CustomDatePicker() {
	const [value, setValue] = useState(dayjs());

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				value={value}
				onChange={(newValue) => setValue(newValue)}
				slotProps={{
					textField: {
						className:
							"w-3/5 md:w-4/6 xl:w-3/5 font-inter text-gray-800 bg-white rounded-lg",
					},
				}}
				sx={{
					"& .MuiInputBase-input": {
						fontFamily: "'Inter', sans-serif",
						fontWeight: "500",
						fontSize: "18px",
						color: "#111827",
					},
					"& .MuiOutlinedInput-root.Mui-focused": {
						borderColor: "#e5e7eb",
						boxShadow: "none",
					},
					"& .MuiOutlinedInput-root": {
						fontFamily: "'Inter', sans-serif",
						borderRadius: "8px",
						borderColor: "#e5e7eb",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "#e5e7eb",
					},
					"& .MuiSvgIcon-root": {
						color: "#6b7280",
					},
				}}
			/>
		</LocalizationProvider>
	);
}
