"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const bannerData = [
		{
			type: "Special Offer",
			title: "Summer Deals",
			description: "Hot deals for summer --- Limited time",
			image:
				"https://imageproxy.wolt.com/venue/5df0a3abf2b1d6a36b6f53e5/da5bea10-c16e-11ed-96cc-029d05f467bd_candytown_listimage.jpeg?w=960",
		},
		{
			type: "Gift Card",
			title: "Wolt+ Gift Card",
			description: "Gifting made easy --- Wolt for any occasion",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/1243c058-bc43-11ef-887e-06998400dbc5_34cd2b19_b60a_47e7_9592_72d3dbc4cbe8.png?w=1600",
		},

		{
			type: "Article",
			title: "Wolt+ oT For delivery",
			description: "Free trial for 30 days --- join Now",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/158b480a-0455-11ee-b448-8e99364be171_ade09989_52ab_468b_85c5_1a83e57fdbf2.jpg?w=960",
		},
		{
			type: "Promotion",
			title: "Weekend Special",
			description: "Special weekend offers --- Don't miss out",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/1243c058-bc43-11ef-887e-06998400dbc5_34cd2b19_b60a_47e7_9592_72d3dbc4cbe8.png?w=1600",
		},
		{
			type: "Featured",
			title: "New Restaurants",
			description: "Discover new flavors --- Try today",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/158b480a-0455-11ee-b448-8e99364be171_ade09989_52ab_468b_85c5_1a83e57fdbf2.jpg?w=960",
		},
		{
			type: "Membership",
			title: "Premium Benefits",
			description: "Exclusive perks --- Join premium",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/1243c058-bc43-11ef-887e-06998400dbc5_34cd2b19_b60a_47e7_9592_72d3dbc4cbe8.png?w=1600",
		},
	];

	return (
		<div className="relative w-full my-12 px-4">
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1}
				breakpoints={{
					640: {
						// sm
						slidesPerView: 2,
						spaceBetween: 20,
					},
				}}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onBeforeInit={(swiper) => {
					if (swiper.params.navigation) {
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.params.navigation.nextEl = navigationNextRef.current;
					}
				}}
				className="w-full"
			>
				{bannerData.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="relative w-full h-80">
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className="object-cover rounded-lg"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
							<div className="absolute bottom-6 left-6 text-white">
								<h1 className="text-xl">{slide.type}</h1>
								<h1 className="text-2xl font-extrabold">{slide.title}</h1>
								<p className="text-lg">{slide.description}</p>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
					<button
						ref={navigationPrevRef}
						className="pointer-events-auto text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors -ml-2"
					>
						<MoveLeft />
					</button>
					<button
						ref={navigationNextRef}
						className="pointer-events-auto text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors -mr-2"
					>
						<MoveRight />
					</button>
				</div>
			</Swiper>
		</div>
	);
};

export default Banner;
