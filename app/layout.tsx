import { Footer } from "@/app/_components/footer";
import { TopBar } from "@/app/_components/top-bar";
import type { Metadata } from "next";
import "./globals.css";
import { ReservationProvider } from "./contexts/reservation-date-context";
import { Montserrat } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

const montserrat = Montserrat({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | The Grand Horizon Hotel",
		default: "The Grand Horizon Hotel",
	},
	keywords: "rooms, rental, grand, hotel, horizon, booking",
	description:
		"The Grand Horizon Hotel is a 5-star hotel located in the heart of the city. We offer a range of rooms and suites for guests to enjoy their stay.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" className="h-full">
				<body
					className={`${montserrat.className} bg-gradient-to-r from-blue-100 to-amber-300 flex flex-col min-h-screen`}
				>
					<TopBar />
					<ReservationProvider>{children}</ReservationProvider>
					<Footer />
				</body>
			</html>
		</ViewTransitions>
	);
}
