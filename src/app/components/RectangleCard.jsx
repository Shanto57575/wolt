import Image from "next/image";

const RectangleCard = ({ title, description, time, img, rating }) => {
	return (
		<div className="border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] mx-auto mb-4 sm:mb-6">
			<div className="relative w-full pt-[56.25%]">
				<Image
					src={img}
					alt={title}
					fill
					sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 480px"
					className="object-cover rounded-t-xl"
				/>
				<p className="hidden md:block absolute top-2 left-2 sm:top-4 sm:left-4 text-orange-600 bg-rose-200 rounded-full font-semibold px-2 md:py-1 text-xs">
					% 2000 KZT off your first order
				</p>
			</div>
			<div className="border-b border-dashed p-3 sm:p-4">
				<div className="flex items-start sm:items-center justify-between">
					<div className="flex-1 mr-2">
						<h2 className="font-bold text-base sm:text-lg line-clamp-1">
							{title}
						</h2>
						<p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
							{description}
						</p>
					</div>
					<div className="bg-rose-200 text-orange-600 px-2 py-1 sm:px-3 sm:py-1 rounded-md text-center flex-shrink-0">
						<p className="font-semibold text-sm sm:text-base">{time}</p>
						<span className="text-xs">min</span>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2">
				<div className="flex items-center gap-1 sm:gap-2">
					<p className="text-orange-600 font-semibold text-sm sm:text-base">
						w+
					</p>
					<p className="text-orange-600 font-semibold text-sm sm:text-base">
						KZT 0
					</p>
				</div>
				<p className="text-gray-600 text-xs sm:text-sm">
					<span role="img" aria-label="Smiling face">
						🙂
					</span>{" "}
					{rating.toFixed(1)}
				</p>
			</div>
		</div>
	);
};

export default RectangleCard;
