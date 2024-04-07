import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import flagSlice from "./flagSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        flagvalue: flagSlice,
    }
});