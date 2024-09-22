import { RoomsListItem } from "@/app/rooms/rooms-list-item";
import { RoomsNotFound } from "@/app/rooms/rooms-not-found";
import type { roomsProps } from "@/app/types/data-types";

export function RoomsList({ rooms }: { rooms: roomsProps[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{rooms.length > 0 ? (
				rooms.map((room) => <RoomsListItem key={room.id} room={room} />)
			) : (
				<div className="col-span-full flex justify-center items-center">
					<RoomsNotFound />
				</div>
			)}
		</div>
	);
}
