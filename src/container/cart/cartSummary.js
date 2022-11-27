import React from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from "../../redux/cart/cart.slice";
// import { totalAmount } from "../../redux/cart/cart.slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

const CartSummary = (props) => {
    const dispatch = useDispatch()
    const emptyCart = ()=>{
		dispatch(clearCart())
	}
    return (
        <div className='cart_summary'>
            <div className="clear_btn">
                <button onClick={()=> emptyCart()}>Clear Cart</button>
            </div>

            <div className='cart_checkout'>
                <div className='subtotal'>
                    <p><strong>Subtotal</strong>:  ${props.totalAmount}</p>
					<p><strong>Discount</strong>: </p>
                    <p className='amount'>
                        <strong>Total Amount</strong>:
                    </p>
                </div>

                <p>Taxes and shipping calculated at checkout</p>
                <button>Checkout</button>
				<Link to="/home"><FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shoping</Link>
            </div>
        </div>
    )
}
export default CartSummary