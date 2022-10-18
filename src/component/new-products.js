import React from "react";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Image from '../images/default-thumbnail.jpg'

const NewProduct = ()=>{
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
		<div className="new-product-list">
			{products.map((item)=>{
				const {name, category, price} = item;
				if(item.tag === "new"){
					return(
						<div className="new-items">
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
									<FontAwesomeIcon icon={faArrowRightLong} />
								</button>
							</div>
						</div>
					)
				}
			})}
		</div>
	)
}
export default NewProduct