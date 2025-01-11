"use client";
import CommonHeader from "./CommonHeader";
import SpecialCard from "./SpecialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const DiscountsInStore = () => {
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

	const discountsInStore = [
		{
			img: "https://imageproxy.wolt.com/venue/669a612b23ad444a028f2a7a/c4f41314-5ace-11ef-b74d-420bfcf71ae3_______________2024_08_15___11.22.35.png?w=600",
			title: "Cheeseburger",
			description: "Delicious and cheesy",
		},
		{
			img: "https://imageproxy.wolt.com/venue/66ab31fae49b37c0fd0c8cb4/6680c386-53da-11ef-af48-c6765b9df6b7_p1964655.jpg?w=600",
			title: "French Fries",
			description: "Crispy and golden",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/e2956ee4-32f0-447d-b73b-c2279801079d/8a9e3a5a-8436-4e77-8397-406b14c470ed?w=600",
			title: "Chicken Wings",
			description: "Spicy and crispy",
		},
		{
			img: "https://imageproxy.wolt.com/venue/669a612b23ad444a028f2a7a/c4f41314-5ace-11ef-b74d-420bfcf71ae3_______________2024_08_15___11.22.35.png?w=600",
			title: "Vegan Salad",
			description: "Fresh and healthy",
		},
		{
			img: "https://imageproxy.wolt.com/venue/66ab31fae49b37c0fd0c8cb4/6680c386-53da-11ef-af48-c6765b9df6b7_p1964655.jpg?w=600",
			title: "Pizza Margherita",
			description: "Classic Italian pizza",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/e2956ee4-32f0-447d-b73b-c2279801079d/8a9e3a5a-8436-4e77-8397-406b14c470ed?w=600",
			title: "Pasta Bolognese",
			description: "Rich and savory",
		},
		{
			img: "https://imageproxy.wolt.com/venue/669a612b23ad444a028f2a7a/c4f41314-5ace-11ef-b74d-420bfcf71ae3_______________2024_08_15___11.22.35.png?w=600",
			title: "Cheeseburger",
			description: "Delicious and cheesy",
		},
		{
			img: "https://imageproxy.wolt.com/venue/66ab31fae49b37c0fd0c8cb4/6680c386-53da-11ef-af48-c6765b9df6b7_p1964655.jpg?w=600",
			title: "French Fries",
			description: "Crispy and golden",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/e2956ee4-32f0-447d-b73b-c2279801079d/8a9e3a5a-8436-4e77-8397-406b14c470ed?w=600",
			title: "Chicken Wings",
			description: "Spicy and crispy",
		},
		{
			img: "https://imageproxy.wolt.com/venue/669a612b23ad444a028f2a7a/c4f41314-5ace-11ef-b74d-420bfcf71ae3_______________2024_08_15___11.22.35.png?w=600",
			title: "Vegan Salad",
			description: "Fresh and healthy",
		},
		{
			img: "https://imageproxy.wolt.com/venue/66ab31fae49b37c0fd0c8cb4/6680c386-53da-11ef-af48-c6765b9df6b7_p1964655.jpg?w=600",
			title: "Pizza Margherita",
			description: "Classic Italian pizza",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/e2956ee4-32f0-447d-b73b-c2279801079d/8a9e3a5a-8436-4e77-8397-406b14c470ed?w=600",
			title: "Pasta Bolognese",
			description: "Rich and savory",
		},
	];

	return (
		<div>
			<CommonHeader
				header={"Discounts in stores"}
				onPrevClick={handlePrevClick}
				onNextClick={handleNextClick}
			/>
			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				modules={[FreeMode, Mousewheel]}
				freeMode={{
					enabled: true,
					sticky: true,
				}}
				mousewheel={{
					forceToAxis: true,
				}}
				grabCursor={true}
				spaceBetween={12}
				slidesPerView={2}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 12,
					},
				}}
				className="my-5"
			>
				{discountsInStore.map((item, index) => (
					<SwiperSlide key={index}>
						<SpecialCard
							img={item.img}
							title={item.title}
							description={item.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default DiscountsInStore;
