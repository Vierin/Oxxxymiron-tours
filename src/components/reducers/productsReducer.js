import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/common";
import {
    productsItemCollectionQuery,
    productsItemQuery,
} from "../../utils/queries";

const initialState = {
    items: [],
    item: null,
    isLoading: false,
};

export const getProductsItems = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const data = await request(productsItemCollectionQuery);

            const { items } = data.productsItemCollection;
            return items;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const getProductsItem = createAsyncThunk(
    "product/getProduct",
    async (id, thunkAPI) => {
        try {
            const data = await request(productsItemQuery(id));
            console.log("query", data.productsItem);
            return data.productsItem;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

const productsSlice = createSlice({
    name: "productsItems",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getProductsItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductsItems.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(getProductsItems.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getProductsItem.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductsItem.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.item = payload;
            })
            .addCase(getProductsItem.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default productsSlice.reducer;
