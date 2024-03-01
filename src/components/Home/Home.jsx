import News from "../News/News";
import TourItems from "../Tour/TourItems";
import Tracks from "../Tracks/Tracks";
import MainBanner from "./MainBanner";
import ShopBanner from "./ShopBanner";
import TourBanner from "./TourBanner";

const Home = () => (
    <main className="main">
        <MainBanner />
        <TourItems />
        <TourBanner />
        <Tracks />
        <ShopBanner />
        <News />
    </main>
);

export default Home;
