"use client";

import { useReservation } from "@/app/contexts/reservation-date-context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function ReservationDatePicker() {
	const { startDate, endDate, setStartDate, setEndDate } = useReservation();

	const handleStartDateChange = (date: Date | null) => {
		if (date) {
			setStartDate(date);
			const minEndDate = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
			if (!endDate || endDate < minEndDate) {
				setEndDate(minEndDate);
			}
		}
	};

	const getMinEndDate = () => {
		return new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000);
	};

	return (
		<>
			<div className="flex flex-col">
				<label
					htmlFor="start_date"
					className="text-sm font-medium text-gray-700"
				>
					Start date
				</label>
				<DatePicker
					className="w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer"
					selected={startDate}
					onChange={handleStartDateChange}
					minDate={new Date()}
					name="start_date"
					id="start_date"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="end_date" className="text-sm font-medium text-gray-700">
					End date
				</label>
				<DatePicker
					className="w-full px-3 my-1 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer"
					selected={endDate}
					onChange={(date) => date && setEndDate(date)}
					minDate={getMinEndDate()}
					name="end_date"
					id="end_date"
				/>
			</div>
		</>
	);
}
