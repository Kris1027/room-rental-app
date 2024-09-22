import { getRoom } from "@/app/_lib/rooms-api";
import { DetailedRoom } from "@/app/rooms/detailed-room";

export async function generateMetadata({
	params,
}: {
	params: { roomId: number };
}) {
	const room = await getRoom(params.roomId);
	return {
		title: room?.name,
	};
}

export const revalidate = 0;

export default async function Room({ params }: { params: { roomId: number } }) {
	const room = await getRoom(params.roomId);

	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
			<DetailedRoom room={room} />
		</main>
	);
}
