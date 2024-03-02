import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../components/reducers/tourReducer";
import tracksReducer from "../components/reducers/tracksReducer";
import newsReducer from "../components/reducers/newsReducer";
import productsReducer from "../components/reducers/productsReducer";

export const store = configureStore({
    reducer: {
        tour: tourReducer,
        news: newsReducer,
        tracks: tracksReducer,
        products: productsReducer,
    },
    devTools: true,
});
