"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Banner = () => {
	const [swiper, setSwiper] = useState(null);
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
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/0aa7d618-c742-11ef-b148-362d292fab7d_a890d7d9_32ef_4450_8365_5b1ba7915133.jpg",
		},
		{
			type: "Promotion",
			title: "Weekend Special",
			description: "Special weekend offers --- Don't miss out",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/1243c058-bc43-11ef-887e-06998400dbc5_34cd2b19_b60a_47e7_9592_72d3dbc4cbe8.png?w=1600",
		},
		{
			type: "Membership",
			title: "Premium Benefits",
			description: "Exclusive perks --- Join premium",
			image:
				"https://imageproxy.wolt.com/venue/5df0a3abf2b1d6a36b6f53e5/da5bea10-c16e-11ed-96cc-029d05f467bd_candytown_listimage.jpeg?w=960",
		},
		{
			type: "Membership",
			title: "Premium Benefits",
			description: "Exclusive perks --- Join premium",
			image:
				"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/0aa7d618-c742-11ef-b148-362d292fab7d_a890d7d9_32ef_4450_8365_5b1ba7915133.jpg",
		},
	];

	return (
		<div className="relative w-full mt-0 md:mt-12 mb-12">
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				breakpoints={{
					640: {
						slidesPerView: 1.5,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
				}}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				onSwiper={setSwiper}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.params.navigation.nextEl = navigationNextRef.current;
				}}
				className="w-full px-2 md:px-0 overflow-hidden"
			>
				{bannerData.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="relative w-full aspect-[16/8]">
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className="object-cover rounded-lg"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />
							<div className="absolute bottom-4 left-4 text-white">
								<h2 className="text-sm md:text-xl">{slide.type}</h2>
								<h3 className="text-lg md:text-2xl font-extrabold">
									{slide.title}
								</h3>
								<p className="text-xs md:text-lg">{slide.description}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="absolute inset-y-0 left-0 lg:-left-7 right-0 lg:-right-7 flex items-center justify-between pointer-events-none z-10">
				<button
					ref={navigationPrevRef}
					onClick={() => swiper?.slidePrev()}
					className="hidden md:block pointer-events-auto text-orange-600 text-3xl bg-rose-200 hover:bg-rose-300 rounded-full p-2 transition-colors ml-2"
				>
					<MoveLeft />
				</button>
				<button
					ref={navigationNextRef}
					onClick={() => swiper?.slideNext()}
					className="hidden md:block pointer-events-auto text-orange-600 text-3xl bg-rose-200 hover:bg-rose-300 rounded-full p-2 transition-colors mr-2"
				>
					<MoveRight />
				</button>
			</div>
		</div>
	);
};

export default Banner;
