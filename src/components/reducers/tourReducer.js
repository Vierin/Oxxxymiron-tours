import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/common";
import { tourItemCollectionQuery } from "../../utils/queries";

const initialState = {
    items: [],
    isLoading: false,
};

export const getTourItems = createAsyncThunk(
    "tour/getTourItems",
    async (_, thunkAPI) => {
        try {
            const data = await request(tourItemCollectionQuery);

            const { items } = data.tourItemCollection;

            return items;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const tourItemsSlice = createSlice({
    name: "tourItems",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getTourItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTourItems.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(getTourItems.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default tourItemsSlice.reducer;
