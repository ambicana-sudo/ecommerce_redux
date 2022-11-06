import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Image from '../images/default-thumbnail.jpg'
import { increament, decreament } from '../features/counter/counter.slice';
import { useDispatch, useSelector} from 'react-redux';

const Wishlist = ()=>{
	const {count} =useSelector(state=>state.count)
	const dispatch = useDispatch()

    const [products, setProducts] = useState([])
	const [totalQuantity, setTotalQuantity] = useState(0)

	const number = count+1
	console.log(number)
	
	const onDownClick = () => {
		dispatch(decreament());
	};

	const onUpClick = () => {
		dispatch(increament());
	};

	const calculateItems = ()=>{
		const totalItem = products.reduce((total, item)=>{
			return total + number
		}, 1)
		setTotalQuantity(totalItem)
	}
	

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
		<>
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
								<th>Price</th>
								<th>Quantity</th>
								<th>Total Price</th>
								<th>Add to cart</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{products.map((item, index)=>{
								const {name,price} = item;
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
													<button onClick={(e)=> onUpClick()}>+</button>
													<p className='num'>{number}</p>
													<button onClick={(e)=>onDownClick()}>-</button>
												</div>
											</td>
											<td>
												<p className='total-price'>{price * number}</p>
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
							<p className='total'>total no. of Item = {totalQuantity}</p>
						</tbody>
					</table>
					{/* <p className='total'>total no. of Item = {number}</p> */}
				</div>
			</div>
		</section>

		{/* <div>
			{productItems.map((item)=>{
				return(
					<li>{item.name}</li>
				)
			})}
		</div> */}
		</>
    )
}
export default Wishlist