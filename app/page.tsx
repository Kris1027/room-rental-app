import { Amenities } from "@/app/_components/amenities";
import { BookLink } from "@/app/_components/book-link";
import { GuestTestimonials } from "@/app/_components/guest-testimonials";
import { Hero } from "@/app/_components/hero";
import { HomeAbout } from "@/app/_components/home-about";

export default function Home() {
	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
			<Hero />
			<HomeAbout />
			<Amenities />
			<GuestTestimonials />
			<BookLink />
		</main>
	);
}
