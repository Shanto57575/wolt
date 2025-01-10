import CommonHeader from "./CommonHeader";
import SpecialCard from "./SpecialCard";

const Faq = () => {
	return (
		<div>
			<CommonHeader header={"#FAQ"} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<SpecialCard
					img={
						"https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=960"
					}
					title={"title"}
					description={"description"}
				/>
				<SpecialCard
					img={
						"https://imageproxy.wolt.com/mes-image/3ea845d3-3619-4ed6-ba6b-59740a5d650f/9b8dad8d-cf10-4b05-a66a-59bd254410a5?w=600"
					}
					title={"title"}
					description={"description"}
				/>
				<SpecialCard
					img={
						"https://imageproxy.wolt.com/venue/640906f790c7860b3034c9c5/94bbaf8a-feb9-11ed-9f3d-7a5cf37ae6a6_img_7844.jpg?w=600"
					}
					title={"title"}
					description={"description"}
				/>
			</div>
		</div>
	);
};

export default Faq;
