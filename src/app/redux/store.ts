import { configureStore } from '@reduxjs/toolkit';

import catalogProductsReducer from './slices/catalogProductsSlice';
import favProductsReducer from './slices/FavProductsSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

// Фильтры:
import groupOneFilterReducer from './slices/groupOneFilterSlice';

const store = configureStore({
  reducer: {
    catalogProducts: catalogProductsReducer,
    favProducts: favProductsReducer,
    shoppingCart: shoppingCartReducer,
    groupOneFilter: groupOneFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
