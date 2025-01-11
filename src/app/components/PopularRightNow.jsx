"use client";
import CommonHeader from "./CommonHeader";
import RectangleCard from "./RectangleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const PopularRightNow = () => {
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

	const popularData = [
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/venue/5e9438dbfc64f23a7d54abf9/b882ae86-2205-11ee-9034-9615ad9e9d46_hardee_ss.png?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/venue/636235657bce8425dd9d9f8e/f78814c4-5c33-11ed-aaf4-46ff6e95df42_e1f26f42_4976_11ea_b410_0a586475ce3f_7m3a6455.jpg?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/7cc64c7c-eabc-4a0f-8e0c-dbdce43bbd25/0f135d46-c22d-4636-9920-2236c59cb3db?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/f7d0d2b5-3e17-4861-a986-ff76e626fbd1/da60033d-0033-4b62-9e1c-02903795473b?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/venue/5e9438dbfc64f23a7d54abf9/b882ae86-2205-11ee-9034-9615ad9e9d46_hardee_ss.png?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/venue/636235657bce8425dd9d9f8e/f78814c4-5c33-11ed-aaf4-46ff6e95df42_e1f26f42_4976_11ea_b410_0a586475ce3f_7m3a6455.jpg?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/7cc64c7c-eabc-4a0f-8e0c-dbdce43bbd25/0f135d46-c22d-4636-9920-2236c59cb3db?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/f7d0d2b5-3e17-4861-a986-ff76e626fbd1/da60033d-0033-4b62-9e1c-02903795473b?w=600",
			rating: 8.0,
		},
	];

	return (
		<div className="overflow-hidden">
			<CommonHeader
				header={"Popular right now"}
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
				slidesPerView={1}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 12,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
				className="my-5"
			>
				{popularData.map((item, index) => (
					<SwiperSlide key={index}>
						<RectangleCard
							title={item.title}
							description={item.description}
							time={item.time}
							img={item.img}
							rating={item.rating}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default PopularRightNow;
