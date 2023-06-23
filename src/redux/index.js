import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})