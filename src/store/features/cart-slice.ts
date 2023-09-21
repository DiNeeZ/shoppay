import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartItems: string[];
};

const initialState: InitialState = {
  cartItems: ["cacanat", "bukake"],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state) => {
      state.cartItems.push(state.cartItems[0]);
    },
  },
});

export const { addProduct } = cart.actions;
export default cart.reducer;
