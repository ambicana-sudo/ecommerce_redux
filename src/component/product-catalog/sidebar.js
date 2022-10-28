import React from 'react';
import {useState, useEffect} from 'react'
// import Categories from "./categories-list"

const Sidebar = ()=>{
	const [products, setProducts] = useState([])

	// const categoryList = [
	// 	...new Set(
	// 		products.map((item)=>{
	// 			return item.category
	// 		})
	// 	)
	// ];

	// const [categoryMenu, setCategoryMenu] = useState(categoryList)


	const fetchList = () => {
		fetch('http://localhost:3001/products').then(res=>res.json())
				.then(data=> setProducts(data.productList))
	}
	useEffect(()=>{
		fetchList()
	},[])

	const filterProduct = (category)=>{
    let newProducts = [...products]

    let filteredItem = newProducts.filter((item)=>{
		console.log(filteredItem)
        return item.category === category
    })
    setProducts(filteredItem)
	 
	}
	return(
		<>
			<div id="sidebar">
				<div className="category-block">
					<h3>Categories</h3> 
					{/* <Categories categoryMenu={categoryMenu} filterProduct={filterProduct}/> */}
					<ul>
						<li onClick={
							()=> filterProduct('Clothing') 
							}
							>Clothing</li>
						<li onClick={()=> filterProduct('Accesories')}>Accesories</li>
						<li onClick={()=> filterProduct('Shoe')}>Shoe</li>
					</ul>
				</div>
				
				<div className="brand-block">
					<h3>Brands</h3>

					<div className="category-list">
						<div className="filter">
							<div className="form-group">
								<label><input type="radio" name="radio" checked/><span>All </span></label>
							</div>
							<div className="form-group">
								<label><input type="radio" name="radio"/><span>Nike</span></label>
							</div>
							<div className="form-group">
								<label><input type="radio" name="radio"/><span>Addidas</span></label>
							</div>
							<div className="form-group">
								<label><input type="radio" name="radio"/><span>Random</span></label>
							</div>
							<div className="form-group">
								<label><input type="radio" name="radio"/><span>Local</span></label>
							</div>
						</div>  
					</div>
				</div>

				<div className="price-block">
					<h3>Price Range</h3>
				</div>

				<div className="color-block">
					<h3>Colors</h3>
					<div className="category-list">
						<button style={{background: `red`}}></button>
						<button style={{background: `green`}}></button>
						<button style={{background: `blue`}}></button>
						<button style={{background: `purple`}}></button>
						<button style={{background: `orange`}}></button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Sidebar
