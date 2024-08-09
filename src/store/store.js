import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice.js';
import basketReducer from './productsReducer.js';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    basket: basketReducer, 
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
