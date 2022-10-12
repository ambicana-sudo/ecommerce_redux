import Image from '../../images/default-thumbnail.jpg'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ProductBox = (props)=>{

    // const hasRecentlyAdded =()=>{
    //     const diff = props?.created - Date.now()
    //     console.log(diff)

    //     return true
    // }

    for(let key of props.products){
        console.log(key.created)
    }

    return(
        <div className="product">
            {props.products.map((item)=>{
                const {name, price,category} = item;
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
                        <div className="price-info">
                            <button className="cart-btn">
                            <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button className="wishlist">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                        {/* <div className={hasRecentlyAdded() ? 'tag' : null}>New</div> */}
                        
                    </div>
                )
            })}
        </div>
    )
}
export default ProductBox