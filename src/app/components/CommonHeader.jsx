import ArrowButton from "./ArrowButton";

const CommonHeader = ({ header, onPrevClick, onNextClick }) => {
	return (
		<div className="flex items-center justify-between mt-12 mb-5 mx-2">
			<h1 className="text-xl md:text-3xl font-bold">{header}</h1>
			<ArrowButton onPrevClick={onPrevClick} onNextClick={onNextClick} />
		</div>
	);
};

export default CommonHeader;
