import React from 'react'
import Image from '../../images/default-thumbnail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { increment, decrement } from '../../features/counter/counter.slice';
import { useDispatch} from 'react-redux';
// import { unstable_composeClasses } from '@mui/material';

const ProductBox = (props)=>{
	
	const dispatch = useDispatch();

	const onDownClick = () => {
		dispatch(decrement());
	};

	const onUpClick = async(id,isLiked) => {
		if(!isLiked){
			dispatch(increment());
		}else{
			dispatch(decrement());
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
		<div className="product">
			{props.products.map((item)=>{
				const {name, price,category,isLiked} = item;
				return(
					<div className="product-list" key={item.id}>
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
						
							<button className="cart-btn" onClick={()=> {onUpClick(); onDownClick();}}>
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