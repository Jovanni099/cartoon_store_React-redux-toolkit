import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer.js';
import cartoonsReducer from './cartoons/reducer.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartoons: cartoonsReducer,
    }
})