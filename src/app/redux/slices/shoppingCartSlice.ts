import { createSlice } from '@reduxjs/toolkit';

// Types:
import { Product_Props } from '../../../shared/types/Product_Props';

interface ShoppingCartState {
  productsInCart: Product_Props[];
}

interface ShoppingCartSlice {
  shoppingCart: ShoppingCartState;
}

const initialState: ShoppingCartState = {
  productsInCart: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsInCart.push(action.payload);
    },

    removeProductFromCart: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

// Действия:
export const { addProductToCart, removeProductFromCart } =
  shoppingCartSlice.actions;

// Состояние:
export const selectShoppingCartProductsList = (state: ShoppingCartSlice) =>
  state.shoppingCart.productsInCart;

export default shoppingCartSlice.reducer;
