import CommonHeader from "./CommonHeader";
import RectangleCard from "./RectangleCard";

const FastestDelivery = () => {
	return (
		<div>
			<CommonHeader header={"Fastest Delivery"} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
				<RectangleCard
					title={"Burger King Arman"}
					description={"Taste is King"}
					time={"30-40"}
					img="https://imageproxy.wolt.com/mes-image/5897d758-c66b-4489-b42d-44876e87a832/006c6515-03c1-48ed-8ccd-be25753d9c5d?w=600"
					rating={8.0}
				/>
				<RectangleCard
					title={"Burger King Arman"}
					description={"Taste is King"}
					time={"30-40"}
					img="https://imageproxy.wolt.com/mes-image/4003c810-5cf0-48fc-843f-a05713fa7c1d/53224955-38d6-4771-a9e0-40082d3bd66c?w=600"
					rating={8.0}
				/>
				<RectangleCard
					title={"Burger King Arman"}
					description={"Taste is King"}
					time={"30-40"}
					img={
						"https://imageproxy.wolt.com/mes-image/022ea88f-c13d-40ca-b2a4-db50ac57bd5c/91065d84-7dfe-418a-8327-07ddea7dbd48?w=600"
					}
					rating={8.0}
				/>
				<RectangleCard
					title={"Burger King Arman"}
					description={"Taste is King"}
					time={"30-40"}
					img={
						"https://imageproxy.wolt.com/venue/5e8f4cc52a727ed9d6fbe6e6/ce40ce6a-b606-11ef-81b6-3aabbf9a113e_master_doner.jpg?w=600"
					}
					rating={8.0}
				/>
			</div>
		</div>
	);
};

export default FastestDelivery;
