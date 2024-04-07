import { createSlice } from "@reduxjs/toolkit";

export const flagSlice = createSlice({
    initialState: false,
    name: "flagVaalluue",
    reducers: {
        flag: (state) => (!state),
    },
});

export const { flag } = flagSlice.actions;
export default flagSlice.reducer;