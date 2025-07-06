import { configureStore } from '@reduxjs/toolkit';

import catalogProductsReducer from './slices/catalogProductsSlice';

const store = configureStore({
  reducer: {
    catalogProducts: catalogProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
