import React from 'react';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ()=>{
	const [searchItem, setSearchItem] = useState(null)

	const searchProduct = ()=>{

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