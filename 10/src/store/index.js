import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authenticationSlice from "./authentication-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;
export default store;
