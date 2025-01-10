import CommonHeader from "./CommonHeader";
import SquareCard from "./SquareCard";

const Brands = () => {
	return (
		<div>
			<CommonHeader header={"Brands"} />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
				<SquareCard
					img={
						"https://imageproxy.wolt.com/mes-image/cd3d66b4-41ea-49b3-9e79-3f1328529cfb/fd295d44-e545-463b-a470-986fad84e2e5?w=300"
					}
					title={"Sultan"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/mes-image/fcef1911-409c-424d-a2c8-086273b37493/6305142a-8142-4add-bb7f-4c8310b0bb9c?w=300"
					}
					title={"Qanat"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/mes-image/cb3b5c5f-527a-4fd7-a7d5-61bf26e6e4a1/2615cca8-7893-4301-aab2-78c268628694?w=300"
					}
					title={"Red Dragon"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/2acd73b2-06c3-11ee-8749-62c23cea3811_6ab94770_d117_49c5_b343_2cb04368740c.png?w=300"
					}
					title={"Wolt Market"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/e689f34a-d85c-11ed-b8fc-26171faf1577_b042a659_1fbb_4d66_b435_1f1295d937a7.png?w=300"
					}
					title={"Europharma"}
				/>
			</div>
		</div>
	);
};

export default Brands;
