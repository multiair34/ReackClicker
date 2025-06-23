import { configureStore } from "@reduxjs/toolkit";
import { gameAreaReducer } from "../components/GameArea/gameArea.slice";
import { shopReducer } from "../components/Shop/shop.slice";

export default configureStore({
  reducer: { gameArea: gameAreaReducer, shop: shopReducer },
  devTools: true,
});
