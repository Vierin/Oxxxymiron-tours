import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import TourPage from "../Tour/TourPage";
import TracksPage from "../Tracks/TracksPage";
import NewsPage from "../News/NewsPage";
import NewsSingle from "../News/NewsSingle";
import ShopPage from "../Shop/ShopPage";
import ProductPage from "../Product/ProductPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsSingle />} />
            <Route path="/shop/:id" element={<ProductPage />} />
            <Route path="/shop" element={<ShopPage />} />
        </Routes>
    );
};

export default AppRoutes;
