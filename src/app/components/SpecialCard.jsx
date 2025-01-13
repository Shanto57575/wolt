import Image from "next/image";

const SpecialCard = ({ img, title, description }) => {
	return (
		<div className="border rounded-xl shadow-md hover:scale-105 duration-500 relative overflow-hidden w-full h-full">
			<div className="aspect-[4/3] relative">
				<Image
					src={img}
					alt={title}
					fill
					className="object-cover rounded-xl"
					sizes="280px"
				/>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 flex flex-col justify-end p-4 text-white">
				<h1 className="font-bold text-lg mb-1">{title}</h1>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	);
};
export default SpecialCard;
