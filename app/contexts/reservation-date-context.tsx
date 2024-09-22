"use client";

import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";

interface ReservationContextType {
	startDate: Date;
	endDate: Date | null;
	setStartDate: (date: Date) => void;
	setEndDate: (date: Date | null) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
	undefined,
);

export const useReservation = () => {
	const context = useContext(ReservationContext);
	if (!context) {
		throw new Error("useReservation must be used within a ReservationProvider");
	}
	return context;
};

interface ReservationProviderProps {
	children: ReactNode;
}

export const ReservationProvider: React.FC<ReservationProviderProps> = ({
	children,
}) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState<Date | null>(null);

	useEffect(() => {
		setEndDate(new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000));
	}, [startDate]);

	return (
		<ReservationContext.Provider
			value={{ startDate, endDate, setStartDate, setEndDate }}
		>
			{children}
		</ReservationContext.Provider>
	);
};
