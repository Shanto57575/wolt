"use client";
import CommonHeader from "./CommonHeader";
import SpecialCard from "./SpecialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const Faq = () => {
	const swiperRef = useRef(null);

	const handlePrevClick = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev();
		}
	};

	const handleNextClick = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	const faqItems = [
		{
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=960",
			title: "What is the best burger?",
			description: "Find the top-rated burgers in your area.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/3ea845d3-3619-4ed6-ba6b-59740a5d650f/9b8dad8d-cf10-4b05-a66a-59bd254410a5?w=600",
			title: "Vegan options",
			description: "Explore a variety of vegan meals available near you.",
		},
		{
			img: "https://imageproxy.wolt.com/venue/640906f790c7860b3034c9c5/94bbaf8a-feb9-11ed-9f3d-7a5cf37ae6a6_img_7844.jpg?w=600",
			title: "Delivery time",
			description: "Learn how long your food will take to arrive.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=960",
			title: "How to track my order?",
			description:
				"Get step-by-step instructions on how to track your food order.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/3ea845d3-3619-4ed6-ba6b-59740a5d650f/9b8dad8d-cf10-4b05-a66a-59bd254410a5?w=600",
			title: "Payment methods",
			description: "Find out what payment methods are available for checkout.",
		},
		{
			img: "https://imageproxy.wolt.com/venue/640906f790c7860b3034c9c5/94bbaf8a-feb9-11ed-9f3d-7a5cf37ae6a6_img_7844.jpg?w=600",
			title: "How to reorder?",
			description: "Learn how to easily reorder your favorite dishes.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=960",
			title: "What is the best burger?",
			description: "Find the top-rated burgers in your area.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/3ea845d3-3619-4ed6-ba6b-59740a5d650f/9b8dad8d-cf10-4b05-a66a-59bd254410a5?w=600",
			title: "Vegan options",
			description: "Explore a variety of vegan meals available near you.",
		},
		{
			img: "https://imageproxy.wolt.com/venue/640906f790c7860b3034c9c5/94bbaf8a-feb9-11ed-9f3d-7a5cf37ae6a6_img_7844.jpg?w=600",
			title: "Delivery time",
			description: "Learn how long your food will take to arrive.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=960",
			title: "How to track my order?",
			description:
				"Get step-by-step instructions on how to track your food order.",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/3ea845d3-3619-4ed6-ba6b-59740a5d650f/9b8dad8d-cf10-4b05-a66a-59bd254410a5?w=600",
			title: "Payment methods",
			description: "Find out what payment methods are available for checkout.",
		},
		{
			img: "https://imageproxy.wolt.com/venue/640906f790c7860b3034c9c5/94bbaf8a-feb9-11ed-9f3d-7a5cf37ae6a6_img_7844.jpg?w=600",
			title: "How to reorder?",
			description: "Learn how to easily reorder your favorite dishes.",
		},
	];

	return (
		<div className="relative w-full">
			<CommonHeader
				header={"#FAQ"}
				onPrevClick={handlePrevClick}
				onNextClick={handleNextClick}
			/>
			<div className="overflow-hidden">
				<Swiper
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					modules={[FreeMode, Mousewheel]}
					freeMode={{
						enabled: true,
						sticky: true,
						momentumRatio: 0.25,
						momentumBounce: false,
					}}
					mousewheel={{
						forceToAxis: true,
					}}
					grabCursor={true}
					spaceBetween={16}
					slidesPerView="auto"
					className="my-5"
					style={{
						paddingRight: "16px",
						marginRight: "-16px",
					}}
				>
					{faqItems.map((item, index) => (
						<SwiperSlide
							key={index}
							className="!w-[380px] flex-shrink-0"
							style={{
								marginRight: "16px",
							}}
						>
							<SpecialCard
								img={item.img}
								title={item.title}
								description={item.description}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Faq;
