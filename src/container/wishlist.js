import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from '../images/default-thumbnail.jpg'

const Wishlist = ()=>{

    const [products, setProducts] = useState([])

	const fetchList = () => {
	fetch(`http://localhost:3001/products`).then(res=>res.json())
		.then(data=>{
			// debugger;
			setProducts(data.productList)
		})	
	}
	useEffect(()=>{
		fetchList()
	},[])

    return(
        <div className="product wished-product">
			{products.map((item)=>{
				const {name, category, price} = item;
				if(item.isLiked === true){
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
				}
			})}
		</div>
    )
}
export default Wishlist