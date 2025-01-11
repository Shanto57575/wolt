import Banner from "./components/Banner"
import BestOnWolt from "./components/BestOnWolt"
import Brands from "./components/Brands"
import CartCategories from "./components/CartCategories"
import Categories from "./components/Categories"
import DeliveryFee from "./components/DeliveryFee"
import DiscountsInStore from "./components/DiscountsInStore"
import Faq from "./components/Faq"
import FastestDelivery from "./components/FastestDelivery"
import FoodLovers from "./components/FoodLovers"
import Footer from "./components/Footer"
import ItemCombo from "./components/ItemCombo"
import LocalFavourite from "./components/LocalFavourite"
import NearOffers from "./components/NearOffers"
import OnLyOnWolt from "./components/OnLyOnWolt"
import PopularRightNow from "./components/PopularRightNow"
import QuickLinks from "./components/QuickLinks"
import RestaurantsOnWolt from "./components/RestaurantsOnWolt"
import Snacks from "./components/Snacks"
import StoresOnWolt from "./components/StoresOnWolt"
import TopGroceryPicks from "./components/TopGroceryPicks"
import TopRated from "./components/TopRated"
import Types from "./components/Types"
import WalletFriendly from "./components/WalletFriendly"

const Home = () => {
  return (
    <div>
      <Types />
      <Banner />
      <Snacks />
      <BestOnWolt />
      <PopularRightNow />
      <Categories />
      <Brands />
      <CartCategories />
      <ItemCombo />
      <NearOffers />
      <FastestDelivery />
      <WalletFriendly />
      <FoodLovers />
      <DeliveryFee />
      <TopRated />
      <LocalFavourite />
      <TopGroceryPicks />
      <RestaurantsOnWolt />
      <StoresOnWolt />
      <DiscountsInStore />
      <Faq />
      <OnLyOnWolt />
      <QuickLinks />
    </div>
  )
}

export default Home