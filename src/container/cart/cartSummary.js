import React from "react";

const CartSummary = () => {
    return (
        <div className='cart_summary'>
            <button className='clear_cart'>Clear Cart</button>

            <div className='cart_checkout'>
                <div className='subtotal'>
                    <p>Subtotal: </p>
						  <p>Discount: </p>
                    <p className='amount'>
                        Toatal Amount: $
                    </p>
                </div>

                <p>Taxes and shipping calculated at checkout</p>
                <button>checkout</button>
					 <p>Continue Shoping</p>
            </div>
        </div>
    )
}
export default CartSummary