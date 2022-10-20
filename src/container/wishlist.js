import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from '../images/default-thumbnail.jpg'
import { increment, decrement } from '../features/counter/counter.slice';
import { useDispatch, useSelector} from 'react-redux';

const Wishlist = ()=>{
	const {count} =useSelector(state=>state.count)
	const dispatch = useDispatch()
    const [products, setProducts] = useState([])
	// const [wishListItem, setWishListItem] = useState()
	console.log(count)
	
	const onDownClick = () => {
		dispatch(decrement());
	};

	const onUpClick = () => {
		dispatch(increment());
	};

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
		<section className='wishlist-section'>
			<div className='container'>
				<h1>My Wishlist</h1>
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
										<p className="product-price"><em>${price}</em></p>
									</div>

									<div className='quantity'>
										<button onClick={()=> onUpClick()}>+</button>
										<p>{count}</p>
										<button onClick={()=>onDownClick()}>-</button>
									</div>
					
									<div className="product-btn">
										<button className="delete">
											<FontAwesomeIcon icon={faXmark} />
										</button>
									</div>
								</div>
							)
						}
					})}
				</div>
			</div>
		</section>
    )
}
export default Wishlist