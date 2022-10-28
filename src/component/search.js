import React from 'react';
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

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