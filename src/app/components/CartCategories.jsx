import { ShoppingCart } from "lucide-react";
import CommonHeader from "./CommonHeader";
import SquareCard from "./SquareCard";

const CartCategories = () => {
	return (
		<div>
			<CommonHeader header={"Categories 🛒"} />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/categories/a69b5aea-c5a8-11ea-9f48-2e3b484a03e4_0b2c3eb5_ae95_4bff_9144_7f7c93ea74f9.jpg-md?w=300"
					}
					title={"Burger"}
					subtitle={"183 place"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/categories/2d24d3ee-c5b2-11ea-a452-2e3b484a03e4_331daa86_a0e3_45da_bd06_05f8a6df06f3.jpg-md?w=300"
					}
					title={"BreakFast"}
					subtitle={"237 place"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/categories/7f77b0a2-c5a9-11ea-b72a-c2fc8785833c_57601b6c_2bf1_4240_a6d0_da0d7dca0517.jpg-md?w=300"
					}
					title={"Soup"}
					subtitle={"215 place"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/categories/fd1d18e0-c5a8-11ea-8a78-822e244794a0_a1852dc9_4afb_4877_9659_793adcb0f87b.jpg-md?w=300"
					}
					title={"Salad"}
					subtitle={"292 place"}
				/>
				<SquareCard
					img={
						"https://imageproxy.wolt.com/wolt-frontpage-images/categories/8469121c-cb98-11ec-aea3-6e751d6aff91_87f42415_c563_4359_a7bb_f31d7c8f6378.png-md?w=300"
					}
					title={"Donor"}
					subtitle={"121 place"}
				/>
			</div>
		</div>
	);
};

export default CartCategories;
