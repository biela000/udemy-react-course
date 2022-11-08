import { configureStore } from "@reduxjs/toolkit";

import cartArraySlice from "./cart-array-slice";
import cartUISlice from "./cart-ui-slice";

const store = configureStore({
  reducer: {
    cartProducts: cartArraySlice.reducer,
    cartUI: cartUISlice.reducer,
  },
});

export default store;
