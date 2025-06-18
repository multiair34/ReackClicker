import { configureStore } from "@reduxjs/toolkit";
import { gameAreaReducer } from "../components/GameArea/gameArea.slice";

export default configureStore({
  reducer: { gameAreaReducer },
  devTools: true,
});
