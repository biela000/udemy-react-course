import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, isShown: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value += action.payload;
    },
    toggleCounter(state) {
      state.isShown = !state.isShown;
    },
  },
});

export default counterSlice;
