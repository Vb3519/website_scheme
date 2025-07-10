import { configureStore } from '@reduxjs/toolkit';

import catalogProductsReducer from './slices/catalogProductsSlice';
import favProductsReducer from './slices/FavProductsSlice';

const store = configureStore({
  reducer: {
    catalogProducts: catalogProductsReducer,
    favProducts: favProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
