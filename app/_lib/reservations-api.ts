import { supabase } from "@/app/_lib/supabase";

export async function getReservations() {
	const { data: reservations, error } = await supabase
		.from("reservations")
		.select("*");

	if (error) {
		console.error("Error fetching users:", error);
		return null;
	}

	return reservations;
}

export async function createReservation(newReservation: {
	user_id: number;
	room_id: number;
	start_date: string;
	end_date: string;
}) {
	{
		const { data, error } = await supabase
			.from("reservations")
			.insert([newReservation]);

		if (error) {
			console.error(error);
			throw new Error("Reservation could not be created");
		}

		return data;
	}
}

export async function getReservation(id: number) {
	const { data } = await supabase
		.from("reservations")
		.select("*")
		.eq("id", id)
		.single();
	return data;
}

export async function getReservationsByUserId(userId: number) {
	const { data: reservations, error } = await supabase
		.from("reservations")
		.select("*")
		.eq("user_id", userId);

	if (error) {
		console.error("Error fetching users:", error);
		return null;
	}

	return reservations;
}
