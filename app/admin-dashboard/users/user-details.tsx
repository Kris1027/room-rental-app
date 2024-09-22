import { Button } from "@/app/_components/button";
import { formatDateTime } from "@/app/_utils/format-date-time";
import { TrueOrFalse } from "@/app/_utils/true-or-false";
import { DeleteButton } from "@/app/admin-dashboard/users/delete-button";
import { type usersProps } from "@/app/types/data-types";
import { Link } from "next-view-transitions";
import { FaEdit } from "react-icons/fa";

export function UserDetails({ user }: { user: usersProps }) {
	return (
		<tr className="bg-white border-b hover:bg-gray-50 flex flex-col md:table-row">
			{[
				{ label: "ID", value: user.id },
				{
					label: "Created At",
					value: formatDateTime(user.created_at),
				},
				{ label: "Full Name", value: user.full_name },
				{ label: "Email", value: user.email },
				{
					label: "Is Admin",
					value: (
						<span className={TrueOrFalse(user.is_admin)}>
							{user.is_admin ? "Yes" : "No"}
						</span>
					),
				},
				{
					label: "Actions",
					value: (
						<span className="flex gap-1">
							<Button size="small">
								<Link
									href={`/admin-dashboard/users/${user.id}`}
									className="flex items-center gap-1"
								>
									<FaEdit size={16} />
									<span>Edit</span>
								</Link>
							</Button>
							<DeleteButton userId={user.id} />
						</span>
					),
				},
			].map(({ label, value }, index) => (
				<td
					key={label + index}
					className="flex justify-between md:table-cell px-4 py-2"
				>
					<span className="font-bold md:hidden">{label}:</span>
					{value}
				</td>
			))}
		</tr>
	);
}
