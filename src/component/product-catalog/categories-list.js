import React from 'react';
const Categories = (props)=>{
	return(
		<div className="category-list">
			{props.categoryMenu.map((item)=>{
				return(
					<button>{item}</button>
				)
			})}
			
		</div>
	)
}
export default Categories