import { FaSpinner } from "react-icons/fa";

export default function Loading() {
	return (
		<main className="flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
			<h2 className="text-4xl font-serif text-amber-800 mb-8 text-center">
				Grand Horizon Hotel
			</h2>
			<div className="relative w-24 h-24 mb-8">
				<div className="absolute inset-0 border-4 border-amber-300 rounded-full animate-ping"></div>
				<div
					className="absolute inset-2 border-4 border-amber-500 rounded-full animate-ping"
					style={{ animationDelay: "-0.5s" }}
				></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<FaSpinner className="w-12 h-12 text-amber-700 animate-spin" />
				</div>
			</div>
		</main>
	);
}
