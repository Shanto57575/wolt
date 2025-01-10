import Image from "next/image";

const SquareCard = ({ img, title, subtitle }) => {
	return (
		<div className="border rounded-xl mb-4 sm:mb-6 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
			<div className="relative w-full pt-[100%]">
				<Image
					src={img}
					alt={title}
					fill
					sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
					className="object-cover rounded-t-xl"
				/>
			</div>
			<div className="px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6">
				<h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
					{title}
				</h3>
				{subtitle && (
					<p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 sm:mt-2 line-clamp-2">
						{subtitle}
					</p>
				)}
			</div>
		</div>
	);
};

export default SquareCard;
