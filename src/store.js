import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/slices/add-cart/addCartSlices';



export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });