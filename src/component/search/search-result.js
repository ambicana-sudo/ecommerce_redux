import React from "react";
import { useState, useEffect } from "react";
import Search from "./search";

const SearchResult = ()=>{
    const [products, setProducts] = useState([])

    const fetchList = () => {
        fetch(`http://localhost:3001/products`).then(res=>res.json())
            .then(data=>{
                setProducts(data.productList)})
        }
        useEffect(()=>{
            fetchList()
    },[])

    // serach function
	const searchHandle = (value)=>{
		const newProducts = [...products]
		const filterProduct = newProducts.filter((item)=>{
			return item.name.toLowerCase().includes(value)
		})
		setProducts(filterProduct)
        // setQuery('')
	}

    return(
        <>
            <Search searchHandle={searchHandle}/>
            
            <div className="product">
                {products.map((item)=>{
                    return(
                        <div className="product-list">
                            <h3>{item.name}</h3>
                            <h4>${item.price}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SearchResult