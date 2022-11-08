import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  likedItems: []
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. 

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increament: (state,action) => {
      state.count = state.count + 1;
    },

    decreament: (state) => {
      if(state.count > 0){
        state.count = state.count - 1;
      }
    },

    addCartItems: (state,action)=>{
      state.cartItems.push(action.payload)
      console.log(state.cartItems)
    },

    addLikedItems: (state,action)=>{
      state.likedItems.push(action.payload)
    }
  }
});

export const { increament, decreament, addCartItems, addLikedItems } = countSlice.actions;
export default countSlice.reducer;
