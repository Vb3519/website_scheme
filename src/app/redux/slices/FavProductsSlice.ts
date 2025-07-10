import { createSlice } from '@reduxjs/toolkit';

// Types:
import { Product_Props } from '../../../shared/types/Product_Props';

interface FavProductsState {
  favProducts: Product_Props[];
}

interface FavProductsSlice {
  favProducts: {
    favProducts: Product_Props[];
  };
}

const initialState: FavProductsState = {
  favProducts: [],
};

const favProductsSlice = createSlice({
  name: 'favProducts',
  initialState: initialState,
  reducers: {
    addProductToFav: (state, action) => {
      state.favProducts.push(action.payload);
    },

    removeProductFromFav: (state, action) => {
      state.favProducts = state.favProducts.filter(
        (productInfo) => productInfo.id !== action.payload
      );
    },
  },
});

// Действия:
export const { addProductToFav, removeProductFromFav } =
  favProductsSlice.actions;

// Слайсы состояния:
export const selectFavProductsSlice = (state: FavProductsSlice) =>
  state.favProducts;
export const selectFavProductsList = (state: FavProductsSlice) =>
  state.favProducts.favProducts;

export default favProductsSlice.reducer;
