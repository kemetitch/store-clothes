import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, actions) {
      const selectedProduct = actions.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            selectedProduct.id === product.id &&
            selectedProduct.color === product.color &&
            selectedProduct.size === product.size
        );
        if (exist) {
          state.totalPrice += selectedProduct.price;
          state.totalAmount++;
          exist.totalPrice += selectedProduct.price;
          exist.amount++;
        } else {
          state.cart.push({
            name: selectedProduct.name,
            img: selectedProduct.img,
            id: selectedProduct.id,
            size: selectedProduct.size,
            color: selectedProduct.color,
            text: selectedProduct.text,
            price: selectedProduct.price,
            totalPrice: selectedProduct.totalPrice,
            amount: selectedProduct.amount,
          });
          state.totalPrice += selectedProduct.totalPrice;
          state.totalAmount++;
        }
      } catch (err) {
        return err;
      }
    },
    removeItem(state, actions) {
      const selectedProduct = actions.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            selectedProduct.id === product.id &&
            selectedProduct.color === product.color &&
            selectedProduct.size === product.size
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== selectedProduct.id ||
              product.color !== selectedProduct.color ||
              product.size !== selectedProduct.size
          );
          state.totalPrice -= selectedProduct.price;
          state.totalAmount--;
        } else {
          state.totalPrice -= selectedProduct.price;
          state.totalAmount--;
          exist.amount--;
          exist.totalPrice -= selectedProduct.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
