import Image from "next/image";

const SpecialCard = ({ img, title, description }) => {
	return (
		<div className="border rounded-xl shadow-md hover:scale-105 duration-500 relative overflow-hidden w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
			<div className="aspect-[4/3] relative">
				<Image
					src={img}
					alt={title}
					fill
					className="object-cover rounded-xl"
					sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20px"
				/>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 flex flex-col justify-end p-4 sm:p-5 text-white">
				<h1 className="font-bold text-xl sm:text-lg md:text-xl mb-1">
					{title}
				</h1>
				<p className="text-base sm:text-sm md:text-base">{description}</p>
			</div>
		</div>
	);
};

export default SpecialCard;
