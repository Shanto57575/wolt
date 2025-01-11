"use client";
import { ShoppingCart } from "lucide-react";
import CommonHeader from "./CommonHeader";
import SquareCard from "./SquareCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const CartCategories = () => {
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

	const categoriesData = [
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/a69b5aea-c5a8-11ea-9f48-2e3b484a03e4_0b2c3eb5_ae95_4bff_9144_7f7c93ea74f9.jpg-md?w=300",
			title: "Burger",
			subtitle: "183 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/2d24d3ee-c5b2-11ea-a452-2e3b484a03e4_331daa86_a0e3_45da_bd06_05f8a6df06f3.jpg-md?w=300",
			title: "BreakFast",
			subtitle: "237 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/7f77b0a2-c5a9-11ea-b72a-c2fc8785833c_57601b6c_2bf1_4240_a6d0_da0d7dca0517.jpg-md?w=300",
			title: "Soup",
			subtitle: "215 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/fd1d18e0-c5a8-11ea-8a78-822e244794a0_a1852dc9_4afb_4877_9659_793adcb0f87b.jpg-md?w=300",
			title: "Salad",
			subtitle: "292 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/8469121c-cb98-11ec-aea3-6e751d6aff91_87f42415_c563_4359_a7bb_f31d7c8f6378.png-md?w=300",
			title: "Donor",
			subtitle: "121 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/a69b5aea-c5a8-11ea-9f48-2e3b484a03e4_0b2c3eb5_ae95_4bff_9144_7f7c93ea74f9.jpg-md?w=300",
			title: "Burger",
			subtitle: "183 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/2d24d3ee-c5b2-11ea-a452-2e3b484a03e4_331daa86_a0e3_45da_bd06_05f8a6df06f3.jpg-md?w=300",
			title: "BreakFast",
			subtitle: "237 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/7f77b0a2-c5a9-11ea-b72a-c2fc8785833c_57601b6c_2bf1_4240_a6d0_da0d7dca0517.jpg-md?w=300",
			title: "Soup",
			subtitle: "215 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/fd1d18e0-c5a8-11ea-8a78-822e244794a0_a1852dc9_4afb_4877_9659_793adcb0f87b.jpg-md?w=300",
			title: "Salad",
			subtitle: "292 place",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/8469121c-cb98-11ec-aea3-6e751d6aff91_87f42415_c563_4359_a7bb_f31d7c8f6378.png-md?w=300",
			title: "Donor",
			subtitle: "121 place",
		},
	];

	return (
		<div>
			<CommonHeader
				header={"Categories 🛒"}
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
					768: {
						slidesPerView: 4,
						spaceBetween: 16,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
				className="my-5"
			>
				{categoriesData.map((category, index) => (
					<SwiperSlide key={index}>
						<SquareCard
							img={category.img}
							title={category.title}
							subtitle={category.subtitle}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CartCategories;
