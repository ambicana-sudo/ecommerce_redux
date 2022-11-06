import React from 'react'
// import {useState} from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Cart = ()=>{
    const { cartItems} = useSelector((state) => state.count);
    // const [cartList, setCartList] = useState()
    return(
        <div className='cart-container'>
            <h1>Cart</h1>
            <div className="product wished-product">
			{cartItems.length > 0 ? cartItems.map((item)=>{
				const {name, category, price} = item;
					return(
						<div className="product-list">
							<div className="product-image">
								<img src={Image} alt=""/>
							</div>

							<div className="product-info">
								<h3 className="product-name">{name}</h3>
								<small className='product-cat'>{category}</small>
								<p className="product-price"><em>${price}</em></p>
							</div>

							<div className="product-btn">
								<button className="cart-btn">
									<FontAwesomeIcon icon={faXmark} />
								</button>
							</div>
						</div>
					)
			}) : 'product not found'}
		</div>
        </div>
    )
}

export default Cart