"use client";

import { Button } from "@/app/_components/button";
import { UserForm } from "@/app/admin-dashboard/users/user-form";
import { UsersColumns } from "@/app/admin-dashboard/users/users-columns";
import { UsersList } from "@/app/admin-dashboard/users/users-list";
import { usersProps } from "@/app/types/data-types";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function UserManagement({ users }: { users: usersProps[] }) {
	const [showForm, setShowForm] = useState(false);

	const handleCancel = () => {
		setShowForm((prevState) => !prevState);
	};

	return (
		<div>
			<div className="p-6">
				<table className="w-full text-sm text-left text-gray-500">
					<UsersColumns />
					<UsersList users={users} />
				</table>
			</div>
			{!showForm && (
				<Button onClick={() => setShowForm(!showForm)}>
					<FaUserPlus size={16} />
					<span>Add New User</span>
				</Button>
			)}
			{showForm && <UserForm onCancel={handleCancel} />}
		</div>
	);
}
