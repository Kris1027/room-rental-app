import { BackButton } from "@/app/_components/back-button";
import { getReservationsByUserId } from "@/app/_lib/reservations-api";
import { ReservationCard } from "@/app/account/reservations/reservation-card";
import { ReservationsNotFound } from "@/app/account/reservations/reservations-not-found";
import { UserMessage } from "@/app/account/reservations/user-message";
import type { reservationsProps } from "@/app/types/data-types";
import { auth } from "@/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reservations",
};

export default async function UserReservations() {
	const session = await auth();
	const userId = session?.user?.userId;
	const userEmail = session?.user?.email;

	const reservations = (await getReservationsByUserId(
		Number(userId),
	)) as reservationsProps[];

	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
			<BackButton />
			<h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
				Your Reservations
			</h2>
			{reservations.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{reservations.map((reservation) => (
						<ReservationCard key={reservation.id} reservation={reservation} />
					))}
				</div>
			) : (
				<div className="flex justify-center items-center">
					<ReservationsNotFound />
				</div>
			)}
			<div className="mt-12">
				<UserMessage userId={Number(userId)} userEmail={String(userEmail)} />
			</div>
		</main>
	);
}
