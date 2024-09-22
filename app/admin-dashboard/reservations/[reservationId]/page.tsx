import { Button } from "@/app/_components/button";
import { adminUpdateReservationAction } from "@/app/_lib/actions/reservations-action";
import { getReservation } from "@/app/_lib/reservations-api";
import { EditDatePicker } from "@/app/admin-dashboard/reservations/[reservationId]/edit-datepicker";
import { CancelButton } from "@/app/admin-dashboard/reservations/cancel-button";
import { type reservationsProps } from "@/app/types/data-types";
import { GrUpdate } from "react-icons/gr";

export default async function ReservationUpdateForm(params: {
	params: { reservationId: number };
}) {
	const id = params.params.reservationId;
	const reservation: reservationsProps = await getReservation(id);

	return (
		<form
			action={adminUpdateReservationAction}
			className="m-4 p-4 bg-gray-100 rounded-lg shadow"
		>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col">
					<label
						htmlFor="id"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						ID
					</label>
					<input
						type="number"
						name="id"
						id="id"
						className="px-3 py-2 border rounded-md bg-gray-100 outline-none"
						defaultValue={reservation.id}
						readOnly
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="created_at"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Created at
					</label>
					<input
						type="text"
						name="created_at"
						id="created_at"
						className="px-3 py-2 border rounded-md bg-gray-100 outline-none"
						readOnly
						defaultValue={reservation.created_at}
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="user_id"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						User ID
					</label>
					<input
						type="number"
						name="user_id"
						id="user_id"
						className="px-3 py-2 border rounded-md bg-gray-100 outline-none"
						defaultValue={reservation.user_id}
						readOnly
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="id"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Room ID
					</label>
					<input
						type="number"
						name="room_id"
						id="room_id"
						className="px-3 py-2 border rounded-md bg-gray-100 outline-none"
						defaultValue={reservation.room_id}
						readOnly
					/>
				</div>
				<EditDatePicker
					startDate={reservation.start_date}
					endDate={reservation.end_date}
				/>
				<div className="flex flex-col">
					<label
						htmlFor="num_nights"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Number of Nights
					</label>
					<input
						type="number"
						name="num_nights"
						id="num_nights"
						className="px-3 py-2 border rounded-md bg-gray-100 outline-none"
						defaultValue={reservation.num_nights}
						readOnly
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="num_guests"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Number of Guests
					</label>
					<input
						type="number"
						name="num_guests"
						id="num_guests"
						className="px-3 py-2 border rounded-md outline-none"
						defaultValue={reservation.num_guests}
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="total_price"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Total Price
					</label>
					<input
						type="number"
						name="total_price"
						id="total_price"
						className="px-3 py-2 border rounded-md bg-gray-100 outline-none"
						defaultValue={reservation.total_price}
						readOnly
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="status"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Status
					</label>
					<select
						name="status"
						id="status"
						className="px-3 py-2 border rounded-md outline-none"
						defaultValue={reservation.status}
					>
						<option value="unconfirmed">unconfirmed</option>
						<option value="confirmed">confirmed</option>
						<option value="canceled">canceled</option>
						<option value="old">old</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="is_paid"
						className="mb-1 text-sm font-medium text-gray-700"
					>
						Paid
					</label>
					<select
						name="is_paid"
						id="is_paid"
						className="px-3 py-2 border rounded-md outline-none"
						defaultValue={reservation.is_paid}
					>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
			</div>
			<div className="mt-4 flex justify-end space-x-2">
				<CancelButton />
				<Button type="submit" variant="success">
					<GrUpdate />
					Update
				</Button>
			</div>
		</form>
	);
}
