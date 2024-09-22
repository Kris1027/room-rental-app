import { BackButton } from "@/app/_components/back-button";
import { Button } from "@/app/_components/button";
import { updateUserAction } from "@/app/_lib/actions/users-action";
import { getUserById } from "@/app/_lib/users-api";
import { usersProps } from "@/app/types/data-types";
import { auth } from "@/auth";
import { Link } from "next-view-transitions";
import { FiMail, FiSave, FiUser } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";

export default async function Settings() {
	const session = await auth();
	const userId = session?.user.userId;

	const user = (await getUserById(Number(userId))) as usersProps;

	if (user.is_admin)
		return (
			<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
				<h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
					You are admin, you can change your settings in admin panel
				</h2>
				<div className="flex gap-4 justify-center">
					<BackButton />
					<Button size="medium" variant="success">
						<Link href="/admin-dashboard" className="flex items-center gap-1">
							<RiAdminLine size={24} />
							<span>Admin Dashboard</span>
						</Link>
					</Button>
				</div>
			</main>
		);

	const userFullName = user.full_name;
	const userEmail = user.email;

	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
			<BackButton />
			<h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
				Account Settings
			</h2>
			<form action={updateUserAction} className="space-y-6 pb-4">
				<input
					type="text"
					name="id"
					id="id"
					defaultValue={userId}
					readOnly
					hidden
				/>
				<div>
					<label
						htmlFor="full_name"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Full Name
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<FiUser size={24} className="text-gray-400" />
						</div>
						<input
							type="text"
							name="full_name"
							id="full_name"
							defaultValue={userFullName}
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Email
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<FiMail size={24} className="text-gray-400" />
						</div>
						<input
							type="email"
							name="email"
							id="email"
							defaultValue={userEmail}
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
					</div>
				</div>
				<Button type="submit" fullWidth>
					<FiSave size={24} className="mr-2" />
					Save Changes
				</Button>
			</form>
		</main>
	);
}
