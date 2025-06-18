import { createSlice } from "@reduxjs/toolkit";

const initialState = { taps: 0, coins: 0 };

const gameAreaSlice = createSlice({
  name: "gameAreaSlice",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setTaps: (state, action) => {
      state.taps = action.payload;
    },
  },
});

export const { actions: gameAreaActions } = gameAreaSlice;
export const { reducer: gameAreaReducer } = gameAreaSlice;
