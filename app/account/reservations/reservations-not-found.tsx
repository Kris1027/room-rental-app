import { Button } from "@/app/_components/button";
import { Link } from "next-view-transitions";
import { FaCalendarTimes, FaPlus } from "react-icons/fa";

export function ReservationsNotFound() {
	return (
		<div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg text-center">
			<FaCalendarTimes size={64} className="text-red-500 mb-4" />
			<h3 className="text-2xl font-semibold text-gray-700 mb-2">
				No Reservations Found
			</h3>
			<p className="text-gray-500 mb-6">
				You haven&apos;t made any reservations yet. Why not plan your next
				getaway?
			</p>
			<Button variant="success">
				<Link href="/rooms" className="flex items-center gap-1">
					<FaPlus size={24} className="mr-2" />
					<span>Make a Reservation</span>
				</Link>
			</Button>
		</div>
	);
}
