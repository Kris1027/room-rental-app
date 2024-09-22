import { SignInButton } from "@/app/_components/sign-in-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign in",
};

export default function Login() {
	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4 flex flex-col gap-8">
			<h2 className="text-3xl font-semibold text-center">
				Sign in to access your account
			</h2>

			<SignInButton />
		</main>
	);
}
