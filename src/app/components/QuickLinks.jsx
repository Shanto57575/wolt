import { ChevronRight } from "lucide-react";

const QuickLinks = () => {
	return (
		<div className="mb-10 px-4">
			<h1 className="text-2xl md:text-3xl font-bold mb-5 mt-10">Quick links</h1>
			<div className="flex flex-col gap-4">
				<button className="w-full max-w-xs border px-6 py-4 flex items-center justify-between rounded-lg shadow-md hover:bg-gray-100 duration-300">
					<span>Send a gift</span> <ChevronRight />
				</button>
			</div>
		</div>
	);
};

export default QuickLinks;
