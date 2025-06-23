import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shopSlice",
  initialState: {
    buyItems: [],
  },
  reducers: {
    setBuyItems(state, action) {
      state.buyItems = action.payload;
    },
    purchasedItem(state, action) {
      state.buyItems.push(action.payload);
    },
  },
});

export const { actions: shopActions } = shopSlice;
export const { reducer: shopReducer } = shopSlice;
