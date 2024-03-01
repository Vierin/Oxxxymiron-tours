import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../components/reducers/tourReducer";
import tracksReducer from "../components/reducers/tracksReducer";

export const store = configureStore({
    reducer: {
        tour: tourReducer,
        tracks: tracksReducer,
    },
    devTools: true,
});
