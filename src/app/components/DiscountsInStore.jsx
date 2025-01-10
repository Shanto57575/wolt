import CommonHeader from "./CommonHeader";
import SpecialCard from "./SpecialCard";

const DiscountsInStore = () => {
	return (
		<div>
			<CommonHeader header={"Discounts in stores"} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<SpecialCard
					img={
						"https://imageproxy.wolt.com/venue/669a612b23ad444a028f2a7a/c4f41314-5ace-11ef-b74d-420bfcf71ae3_______________2024_08_15___11.22.35.png?w=600"
					}
					title={"title"}
					description={"description"}
				/>
				<SpecialCard
					img={
						"https://imageproxy.wolt.com/venue/66ab31fae49b37c0fd0c8cb4/6680c386-53da-11ef-af48-c6765b9df6b7_p1964655.jpg?w=600"
					}
					title={"title"}
					description={"description"}
				/>
				<SpecialCard
					img={
						"https://imageproxy.wolt.com/mes-image/e2956ee4-32f0-447d-b73b-c2279801079d/8a9e3a5a-8436-4e77-8397-406b14c470ed?w=600"
					}
					title={"title"}
					description={"description"}
				/>
			</div>
		</div>
	);
};

export default DiscountsInStore;
