import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';

export const initialState = {
	// cartItems: [],

	// get cartItems form the local storage and pass it to cartItems state
	cartItems: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
	likedItems: []
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. 

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCartItems: (state, action) => {
			// state.cartItems.push(action.payload)
			// console.log(state.cartItems)

			// now check if the product already exist in the cart
			const itemIndex = state.cartItems.findIndex((item) => {
				return item._id === action.payload._id
			})

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1
				message.info(`Increased ${state.cartItems[itemIndex].name} quantity`)
			} else {
				// cartQuantity is to increase the product quantity if theproduct already exist in the cart
				const tempProduct = { ...action.payload, cartQuantity: 1 }

				state.cartItems.push(tempProduct)
				message.success(`Added ${action.payload.name} to your cart`)
			}

			// add cart Items to local storage
			localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
		},

		deleteCartItem: (state, action)=>{
			const newCartItems = state.cartItems.filter((item)=>{
				return item._id !== action.payload._id
			})

			message.success(`Deleted <strong>${action.payload.name}</strong> from your cart`)

			state.cartItems = newCartItems
			localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
		},

		increament: (state, action) => {
			state.count = state.count + 1;
		},

		decreaseQuantity: (state, action) => {
			// find index
			const itemIndex = state.cartItems.findIndex((item) => {
				return item._id === action.payload._id
			})

			if(state.cartItems[itemIndex].cartQuantity > 1){
				state.cartItems[itemIndex].cartQuantity -= 1
			}else{
				const newCartItems = state.cartItems.filter((item)=>{
					return item._id !== action.payload._id
				})

				state.cartItems = newCartItems
				localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
			}
		},
	}
});

export const { increament, decreaseQuantity, addCartItems, deleteCartItem, addLikedItems } = cartSlice.actions;
export default cartSlice.reducer;
