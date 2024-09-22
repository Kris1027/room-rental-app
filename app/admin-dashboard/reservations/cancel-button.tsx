import { Button } from "@/app/_components/button";
import { Link } from "next-view-transitions";
import { MdCancel } from "react-icons/md";

export function CancelButton() {
	return (
		<Button variant="danger">
			<Link
				href={"/admin-dashboard/reservations"}
				className="flex items-center gap-1"
			>
				<MdCancel />
				Cancel
			</Link>
		</Button>
	);
}
