import Image from '../../images/default-thumbnail.jpg'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { increment } from '../../features/counter/counter.slice';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductBox = (props)=>{
	const dispatch = useDispatch();

	const onUpClick = () => {
		dispatch(increment());
	};
	
	let {id} = useParams()
	console.log(id)

	// console.log(props)

	const addNewKey = async ()=>{
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({isLiked: true})
	  };
	  const response = await fetch('http://localhost:3001/products/' + id, requestOptions);
	  const data = await response.json();
	  
	  return data.json
	} 

	return(
		<div className="product">
			{props.products.map((item)=>{
				const {name, price,category,isLiked} = item;
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
								<button className="wishlist" onClick={onUpClick}>
									<FontAwesomeIcon icon={faHeart} 
									style={{color: isLiked ? 'red' : 'black'}} onClick={(e)=> addNewKey()}/>
								</button>

								<button className="cart-btn">
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