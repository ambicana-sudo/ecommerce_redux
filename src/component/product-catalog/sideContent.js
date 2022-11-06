import React from 'react';
import {useState, useEffect} from 'react'
// import Categories from "./categories-list"

const SideContent = (props)=>{
	
	return(
		<>
			<div id="sideContent">
				<div className="category-block">
					<h3>Categories</h3> 
					<div className='category-list'>
						{props.category.map((item)=>{
							return(
								<button className='category-name'>{item}</button>
							)
						})}
					</div>
				</div>
				
				<div className="brand-block">
					<h3>Brands</h3>

					<div className='brand-list'>
						{props.brand.map((item)=>{
							return(
								<button className='brand-name'>{item}</button>
							)
						})}
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
export default SideContent
