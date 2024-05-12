import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    updateCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
    deleteFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
     },
    itemByUser: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {addToCart, updateCart, deleteFromCart, itemByUser} = cartReducer.actions;

export default cartReducer.reducer;
