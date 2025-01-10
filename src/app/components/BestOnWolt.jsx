import ArrowButton from "./ArrowButton";
import CommonHeader from "./CommonHeader";
import SquareCard from "./SquareCard";

const BestOnWolt = () => {
	return (
		<div>
			<CommonHeader header={"Best On Wolt+ 🏆"} />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/ce742850-37ad-11ef-8787-923cbd2a6299_a295ca3d_168b_4c4e_8547_536ce685957f.png?w=300"
					}
					title={"I'M"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/86d9f460-bc51-11ef-bc3a-66693c6e52fb_2409c31b_e01c_4303_bc8d_f5c5cae96764.png?w=300"
					}
					title={"Burger King"}
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
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/429290e8-06c0-11ee-91cf-c2c3dbe198f6_305a7e86_e052_41aa_b3b6_8dfe46f0cf5b.png?w=300"
					}
					title={"Hardee's"}
				/>
			</div>
		</div>
	);
};

export default BestOnWolt;
