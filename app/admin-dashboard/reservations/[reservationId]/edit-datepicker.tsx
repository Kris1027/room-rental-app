"use client";

import React, { useState, useEffect } from "react";
import { useReservation } from "@/app/contexts/reservation-date-context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function EditDatePicker({
	startDate: initialStartDate,
	endDate: initialEndDate,
}: {
	startDate: string | Date;
	endDate: string | Date;
}) {
	const { setStartDate, setEndDate } = useReservation();
	const [localStartDate, setLocalStartDate] = useState<Date | null>(null);
	const [localEndDate, setLocalEndDate] = useState<Date | null>(null);

	useEffect(() => {
		const parseDate = (dateString: string | Date): Date | null => {
			if (dateString instanceof Date) return dateString;
			const parsed = new Date(dateString);
			return isNaN(parsed.getTime()) ? null : parsed;
		};

		setLocalStartDate(parseDate(initialStartDate));
		setLocalEndDate(parseDate(initialEndDate));
	}, [initialStartDate, initialEndDate]);

	const handleStartDateChange = (date: Date | null) => {
		if (date) {
			setLocalStartDate(date);
			setStartDate(date);
			const minEndDate = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
			if (!localEndDate || localEndDate < minEndDate) {
				setLocalEndDate(minEndDate);
				setEndDate(minEndDate);
			}
		}
	};

	const handleEndDateChange = (date: Date | null) => {
		if (date) {
			setLocalEndDate(date);
			setEndDate(date);
		}
	};

	const getMinEndDate = (): Date => {
		return localStartDate
			? new Date(localStartDate.getTime() + 2 * 24 * 60 * 60 * 1000)
			: new Date();
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
					selected={localStartDate}
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
					selected={localEndDate}
					onChange={handleEndDateChange}
					minDate={getMinEndDate()}
					name="end_date"
					id="end_date"
				/>
			</div>
		</>
	);
}
