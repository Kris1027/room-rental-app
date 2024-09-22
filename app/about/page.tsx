import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About",
};

export default function About() {
	return (
		<main className="flex-1 w-full max-w-7xl mx-auto p-1 md:p-4">
			<section className="bg-white md:p-8 rounded-lg shadow-lg mx-auto">
				<h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
					About The Grand Horizon Hotel
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
					<div className="relative w-full h-96">
						<Image
							src="https://tiny.pl/2f06v9n5"
							fill
							alt="Hotel view"
							className="object-contain rounded-lg"
						/>
					</div>
					<div className="relative w-full h-96">
						<Image
							src="https://tiny.pl/tsm53y26"
							fill
							alt="Hotel view"
							className="object-contain rounded-lg"
						/>
					</div>
				</div>

				<ul className="list-inside text-center">
					<li className="text-xl text-gray-800 mt-6 leading-relaxed tracking-wide">
						Nestled along the pristine shores of an azure coastline, The Grand
						Horizon Hotel offers an unparalleled experience of luxury and
						tranquility. Our five-star resort, set against a backdrop of
						breathtaking ocean views and lush tropical gardens, is the perfect
						destination for travelers seeking both relaxation and adventure.
					</li>

					<li className="text-xl text-gray-800 mt-6 leading-relaxed tracking-wide">
						At The Grand Horizon, elegance meets comfort in our 200 exquisitely
						designed rooms and suites, each boasting panoramic vistas, plush
						bedding, and state-of-the-art amenities. Whether you choose a room
						with a private balcony overlooking the sea or a suite with its own
						plunge pool, every stay promises to be a rejuvenating retreat.
					</li>

					<li className="text-xl text-gray-800 mt-6 leading-relaxed tracking-wide">
						Indulge your senses at our world-class spa, where skilled therapists
						offer a variety of treatments inspired by ancient wellness
						traditions. For those looking to stay active, our fully equipped
						fitness center, infinity pools, and yoga pavilion provide ample
						opportunities to maintain your routine in style.
					</li>

					<li className="text-xl text-gray-800 mt-6 leading-relaxed tracking-wide">
						Gastronomy takes center stage at The Grand Horizon. Our
						award-winning chefs craft culinary masterpieces using the freshest
						local ingredients, served across our three signature restaurants.
						From a beachfront seafood grill to a rooftop fine dining experience
						under the stars, every meal is a journey of flavors.
					</li>

					<li className="text-xl text-gray-800 mt-6 leading-relaxed tracking-wide">
						For the more adventurous, The Grand Horizon offers a wide array of
						activities, including scuba diving, sailing, and guided cultural
						excursions to explore the rich history and vibrant culture of the
						region. Families are also well-catered for, with a dedicated
						children’s club and a variety of family-friendly activities.
					</li>

					<li className="text-xl text-gray-800 mt-6 leading-relaxed tracking-wide">
						Whether you&apos;re planning a romantic getaway, a family vacation,
						or a corporate retreat, The Grand Horizon Hotel is your gateway to a
						world of elegance and relaxation. Come and discover where luxury
						meets the horizon, and create memories that will last a lifetime.
					</li>
				</ul>
			</section>
		</main>
	);
}
