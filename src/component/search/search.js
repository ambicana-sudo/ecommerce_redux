import React from 'react';
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
// import ProductBox from '../product-catalog/products';


const Search = ()=>{
    const [products, setProducts] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
	const [searchKey, setSearchKey] = useState('')

    const fetchList = () => {
        fetch(`http://localhost:3001/products?search=${searchKey}`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data.productList)})
        }
        useEffect(()=>{
            fetchList()
    },[])

    const filterHandle = (value)=>{
        const newFilterdItem = products.filter((item)=>{
            return item.name.toLowerCase().includes(value.toLowerCase()) 
            // return searchTerm && productName.includes(searchKey) && productName !== searchTerm
        })

        if(value === ""){
            setFilterProduct([])
        }else{
            setFilterProduct(newFilterdItem)
        }
        setSearchKey(value)
    }

    const searchHandle = async (value)=>{

        console.log('search', value)
        setSearchKey(value)

        if(value){
            let result = await fetch(`http://localhost:3001/products?search=${searchKey}`);
            console.log(result)
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }
    }

	return( 
		<>
			<div className='search'>
                <input placeholder='Search Products' value={searchKey}  onChange={(e)=> filterHandle(e.target.value)}></input>
                <button onClick={()=> searchHandle(searchKey)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className='dropdown'>
                <ul>
                    {filterProduct.slice(0,10).map((item)=>{
                        return(
                            <li onClick={()=> searchHandle(item.name)}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
		</>
	)
}
export default Search