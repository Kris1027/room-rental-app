import { RoomDetails } from "@/app/admin-dashboard/rooms/room-details";
import { type roomsProps } from "@/app/types/data-types";

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
	return (
		<tbody>
			{rooms && rooms.map((room) => <RoomDetails key={room.id} room={room} />)}
		</tbody>
	);
}
