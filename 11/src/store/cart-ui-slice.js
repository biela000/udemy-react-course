import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  isShown: false,
};

const cartUISlice = createSlice({
  name: "cartUI",
  initialState: defaultValue,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export default cartUISlice;
export const cartUIActions = cartUISlice.actions;
