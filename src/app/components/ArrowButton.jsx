import { MoveLeft, MoveRight } from "lucide-react";

const ArrowButton = ({ onPrevClick, onNextClick }) => {
	return (
		<div className="flex items-center gap-2">
			<span className="hidden md:block text-sm font-semibold text-orange-600">
				See All
			</span>
			<MoveLeft
				onClick={onPrevClick}
				size={30}
				className="text-orange-600 bg-rose-200 p-1 rounded-full cursor-pointer"
			/>
			<MoveRight
				onClick={onNextClick}
				size={30}
				className="text-orange-600 bg-rose-200 p-1 rounded-full cursor-pointer"
			/>
		</div>
	);
};

export default ArrowButton;
