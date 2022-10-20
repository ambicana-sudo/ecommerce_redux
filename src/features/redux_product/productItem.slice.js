import { createSlice } from "@reduxjs/toolkit";

export const initialState = {  
    products: [],
 }

 const productSlice = createSlice({
    name: "produtItem",
    initialState,
    reducers: {
        changeWidth: (state, actions) => {
            state.width= actions.payload + 'px'
        },
    }
 })

export const { changeWidth} = productSlice.actions;
export default productSlice.reducer;