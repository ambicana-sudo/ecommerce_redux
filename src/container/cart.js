import React from 'react'
// import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { increament, decreament } from "../redux/counter/counter.slice";

const Cart = ()=>{
    const { cartItems} = useSelector((state) => state.count);

	const dispatch = useDispatch();
    const { count } = useSelector((state) => state.count);

    const onUpClick = () => {
        dispatch(increament());
    };
    const onDownClick = () => {
        dispatch(decreament());
    };

    return(
        <div className='cart-container'>
            <h1>Cart</h1>
            <div className="product wished-product">
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
					{cartItems.length > 0 ? cartItems.map((item)=>{
						const {name, price} = item;
                        return(
                            <tr>
                                <td>
                                    <div className="product-image">
                                    {item.filePath ? <img src={require('../uploads/' + item.filePath)} alt=""/> : 'image not found'}
                                    </div>
                                    <h3 className="product-name">{name}</h3>
                                </td>
                                <td>
                                    <p className="product-price"><em>${price}</em></p>
                                </td>
                                <td>
                                    <div className='quantity'>
                                        <button onClick={(e)=> onUpClick()}>+</button>
                                        <p className='num'>{count}</p>
                                        <button onClick={(e)=>onDownClick()}>-</button>
                                    </div>
                                </td>
                                <td>
                                    <p className='total-price'></p>
                                </td>
                                <td>
                                <FontAwesomeIcon icon={faXmark} />
                                </td>
                            </tr>
                        )
					}) : 'product not found'}
					</tbody>
				</table>
		    </div>
        </div>
    )
}

 export default Cart