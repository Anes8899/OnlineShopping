import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleProductLoader } from "../../services/apiItem";

// export const fetchProduct = createAsyncThunk(
//   "product/fetchProduct", // action type string
//   async (productId) => {
//     const data = await singleProductLoader(productId); // API call
//     const res = await data.json();
//     return { res }; // Assuming the response has a 'data' field
//   }
// );
// console.log(res);

const initialState = {
  product: [],
  // product: [
  //   {
  //     productId: 0,
  //     quantity: 1, // Initialize quantity to 1
  //     unitPrice: 25, // This will be updated once the product is loaded
  //     totalPrice: 25,
  //   },
  // ],
};

const useProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
      state.totalPrice = state.quantity * state.unitPrice;
    },
    decrement: (state) => {
      state.quantity += 1;
      state.totalPrice = state.quantity - state.unitPrice;
    },
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchProduct.pending, (state) => {
    //       state.status = "loading";
    //     })
    //     .addCase(fetchProduct.fulfilled, (state, action) => {
    //       state.status = "succeeded";
    //       state.product = action.payload; // Store the product data
    //     })
    //     .addCase(fetchProduct.rejected, (state, action) => {
    //       state.status = "failed";
    //       state.error = action.error.message;
    //     });
    // },
  },
});

export const { increment, decrement, addProduct } = useProductSlice.actions;

export default useProductSlice.reducer;
