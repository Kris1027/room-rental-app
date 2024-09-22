import Image from "next/image";

export function Amenities() {
	return (
		<section className="my-12 bg-white p-8 rounded-lg shadow-lg">
			<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
				Our Amenities
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="relative w-96 h-96 hover:opacity-90">
						<Image
							src="https://tiny.pl/0dgsq16n"
							alt="Spa"
							className="object-cover rounded-lg"
							fill
						/>
					</div>
					<h3 className="text-xl font-semibold pt-4">World-Class Spa</h3>
					<p className="text-gray-600">
						Indulge in luxurious treatments that rejuvenate your body and mind.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center text-center">
					<div className="relative w-96 h-96 hover:opacity-90">
						<Image
							src="https://tiny.pl/hh5_n4x8"
							alt="Dining"
							className="object-cover rounded-lg"
							fill
						/>
					</div>
					<h3 className="text-xl font-semibold pt-4">Fine Dining</h3>
					<p className="text-gray-600">
						Savor gourmet dishes crafted by our award-winning chefs.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center text-center">
					<div className="relative w-96 h-96 hover:opacity-90">
						<Image
							src="https://tiny.pl/20s6m2tp"
							alt="Pool"
							className="object-cover rounded-lg"
							fill
						/>
					</div>
					<h3 className="text-xl font-semibold pt-4">Infinity Pool</h3>
					<p className="text-gray-600">
						Relax by our stunning infinity pool with breathtaking ocean views.
					</p>
				</div>
			</div>
		</section>
	);
}
