import React from 'react';
const Categories = (props)=>{
	return(
		<div className="category-list">
			{props.categoryMenu.map((item)=>{
				return(
					<button onClick={()=> props.filterProduct(item)}>{item}</button>
				)
				console.log(JSON.stringify())
			})}
			
		</div>
	)
}
export default Categories