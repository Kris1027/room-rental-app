import { supabase } from "@/app/_lib/supabase";

export async function getRooms() {
	const { data: rooms, error } = await supabase.from("rooms").select("*");

	if (error) {
		console.error("Error fetching rooms:", error);
		return null;
	}

	return rooms;
}

export async function getRoom(roomId: number) {
	const { data: room, error } = await supabase
		.from("rooms")
		.select("*")
		.eq("id", roomId)
		.single();

	if (error) {
		console.error("Error fetching room:", error);
		return null;
	}

	return room;
}

export async function getRoomByName(roomName: string) {
	const { data: room, error } = await supabase
		.from("rooms")
		.select("*")
		.eq("name", roomName)
		.single();

	if (error) {
		console.error("Error fetching room:", error);
		return null;
	}

	return room;
}

export async function createRoom(newRoom: {
	image_url: string;
	name: string;
	description: string;
	regular_price: number;
	max_capacity: number;
	discount: number;
}) {
	{
		const { data, error } = await supabase.from("rooms").insert([newRoom]);

		if (error) {
			console.error(error);
			throw new Error("Room could not be created");
		}

		return data;
	}
}
