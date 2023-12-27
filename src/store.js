import { configureStore } from "@reduxjs/toolkit";
import { BotsSlice } from "./store/BotsSlice";

export const store = configureStore({
    reducer:{botsSlice : BotsSlice.reducer},
});