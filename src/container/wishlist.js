import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons'
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
				<div className='page-heading'>
					<h1>My Wishlist</h1>
				</div>
				
				<div className="product wished-product">
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Product</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Add to cart</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							
								{products.map((item)=>{
									const {name, category, price} = item;
									if(item.isLiked === true){
										return(
											<tr>
												<td>
														<img src={Image} alt=""/>
												</td>
												<td>
														<h3 className="product-name">{name}</h3>
												</td>
												<td><p className="product-price"><em>${price}</em></p></td>
												<td>
													<div className='quantity'>
														<button onClick={()=> onUpClick()}>+</button>
														<p className='num'>{count}</p>
														<button onClick={()=>onDownClick()}>-</button>
													</div>
												</td>
												<td>
													<button className="cart">
														<FontAwesomeIcon icon={faCartShopping} />
													</button>
												</td>
												<td>
													<button className="delete">
														<FontAwesomeIcon icon={faXmark} />
													</button>
												</td>
											</tr>
										)
									}
								})}
							
						</tbody>
					</table>
				</div>
			</div>
		</section>
    )
}
export default Wishlist