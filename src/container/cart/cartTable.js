import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import { deleteCartItem, addCartItems, decreaseQuantity } from "../../redux/cart/cart.slice"
import { Link } from "react-router-dom";

const CartTable = (props) => {
	const dispatch = useDispatch()

	const removeProduct = (cartItem)=>{
		dispatch(deleteCartItem(cartItem))
	}

	const onUpClick = (product) => {
		dispatch(addCartItems(product));
	};
	const onDownClick = (product) => {
		dispatch(decreaseQuantity(product));
	};

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
				{props.cartItem.length > 0 ? props.cartItem.map((item, id) => {
					const { name, price } = item;
					return (
						<tr key={item.id}>
							<td>
								<div className="product_info">
									<div className="product-image">
										{item.filePath ? <img src={require('../../uploads/' + item.filePath)} alt="" /> : 'image not found'}
									</div>
									<h3 className="product-name">{name}</h3>
								</div>
							</td>
							<td>
								<p className="product-price">${price}</p>
							</td>
							<td>
								<div className='quantity'>
									<button onClick={(e) => onDownClick(item)}>-</button>
									<p className='num'>{item.cartQuantity}</p>
									<button onClick={(e) => onUpClick(item)}>+</button>
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
				}) : 
				<div style={{padding: '20px 0'}}>
					<h3><strong>Your cart is currently empty</strong></h3>
					<Link to="/home"><FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shoping</Link>
				</div>
				}
			</tbody>
		</table>
	)
}
export default CartTable