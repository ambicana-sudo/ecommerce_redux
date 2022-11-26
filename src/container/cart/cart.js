import React from 'react'
// import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreaseQuantity } from "../../redux/cart/cart.slice";
import CartSummary from './cartSummary';
import CartTable from './cartTable';

const Cart = () => {
	const { cartItems } = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const onUpClick = () => {
		dispatch(increament());
	};
	const onDownClick = () => {
		dispatch(decreaseQuantity());
	};

	return (
		<div className='cart_section'>
			<div className='container'>
			<h1>Cart</h1>
			<div className="add_product">
				<CartTable cartItem={cartItems} decrease={onDownClick} increase={onUpClick} />

				<CartSummary />
			</div>
			</div>
		</div>
	)
}

export default Cart