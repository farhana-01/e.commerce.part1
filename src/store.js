import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/slices/add-cart/addCartSlices';
import productsReducer from './slices/products/productsSlices';


export const store = configureStore({
    reducer: {
      counter: counterReducer,
      products:productsReducer,
    },
  });