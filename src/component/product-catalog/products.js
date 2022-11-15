import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { addCartItems, addLikedItems } from '../../redux/counter/counter.slice';
import { useDispatch} from 'react-redux';
import {Link} from "react-router-dom"
// import { unstable_composeClasses } from '@mui/material';
// import Loader from '../loader';

const ProductBox = (props)=>{
	const dispatch = useDispatch();

	const addToCart = (product)=>{
		dispatch(addCartItems(product))
	}

	const likeHandle = async(id,isLiked,product) => {
		if(!isLiked){
			dispatch(addLikedItems(product))
		}
		
		// console.log(id)
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({isLiked: isLiked ? false : true})
		};
		const response = await fetch('http://localhost:3001/products/' + id, requestOptions);
		const data = await response.json();
		if(data){
			props.fetchList()
		}
	};

	return(
		<>
		<div className="product">
			{props.products.length > 0 ? props.products.map((item)=>{
				const {name, price,category,isLiked} = item;
				// const id = item._id
				// console.log(item.filePath)
				return(
					
					<div className="product-list" key={item.name}>
						<Link to={`/product/${item._id}`}>
							<div className="product-image">
								<img src={require('../../uploads/' + item.filePath)} alt=""/>
							</div>

							<div className="product-info">
								<h3 className="product-name">{name}</h3>
								<small className='product-cat'>{category}</small>
								<p className="product-price"><em>${price}</em></p>
								{/* <p className="product-price"><em>{item._id}</em></p> */}
							</div>
						</Link>

						<div className="product-btn">
							<button className="wishlist" onClick={()=> likeHandle(item._id, isLiked, item)}>
								<FontAwesomeIcon icon={faHeart} 
								style={{color: isLiked ? 'red' : 'black'}} />
							</button>
						
							<button className="cart-btn" onClick={()=> {addToCart(item)}}>
								<FontAwesomeIcon icon={faCartShopping} />
							</button>
						</div>
						{/* <div className={hasRecentlyAdded() ? 'tag' : null}>New</div> */}
					</div>
				)
			}) : 'loading...'}
		</div>
		</>
	)
}
export default ProductBox