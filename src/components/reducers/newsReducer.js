import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/common";
import { newsItemCollectionQuery } from "../../utils/queries";

const initialState = {
    items: [],
    isLoading: false,
};

export const getNewsItems = createAsyncThunk(
    "newsItems/getNewsItems",
    async (_, thunkAPI) => {
        try {
            const data = await request(newsItemCollectionQuery);

            const { items } = data.newsItemCollection;

            return items;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const newsItemsSlice = createSlice({
    name: "newsItems",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getNewsItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNewsItems.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(getNewsItems.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default newsItemsSlice.reducer;
