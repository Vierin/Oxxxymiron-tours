import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../components/reducers/tourReducer";
import tracksReducer from "../components/reducers/tracksReducer";
import newsReducer from "../components/reducers/newsReducer";

export const store = configureStore({
    reducer: {
        tour: tourReducer,
        news: newsReducer,
        tracks: tracksReducer,
    },
    devTools: true,
});
