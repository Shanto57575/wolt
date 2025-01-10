import { MoveLeft, MoveRight } from "lucide-react";

const ArrowButton = () => {
	return (
		<div className="flex items-center gap-2">
			<span className="hidden md:block text-sm font-semibold text-orange-600">
				See All
			</span>
			<MoveLeft
				size={30}
				className="text-orange-600 bg-rose-200 p-1 rounded-full"
			/>
			<MoveRight
				size={30}
				className="text-orange-600 bg-rose-200 p-1 rounded-full"
			/>
		</div>
	);
};

export default ArrowButton;
