import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
};

export default function Terms() {
	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
			<h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
				<p className="mb-4">
					By accessing or using the Room Rental App, you agree to be bound by
					these Terms of Service and all applicable laws and regulations. If you
					do not agree with any part of these terms, you may not use our
					service.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
				<p className="mb-4">
					You agree to use the Room Rental App only for purposes that are legal,
					proper, and in accordance with these Terms and any applicable laws or
					regulations.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
				<p className="mb-4">
					To use certain features of the Room Rental App, you may be required to
					create an account. You are responsible for maintaining the
					confidentiality of your account and password.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">4. Content</h2>
				<p className="mb-4">
					Users are solely responsible for the content they post on the Room
					Rental App. We reserve the right to remove any content that violates
					these Terms or is otherwise objectionable.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					5. Limitation of Liability
				</h2>
				<p className="mb-4">
					The Room Rental App and its affiliates will not be liable for any
					indirect, incidental, special, consequential or punitive damages
					resulting from your use of the service.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
				<p className="mb-4">
					We reserve the right to modify these Terms at any time. We will always
					post the most current version on our website. Your continued use of
					the Room Rental App after changes constitutes your acceptance of the
					new Terms.
				</p>
			</section>

			<p className="text-sm text-gray-600 mt-8">
				Last updated: August 24, 2024
			</p>
		</main>
	);
}
