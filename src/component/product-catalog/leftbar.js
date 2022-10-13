import Pagination from '@mui/material/Pagination';
import ProductBox from './products';
import { useState, useEffect } from "react"
import React from 'react';

const Leftbar =()=>{
	
	const [products, setProducts] = useState([])
	//this maxpage is calculated from backend and based on number of values we have.
	//so we use setMaxPage only after the response of some api calls
	const [maxPage, setMaxPage] =useState(0)
	//current page represents the currently selected page in pagination
	const[currentPage, setCurrentPage] = useState(1)
	const [pageSize, setPageSize] = useState(4)

	const fetchList = () => {
		fetch(`http://localhost:3001/products?page=1&size=${pageSize}`).then(res=>res.json())
					.then(data=>{
						setMaxPage(data.maxPage)
						setProducts(data.productList)
					})
	}
	useEffect(()=>{
		fetchList()
	},[])


	const handleChange = (page)=>{
		setCurrentPage(page)
		fetch(`http://localhost:3001/products?page=${page}&size=${pageSize}`).then(res=>res.json())
		.then(data=> {
			// debugger
			if(data.productList){
				setProducts(data.productList)
				setMaxPage(data.maxPage)
			}
		})
	}

	return(
		<>
			<div id="leftbar">
					<div className="left_head">
						<div className='sort-product'>
							<strong>Sort By:</strong>
							<select
									name="category-list"
									id="category-list"
									onChange={(e)=> null}
							>
									<option>New</option>
									<option>Best Seller</option>
									<option>Sold</option>
							</select>
						</div>
						<h1>Products</h1>
					</div>

					<ProductBox products={products}/>

					<div className='pagination'>
						<div className='page-size'>
							
							<div className='size-option'>
							<strong>Page Size:</strong>
								<select onChange={(e)=>{
									setPageSize(e.target.value)
								}
								}>
										<option>4</option>
										<option>8</option>
										<option>12</option>
								</select>
							</div>
							
							<button className="btn-sm" onClick={()=> handleChange(currentPage)}>Submit</button>
						</div>

						<Pagination count={maxPage} onChange={(event, page)=> handleChange(page)} showFirstButton showLastButton />
					</div>
			</div>
		</>
	)
}

export default Leftbar


// const fiteredItem = (val)=>{
	//     let newProduct = [...products]
	//     const newCategory = newProduct.filter((item)=>{
	//         return item.category = val
	//     })
	//     // setProducts(newCategory)
	//     console.log(newCategory)
	// }