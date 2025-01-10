import Image from "next/image";

const SpecialCard = ({ img, title, description }) => {
	return (
		<div className="border rounded-xl shadow shadow-gray-200 hover:scale-105 duration-500 relative overflow-hidden">
			<Image
				src={img}
				alt={title}
				width={300}
				height={300}
				className="object-cover w-full rounded-xl"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-4 text-white">
				<h1 className="font-bold text-lg">{title}</h1>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	);
};

export default SpecialCard;
