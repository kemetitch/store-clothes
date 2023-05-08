import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
export const productSlice = createSlice({
  name: "filteredproducts",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    filteredOneProduct:
      JSON.parse(sessionStorage.getItem("filteredoneproduct")) || storeData,
    error: false,
  },
  reducers: {
    filteredProducts(state, actions) {
      try {
        const filter = storeData.filter(
          (product) => product.type === actions.payload
        );
        state.error = false;
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },
    filteredOneProduct(state, actions) {
      try {
        const filter = storeData.filter(
          (product) => product.id === actions.payload
        );
        state.filteredOneProduct = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredoneproduct", saveState);
      } catch (err) {
        return err;
      }
    },
    filterGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
          (product) => product.gender === action.payload
        );
        state.filteredProducts = gender;
        if (gender.length > 0) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    filterPrice(state) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredProducts = price;
        const count = price.length;
        if (count > 1) {
          state.error = false;
          state.filteredProducts = price;
          const saveState = JSON.stringify(price);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    filterColor(state, action) {
      try {
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.filteredProducts = color;
        if (color.length > 0) {
          state.error = false;
          const saveState = JSON.stringify(color);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    filterSize(state, action) {
      try {
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.filteredProducts = size;
        if (size.length > 0) {
          state.error = false;
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
  },
});
export const {
  filteredProducts,
  filteredOneProduct,
  filterColor,
  filterPrice,
  filterSize,
  filterGender,
} = productSlice.actions;
export default productSlice.reducer;
