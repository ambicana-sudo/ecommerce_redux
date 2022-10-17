import Image from '../../images/default-thumbnail.jpg'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { increment } from '../../features/counter/counter.slice';
import { useDispatch} from 'react-redux';

const ProductBox = (props)=>{
	const dispatch = useDispatch();

	const onUpClick = async(id,isLiked) => {
		dispatch(increment());

		console.log(id)
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({isLiked: isLiked ? false : true})
		  };
		  const response = await fetch('http://localhost:3001/products/' + id, requestOptions);
		  const data = await response.json();
		  console.log(data)
	};

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
							<button className="wishlist" onClick={()=> onUpClick(item._id, isLiked)}>
								<FontAwesomeIcon icon={faHeart} 
								style={{color: isLiked ? 'red' : 'black'}} />
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