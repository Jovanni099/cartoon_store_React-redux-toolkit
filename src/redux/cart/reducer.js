import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(cartoon => cartoon.id !== action.payload)
        }
    }
})

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// то есть в этом объекте создаются еще эти два свойства автоматически, на базе редюсеров.