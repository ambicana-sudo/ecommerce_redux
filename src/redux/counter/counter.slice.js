import { createSlice } from "@reduxjs/toolkit";
import { Button, message, Space } from 'antd';
import React from 'react';

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
      // state.cartItems.push(action.payload)
      // console.log(state.cartItems)

      // now check if the product already exist in the cart
      const itemIndex = state.cartItems.findIndex((item)=>{
        return item._id === action.payload._id
      })

		if(itemIndex >= 0){
			state.cartItems[itemIndex].carQuantity += 1
			message.success('Increased product quantity')
		}else{
			const tempProduct = {...action.payload, carQuantity: 1} // cartQuantity is to increase the product quantity if  
                                                              		// theproduct already exist in the cart
      	state.cartItems.push(tempProduct)
			message.success('Added new product to your cart')
		}
    },

    addLikedItems: (state,action)=>{
      state.likedItems.push(action.payload)
    }
  }
});

export const { increament, decreament, addCartItems, addLikedItems } = countSlice.actions;
export default countSlice.reducer;
