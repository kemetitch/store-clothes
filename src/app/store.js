import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";
import productReducer from "../features/slices/productSlice";
import cartReducer from "../features/slices/cartSlice";
import loginReducer from "../features/slices/loginSlice.jsx";
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer,
    cart: cartReducer,
    login: loginReducer,
  },
});
