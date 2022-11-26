import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import { deleteCartItem } from "../../redux/cart/cart.slice";

const CartTable = (props) => {
	const dispatch = useDispatch()

	const removeProduct = (cartItem)=>{
		dispatch(deleteCartItem(cartItem))
	}
	return (
		<table>
			<thead>
				<tr>
					<th>Product</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total Price</th>
					<th>Remove</th>
				</tr>
			</thead>

			<tbody>
				{props.cartItem.length > 0 ? props.cartItem.map((item) => {
					const { name, price } = item;
					return (
						<tr>
							<td>
								<div className="product-image">
									{item.filePath ? <img src={require('../../uploads/' + item.filePath)} alt="" /> : 'image not found'}
								</div>
								<h3 className="product-name">{name}</h3>
							</td>
							<td>
								<p className="product-price"><em>${price}</em></p>
							</td>
							<td>
								<div className='quantity'>
									<button onClick={(e) => props.increase()}>+</button>
									<p className='num'>{item.cartQuantity}</p>
									<button onClick={(e) => props.decrease()}>-</button>
								</div>
							</td>
							<td>
								<p className='total-price'>${price * item.cartQuantity}</p>
							</td>
							<td>
								<button onClick={()=> {removeProduct(item)}}>
									<i><FontAwesomeIcon icon={faXmark} /></i>
								</button>
							</td>
						</tr>
					)
				}) : <strong>Your cart is currently empty</strong>}
			</tbody>
		</table>
	)
}
export default CartTable