import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartItems: string[];
};

const initialState: InitialState = {
  cartItems: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: () => console.log("add product"),
  },
});

export const { addProduct } = cart.actions;
export default cart.reducer;
