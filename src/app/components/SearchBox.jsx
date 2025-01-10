import { Search } from "lucide-react";

const SearchBox = () => {
	return (
		<div className="relative">
			<input
				className="w-full md:w-72 rounded-3xl border-none bg-gray-200 px-10 py-2"
				placeholder="Search in Wolt"
				type="search"
				name="search"
			/>
			<Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
		</div>
	);
};

export default SearchBox;
