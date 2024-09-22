import { getUserById } from "@/app/_lib/users-api";
import type { usersProps } from "@/app/types/data-types";
import { auth } from "@/auth";
import { Link } from "next-view-transitions";
import Image from "next/image";

export async function AccountButton() {
	const session = await auth();
	const userId = session?.user.userId;
	const user = (await getUserById(Number(userId))) as usersProps;

	const userName = user?.full_name;
	const userImage = session?.user?.image as string;

	return (
		<>
			{session?.user && (
				<Link href={"/account"}>
					<li className="flex items-center px-3 py-2 rounded-md text-lg font-semibold transition duration-300 gap-1 justify-center text-amber-800 hover:bg-amber-500 hover:text-white">
						<Image
							className="rounded-full"
							src={userImage}
							width={40}
							height={40}
							alt="profile image"
						/>
						<p>{userName}</p>
					</li>
				</Link>
			)}
		</>
	);
}
