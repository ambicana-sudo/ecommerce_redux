import React from 'react';
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { increment } from '../features/counter/counter.slice';
import { useDispatch} from 'react-redux';

const Search = ()=>{
	const dispatch = useDispatch();

	const [searchItem, setSearchItem] = useState(null)
	const [products, setProducts] = useState([])
	const fetchList = () => {
		fetch(`http://localhost:3001/products`).then(res=>res.json())
			.then(data=>{
				setProducts(data.productList)
			})
	}
	useEffect(()=>{
		fetchList()
	},[])

	const onUpClick = async(id,isLiked) => {
		dispatch(increment());
		
		// console.log(id)
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({isLiked: isLiked ? false : true})
		  };
		  const response = await fetch('http://localhost:3001/products/' + id, requestOptions);
		  const data = await response.json();
		  if(data){
			fetchList()
		  }
	};

	const searchProduct = (value)=>{
		const newProducts = [...products]
		const filterProduct = newProducts.filter((item)=>{
			return item.category === value
		})
		setProducts(filterProduct)
	}
	return(
		<>
			<div className='search'>
				<input placeholder='Search' onChange={(e)=> setSearchItem(e.target.value)}></input>
				<button onClick={()=> searchProduct(searchItem)}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>

			
		</>
	)
}
export default Search