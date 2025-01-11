"use client";
import CommonHeader from "./CommonHeader";
import SquareCard from "./SquareCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const Brands = () => {
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

	const brandsData = [
		{
			img: "https://imageproxy.wolt.com/mes-image/cd3d66b4-41ea-49b3-9e79-3f1328529cfb/fd295d44-e545-463b-a470-986fad84e2e5?w=300",
			title: "Sultan",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/fcef1911-409c-424d-a2c8-086273b37493/6305142a-8142-4add-bb7f-4c8310b0bb9c?w=300",
			title: "Qanat",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/cb3b5c5f-527a-4fd7-a7d5-61bf26e6e4a1/2615cca8-7893-4301-aab2-78c268628694?w=300",
			title: "Red Dragon",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/2acd73b2-06c3-11ee-8749-62c23cea3811_6ab94770_d117_49c5_b343_2cb04368740c.png?w=300",
			title: "Wolt Market",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/e689f34a-d85c-11ed-b8fc-26171faf1577_b042a659_1fbb_4d66_b435_1f1295d937a7.png?w=300",
			title: "Europharma",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/cd3d66b4-41ea-49b3-9e79-3f1328529cfb/fd295d44-e545-463b-a470-986fad84e2e5?w=300",
			title: "Sultan",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/fcef1911-409c-424d-a2c8-086273b37493/6305142a-8142-4add-bb7f-4c8310b0bb9c?w=300",
			title: "Qanat",
		},
		{
			img: "https://imageproxy.wolt.com/mes-image/cb3b5c5f-527a-4fd7-a7d5-61bf26e6e4a1/2615cca8-7893-4301-aab2-78c268628694?w=300",
			title: "Red Dragon",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/2acd73b2-06c3-11ee-8749-62c23cea3811_6ab94770_d117_49c5_b343_2cb04368740c.png?w=300",
			title: "Wolt Market",
		},
		{
			img: "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/e689f34a-d85c-11ed-b8fc-26171faf1577_b042a659_1fbb_4d66_b435_1f1295d937a7.png?w=300",
			title: "Europharma",
		},
	];

	return (
		<div>
			<CommonHeader
				header={"Brands"}
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
				{brandsData.map((brand, index) => (
					<SwiperSlide key={index}>
						<SquareCard img={brand.img} title={brand.title} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Brands;
