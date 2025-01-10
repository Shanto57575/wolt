import restaurants from "../../../public/types/restaurants.avif";
import grocery from "../../../public/types/grocery.avif";
import wolt_market from "../../../public/types/wolt_market.avif";
import pharmacy from "../../../public/types/pharmacy.avif";
import alcohol_v2 from "../../../public/types/alcohol_v2.avif";
import pet_supply from "../../../public/types/pet_supply.avif";
import health_and_beauty from "../../../public/types/health_and_beauty.avif";
import electronics from "../../../public/types/electronics.avif";
import Image from "next/image";
import { Church, Store, Utensils } from "lucide-react";

const allTypes = [
	{
		label: "Restaurants",
		img: restaurants,
	},
	{
		label: "Groceries",
		img: grocery,
	},
	{
		label: "Wolt Market",
		img: wolt_market,
	},
	{
		label: "Pharmacies",
		img: pharmacy,
	},
	{
		label: "Alcohol",
		img: alcohol_v2,
	},
	{
		label: "Pet Supply",
		img: pet_supply,
	},
	{
		label: "Health & Beauty",
		img: health_and_beauty,
	},
	{
		label: "Electronics",
		img: electronics,
	},
];

const Types = () => {
	return (
		<div className="mt-10">
			<div className="mb-20 flex items-center justify-center flex-wrap gap-x-5">
				<div className="flex items-center gap-2 border bg-rose-200 text-orange-600 px-5 py-2 hover:bg-rose-100 duration-300 cursor-pointer font-bold rounded-3xl">
					<Church />
					<p>Discovery</p>
				</div>
				<div className="flex items-center gap-2 text-gray-600 font-semibold mt-3 md:mt-0">
					<Utensils />
					<p>Restaurants</p>
				</div>
				<div className="flex items-center gap-2 text-gray-600 font-semibold mt-3 md:mt-0">
					<Store />
					<p>Stores</p>
				</div>
			</div>
			<div className="hidden lg:flex items-center justify-center gap-5">
				{allTypes.map((item, index) => (
					<div key={index}>
						<div className="cursor-pointer">
							<div className="bg-gray-200 w-full mx-auto rounded-md py-5 px-10 mb-3">
								<Image
									className="hover:scale-110 duration-300"
									src={item.img}
									alt={item.label}
									width={50}
									height={50}
								/>
							</div>
							<p className="font-medium text-gray-600 text-sm text-center">
								{item.label}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Types;
