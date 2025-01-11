"use client";
import CommonHeader from "./CommonHeader";
import RectangleCard from "./RectangleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const OnLyOnWolt = () => {
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

	const onLyOnWoltItems = [
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/5897d758-c66b-4489-b42d-44876e87a832/006c6515-03c1-48ed-8ccd-be25753d9c5d?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/022ea88f-c13d-40ca-b2a4-db50ac57bd5c/91065d84-7dfe-418a-8327-07ddea7dbd48?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/venue/5e8f4cc52a727ed9d6fbe6e6/ce40ce6a-b606-11ef-81b6-3aabbf9a113e_master_doner.jpg?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/5897d758-c66b-4489-b42d-44876e87a832/006c6515-03c1-48ed-8ccd-be25753d9c5d?w=600",
			rating: 8.0,
		},
		{
			title: "Burger King Arman",
			description: "Taste is King",
			time: "30-40",
			img: "https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=600",
			rating: 8.0,
		},
	];

	return (
		<div>
			<CommonHeader
				header={"Only On Wolt"}
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
				}}
				className="my-5"
			>
				{onLyOnWoltItems.map((item, index) => (
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

export default OnLyOnWolt;
