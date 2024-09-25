import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const useProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.product.find(
        (item) => item.productId === action.payload
      );
      product.quantity += 1;
      product.totalPrice = product.quantity * product.unitPrice;
    },
    decrement: (state, action) => {
      const product = state.product.find(
        (item) => item.productId === action.payload
      );

      product.quantity -= 1;
      product.totalPrice = product.quantity * product.unitPrice;
    },
    addProduct: (state, action) => {
      const itemIndex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // If item is already in cart, increment the quantity
        state.product[itemIndex].quantity += 1;
      }
      state.product.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.product = state.product.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    clearCart: (state) => {
      state.product = [];
    },
  },
});

export const { increment, decrement, addProduct, deleteProduct, clearCart } =
  useProductSlice.actions;

export const getItem = (state) => state.product.product;

export const getCurrentQuantityById = (id) => (state) =>
  state.product.product.find((item) => item.productId === id)?.quantity ?? 0;

export default useProductSlice.reducer;
