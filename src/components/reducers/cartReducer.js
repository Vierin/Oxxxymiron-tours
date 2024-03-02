import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartCount(state, action) {
            state.totalCount = action.payload;
        },
    },
});

export const { setCartCount } = cartSlice.actions;

export default cartSlice.reducer;
