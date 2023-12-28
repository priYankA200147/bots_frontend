import { configureStore } from "@reduxjs/toolkit";
import { BotsSlice } from "./store/BotsSlice";

export const store = configureStore({
    reducer:{botsStore : BotsSlice.reducer},
});