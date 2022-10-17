import React from 'react';
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ()=>{
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

	const searchProduct = ()=>{
		// const newProducts = [...products]
		// const filterProduct = newProducts.filter((item)=>{
		// 	if(searchItem.include()){

		// 	}
		// })
		// setProducts(filterProduct)
	}
	return(
		<>
			<div className='search'>
				<input value={searchItem} placeholder='Search' onChange={(e)=> setSearchItem()}></input>
				<button onClick={()=> searchProduct()}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</>
	)
}
export default Search