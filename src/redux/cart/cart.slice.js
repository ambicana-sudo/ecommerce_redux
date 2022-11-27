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
		// ADD PRODUCTS TO CART
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

		// DELETE PRODUCTS FROM CART
		deleteCartItem: (state, action)=>{
			const newCartItems = state.cartItems.filter((item)=>{
				return item._id !== action.payload._id
			})

			message.error(`Deleted <strong>${action.payload.name}</strong> from your cart`)

			state.cartItems = newCartItems
			localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
		},

		// DECREASE PRODUCT QUANTITY
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
			}
			localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
		},

		//CLEAR CART
		clearCart: (state)=>{
			state.cartItems = []

			message.error('Cart Cleared')
			localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
		},

		//TOTAL AMOUNT
		totalAmount: (state, action)=>{
			const totalAmount = state.cartItems.reduce((acc, cartItem)=>{
				const totalPrice = cartItem.cartQuantity * cartItem.price
				console.log(totalPrice)
				return acc + totalPrice
			},0)
			state.cartTotalAmount = totalAmount
		},
	}
});

export const { decreaseQuantity, addCartItems, deleteCartItem, clearCart, addLikedItems, totalAmount } = cartSlice.actions;
export default cartSlice.reducer;
