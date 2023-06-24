import { createSlice } from "@reduxjs/toolkit";

const cartoonsSlice = createSlice({
    name: 'cartoons',
    initialState: {
        currentCartoon: null,
    },
    reducers: {
        setCurrentCartoon: (state, action) => {
            state.currentCartoon = action.payload;
        }
    }
})

export const { setCurrentCartoon } = cartoonsSlice.actions;
export default cartoonsSlice.reducer;

// то есть в этом объекте создаются еще эти два свойства автоматически, на базе редюсеров.