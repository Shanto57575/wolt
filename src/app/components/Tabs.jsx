import { Church, Store, Utensils } from "lucide-react";

const Tabs = () => {
	return (
		<div>
			<div className="hidden md:flex md:my-10 items-center justify-center flex-wrap gap-x-5">
				<div className="flex items-center gap-2 border bg-rose-200 text-orange-600 px-5 py-2 hover:bg-rose-100 duration-300 cursor-pointer font-bold rounded-3xl">
					<Church />
					<p>Discovery</p>
				</div>
				<div className="flex items-center gap-2 text-gray-600 font-semibold">
					<Utensils />
					<p>Restaurants</p>
				</div>
				<div className="flex items-center gap-2 text-gray-600 font-semibold">
					<Store />
					<p>Stores</p>
				</div>
			</div>
			<div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-lg z-10">
				<div className="flex items-center justify-around py-3">
					<div className="flex flex-col items-center gap-1">
						<Church className="text-orange-600" size={24} />
						<p className="text-xs font-semibold text-orange-600">Discovery</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Utensils className="text-gray-600" size={24} />
						<p className="text-xs font-semibold text-gray-600">Restaurants</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Store className="text-gray-600" size={24} />
						<p className="text-xs font-semibold text-gray-600">Stores</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
