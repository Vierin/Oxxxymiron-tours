import TourItems from "../Tour/TourItems";
import Tracks from "../Tracks/Tracks";
import MainBanner from "./MainBanner";
import TourBanner from "./TourBanner";

const Home = () => (
    <main className="main">
        <MainBanner />
        <TourItems />
        <TourBanner />
        <Tracks />
    </main>
);

export default Home;
