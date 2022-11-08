import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  combinedPrice: 0.0,
  combinedQuantity: 0,
};

const cartArraySlice = createSlice({
  name: "cartArray",
  initialState: initialCartState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const indexOfNewItem = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (indexOfNewItem !== -1) {
        state.items[indexOfNewItem].quantity++;
      } else {
        state.items.push(newItem);
        state.items[state.items.length - 1].quantity = 1;
      }

      state.combinedPrice += newItem.price;
      state.combinedQuantity++;
    },
    remove(state, action) {
      const removedItem = action.payload;
      const itemInArray = state.items.find(
        (item) => item.id === removedItem.id
      );

      if (itemInArray.quantity > 1) {
        itemInArray.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== removedItem.id);
      }

      state.combinedPrice -= removedItem.price;
      state.combinedQuantity--;
    },
  },
});

export default cartArraySlice;
export const cartArrayActions = cartArraySlice.actions;
