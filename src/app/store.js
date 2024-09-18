import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/Products/productSlice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
