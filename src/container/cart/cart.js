import React from 'react'

import { useSelector} from 'react-redux'
import CartSummary from './cartSummary';
import CartTable from './cartTable';

const Cart = () => {
	const { cartItems } = useSelector((state) => state.cart);

	const totalAmount = cartItems.reduce((acc, cartItem)=>{
		const totalPrice = cartItem.cartQuantity * cartItem.price
		return acc + totalPrice
	},0)

	const totalCart = cartItems.reduce((acc, cartItem)=>{
		return acc + cartItem.cartQuantity
	},0)

	console.log(totalCart)
	console.log(totalAmount)

	return (
		<div className='main_content'>
			<div className='container'>
			<h1>Cart</h1>
			<div className="add_product">
				<CartTable cartItem={cartItems}/>

				<CartSummary totalAmount={totalAmount}/>
			</div>
			</div>
		</div>
	)
}

export default Cart