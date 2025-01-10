import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="relative w-full my-12">
			{/* Mobile view (single image) */}
			<div className="block sm:hidden px-4">
				<div className="relative w-full h-80">
					<Image
						src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/158b480a-0455-11ee-b448-8e99364be171_ade09989_52ab_468b_85c5_1a83e57fdbf2.jpg?w=960"
						alt="Wolt+ for delivery"
						fill
						className="object-cover rounded-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
					<div className="absolute bottom-6 left-6 text-white">
						<h1 className="text-xl">Article</h1>
						<h1 className="text-2xl font-extrabold">Wolt+ oT For delivery</h1>
						<p className="text-lg">Free trial for 30 days --- join Now</p>
					</div>
				</div>
			</div>

			{/* Desktop view (two images) */}
			<div className="hidden sm:flex items-center justify-center gap-4 px-4">
				<div className="relative w-full h-80">
					<Image
						src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/158b480a-0455-11ee-b448-8e99364be171_ade09989_52ab_468b_85c5_1a83e57fdbf2.jpg?w=960"
						alt="Wolt+ for delivery"
						fill
						className="object-cover rounded-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
					<div className="absolute bottom-6 left-6 text-white">
						<h1 className="text-xl">Article</h1>
						<h1 className="text-2xl font-extrabold">Wolt+ oT For delivery</h1>
						<p className="text-lg">Free trial for 30 days --- join Now</p>
					</div>
				</div>
				<div className="relative w-full h-80">
					<Image
						src="https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/1243c058-bc43-11ef-887e-06998400dbc5_34cd2b19_b60a_47e7_9592_72d3dbc4cbe8.png?w=1600"
						alt="Wolt+ Gift Card"
						fill
						className="object-cover rounded-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
					<div className="absolute bottom-6 left-6 text-white">
						<h1 className="text-xl">Gift Card</h1>
						<h1 className="text-2xl font-extrabold">Wolt+ Gift Card</h1>
						<p className="text-lg">
							Gifting made easy --- Wolt for any occasion
						</p>
					</div>
				</div>
			</div>

			{/* Static navigation buttons */}
			<button className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 transition-colors">
				<MoveLeft />
			</button>
			<button className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 transition-colors">
				<MoveRight />
			</button>
		</div>
	);
};

export default Banner;
