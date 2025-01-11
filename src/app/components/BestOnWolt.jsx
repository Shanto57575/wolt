"use client";
import CommonHeader from "./CommonHeader";
import SquareCard from "./SquareCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const BestOnWolt = () => {
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

	const woltData = [
		{
			title: "I'M",
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/ce742850-37ad-11ef-8787-923cbd2a6299_a295ca3d_168b_4c4e_8547_536ce685957f.png?w=300",
		},
		{
			title: "Burger King",
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/86d9f460-bc51-11ef-bc3a-66693c6e52fb_2409c31b_e01c_4303_bc8d_f5c5cae96764.png?w=300",
		},
		{
			title: "Wolt Market",
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/2acd73b2-06c3-11ee-8749-62c23cea3811_6ab94770_d117_49c5_b343_2cb04368740c.png?w=300",
		},
		{
			title: "Europharma",
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/e689f34a-d85c-11ed-b8fc-26171faf1577_b042a659_1fbb_4d66_b435_1f1295d937a7.png?w=300",
		},
		{
			title: "Hardee's",
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/429290e8-06c0-11ee-91cf-c2c3dbe198f6_305a7e86_e052_41aa_b3b6_8dfe46f0cf5b.png?w=300",
		},
		{
			title: "Taco Bell",
			img: "https://imageproxy.wolt.com/mes-image/022ea88f-c13d-40ca-b2a4-db50ac57bd5c/91065d84-7dfe-418a-8327-07ddea7dbd48?w=600",
		},
		{
			title: "Subway",
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=600",
		},
		{
			title: "Pizza Hut",
			img: "https://imageproxy.wolt.com/mes-image/5897d758-c66b-4489-b42d-44876e87a832/006c6515-03c1-48ed-8ccd-be25753d9c5d?w=600",
		},
	];

	return (
		<div className="overflow-hidden">
			<CommonHeader
				header={"Best On Wolt+ 🏆"}
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
				{woltData.map((item, index) => (
					<SwiperSlide key={index}>
						<SquareCard img={item.img} title={item.title} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default BestOnWolt;
